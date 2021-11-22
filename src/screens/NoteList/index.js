import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { styles } from './styles';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Activities from '../../components/Activities';

export default class NoteList extends Component {


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
            // call your refresh method here
            // console.log('refresh');
        });

        this.focusListener;
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
                style={{ backgroundColor: '#333333' }}
            >
                <View style={styles.header}>
                    <View style={styles.activitiesList}>
                        <Text style={styles.title}>ANOTAÇÕES</Text>
                    </View>
                </View>

                {/* <View style={styles.header}>
                    <View style={styles.inputArea}>
                        <Icon name="search" size={24} color='#333333' />
                        <TextInput
                            placeholder="Buscar"
                            style={styles.input}
                        />
                    </View>
                </View> */}

                <View style={styles.container}>
                    <View style={styles.listContainer}>
                        {
                            Object.values(this.state.taskLists).map((taskList) => {
                                return (
                                    // console.log(this.taskList)
                                    <Activities key={taskList.id}
                                        name={taskList.title}
                                        date={taskList.date}
                                        status={taskList.status}
                                        onPress={() => this.props.navigation.navigate('List', { idTaskList: taskList.id })}
                                        onPressDelete={() => this.handleDeleteTaskList(taskList.id)}
                                    />

                                )

                            })
                        }

                    </View>
                </View>
            </ScrollView>
        );
    };
}