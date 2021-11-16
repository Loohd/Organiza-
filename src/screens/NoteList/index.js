import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { styles } from './styles';

import Activities from '../../components/Activities';

export default class NoteList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            taskLists: {}
        }
    }

    async componentDidMount() {
        try {
            const response = await api.get('/v1/tasklist');
            console.log(response.data.data);
            this.setState({
                taskLists: response.data.data
            });

        } catch (_err) {
            this.setState({ error: _err.message });
        }
    }

    render() {
        // console.log(this.state.taskLists)
        return (
            <ScrollView
                style={{ backgroundColor: '#333333' }}
            >

                <View style={styles.header}>
                    <View style={styles.inputArea}>
                        <Icon name="search" size={24} color='#333333' />
                        <TextInput
                            placeholder="Buscar"
                            style={styles.input}
                        />
                    </View>
                </View>
                <View>
                    
                   
                </View>
                <View style={styles.container}>
                    <View style={styles.listContainer}>
                    {
                        Object.values(this.state.taskLists).map((taskList) => {
                            return (
                                console.log(this.taskList)
                                // <Activities key={taskList.id}
                                //     name={taskList.title}
                                //     date={taskList.date}
                                //     status={taskList.status}
                                //     onPress={() => this.props.navigation.navigate('List', { idTaskList: taskList.id })}
                                // />
                                
                            )
                            
                        })
                    }
                        <Activities
                            name="Tarefa do dia"
                            date="06/11/2021"
                            status="Concluído"
                            // onPress={() => navigation.navigate('List')}
                        />

                    </View>
                </View>
            </ScrollView>
        );
    };
}