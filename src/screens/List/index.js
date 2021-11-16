import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Keyboard,
    ScrollView,
    Modal,
    Pressable,
    FlatList
} from 'react-native';

import { styles } from './styles';

import ImageTitle from '../../components/ImageTitle';
import Task from '../../components/Task';

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            idTaskList: this.props.route.params.idTaskList,
            taskItems: [

            ],
            taskList: [],
        };

        this.insertTask = this.insertTask.bind(this)
        // this.getTaskList = this.getTaskList.bind(this)

    };


    async componentDidMount() {
        try {
            const response = await api.get('/v1/tasklist/' + this.state.idTaskList);
            this.setState({
                taskList: response.data.data
            });
            // response.data.data.id;

            // const response = await api.get('/v1/task/' + this.state.idTaskList);
        } catch (_err) {
            this.setState({ error: _err.message });

        }
    };

    insertTask() {
        let newTask = {
            key: this.state.taskItems.length.toString(),
            desc: this.state.text,
            done: false
        }
        console.log(newTask);

        let taskItems = this.state.taskItems;
        taskItems.push(newTask)
        this.setState({ taskItems })

        let text = ""
        this.setState({ text })
    }

    completeTask = (index) => {
        this.state.taskItems.splice(index, 1);
        this.setState({ taskItems: this.state.taskItems })
        alert("Tarefa Concluída")
    }

    deleteTask = (index) => {
        this.state.taskItems.splice(index, 1);
        this.setState({ taskItems: this.state.taskItems })
        alert("Tarefa Excluída")

    }

    messageImageAlert() {
        alert("A funcionalidade de inserir imagem ainda não está disponível, por favor aguarde por futuras atualizações")
    }

    render() {
        console.log(this.state.taskList)
        return (

            <View style={styles.body}>
                <View style={styles.container}>
                    <ScrollView
                        contentContainerStyle={{
                            flexGrow: 1
                        }}
                        keyboardShouldPersistTaps='handled'
                    >
                        <ImageTitle
                            info={this.messageImageAlert}
                        cover={require('../../assets/ImageActivities.png')}
                        />

                        <View style={styles.tasksWrapper}>
                            <View style={styles.sectionTitle}>
                                <Icon
                                    name="edit-2"
                                    size={30}
                                    color='#2C497F'
                                />
                                <Text style={styles.taskTitle}>{this.state.taskList.title}</Text>
                            </View>


                            <View style={styles.items}>

                                {
                                    this.state.taskItems.map((taskItems, index) => {
                                        return (
                                            <TouchableOpacity style={styles.containerTask} key={index.key} onPress={() => this.completeTask(index)}>
                                                <View style={styles.TaskContainer}>
                                                    <Task text={taskItems.desc} />
                                                </View>
                                                <TouchableOpacity
                                                    style={styles.trashIcon}
                                                    onPress={() => this.deleteTask(index)}
                                                >
                                                    <Icon
                                                        name='trash-2'
                                                        size={25}
                                                        color='#FF1B1C'
                                                    />
                                                </TouchableOpacity>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                        </View>
                    </ScrollView>
                    <KeyboardAvoidingView
                        style={styles.writeTaskWrapper}
                    >
                        <TouchableOpacity>
                            <Icon
                                name='check-square'
                                size={30}
                                color='#0EAD69'
                            />
                        </TouchableOpacity>
                        <TextInput style={styles.input} placeholder={'Digite uma anotação'} value={this.state.text} onChangeText={(text) => { this.setState({ text }) }} />
                        <TouchableOpacity onPress={this.insertTask}>
                            <View style={styles.addWrapper}>
                                <Icon
                                    name="plus"
                                    size={40}
                                    color='#FC440F'
                                />
                            </View>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </View>
            </View>

        );
    }
}

