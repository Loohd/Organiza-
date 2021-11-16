import React, { Component, useState } from 'react';
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
            logout: '',
            taskLists: {}
        }
    }

    async componentDidMount() {
        try {
            const response = await api.get('/v1/tasklist');
            // console.log(response.data.data);
            this.setState({
                taskLists: response.data.data
            });

        } catch (_err) {
            this.setState({ error: _err.message });
        }
    }

    handleLogoutPress = async () => {

        // AsyncStorage.removeItem('logout');

        this.props.navigation.navigate('SignIn')

    }


    render() {


        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ backgroundColor: '#333333' }}
            >

                <View style={styles.header}>
                    <View style={styles.activitiesList}>
                        <Text style={styles.title}>ANOTAÇÕES</Text>
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
                        Object.values(this.state.taskLists).map((taskList) => {
                            return (
                                <Activities key={taskList.id}
                                    name={taskList.title}
                                    date={taskList.date}
                                    status={taskList.status}
                                    onPress={() => this.props.navigation.navigate('List', { idTaskList: taskList.id })}
                                />
                            )
                        })
                    }
                </ScrollView>
            </ScrollView>
        );
    };
};





