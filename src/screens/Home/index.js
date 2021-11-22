import React, { Component, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Alert } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import Activities from '../../components/Activities';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            taskLists: {}
        }
    }



    async componentDidMount() {

        const { navigation } = this.props;

        this.focusListener = navigation.addListener('focus', async () => {
            try {
                const response = await api.get('/v1/tasklist');
                // console.log(response.data.data);
                this.setState({
                    taskLists: response.data.data
                });

            } catch (_err) {
                this.setState({ error: _err.message });
            }
        });

        this.focusListener;


    }

    handleLogoutPress = async () => {
        const notPossibleMsg = "não foi possivel realizar a operação"
        Alert.alert("Logout", "Tem certeza que deseja sair de sua conta?", [
            {
                text: "Não",
                style: "cancel"
            },
            {
                text: "Sim",
                onPress: async () => {
                    try {
                        await AsyncStorage.removeItem('token');
                        // console.log(AsyncStorage.getItem('token'))
                        this.props.navigation.navigate('SignIn')
                    } catch (error) {
                        Alert.alert(notPossibleMsg)
                        console.log(error)
                    }
                }
            }
        ])
       

    }

    handleDeleteTaskList = (id) => {
        const notPossibleMsg = "Não foi possível deletar este item.";

        Alert.alert("Remover", "Tem certeza que deseja remover esta lista de anotações?", [
            {
                text: "Não",
                style: "cancel"
            },
            {
                text: "Sim",
                onPress: async () => {
                    try {
                        const response = await api.delete('/v1/tasklist/' + id).then(() => {
                            return api.get(`/v1/tasklist`)

                        }).then(response => {
                            const taskLists = response.data.data;
                            this.setState({ taskLists })

                            console.log("deletado!")
                        });
                        this.focusListener;
                        console.log('Excluido');
                    } catch (error) {
                        Alert.alert(notPossibleMsg)
                        console.log(error)
                    }
                }
            }
        ])
    };

    render() {
        console.log(this.state.taskLists)


        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ backgroundColor: '#333333' }}
            >

                <View style={styles.header}>
                    <View style={styles.activitiesList}>
                        <Text style={styles.title}>ACESSO RÁPIDO</Text>
                    </View>
                    <TouchableOpacity
                        onPress={this.handleLogoutPress}
                    >
                        <Icon
                            name="log-out"
                            size={30}
                            color='#ffd851'
                        />
                    </TouchableOpacity>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ paddingHorizontal: 15, }}

                >

                    {
                        Object.values(this.state.taskLists).map((taskList, index) => {
                            return (
                                <Activities key={index}
                                    name={taskList.title}
                                    date={taskList.date}
                                    status={taskList.status}
                                    onPress={() => this.props.navigation.navigate('List', { idTaskList: taskList.id })}
                                    onPressDelete={() => this.handleDeleteTaskList(taskList.id)}

                                />

                            )
                        })
                    }
                </ScrollView>
            </ScrollView>
        );
    };
};





