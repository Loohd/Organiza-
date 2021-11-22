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
    FlatList,
    Alert
} from 'react-native';

import { styles } from './styles';

import ImageTitle from '../../components/ImageTitle';
import Task from '../../components/Task';
import { TapGestureHandler } from 'react-native-gesture-handler';

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            idTaskList: this.props.route.params.idTaskList,
            taskItems: [],
            taskList: [],
        };

        this.insertTask = this.insertTask.bind(this);
        this.getItems = this.getItems.bind(this);

    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    async componentDidMount() {
        // try {
        //     const response = await api.get('/v1/tasklist/' + this.state.idTaskList);
        //     this.setState({
        //         taskList: response.data.data
        //     });
        //     //colocar listener depois da chamada certa
        //     // response.data.data.id;

        //     // const response = await api.get('/v1/task/' + this.state.idTaskList);
        // } catch (_err) {
        //     this.setState({ error: _err.message });

        // }
        const { navigation } = this.props;

        this.focusListener = navigation.addListener('focus', async () => {
            try {
                const response = await api.get('/v1/tasklist/' + this.state.idTaskList);
                // console.log(response.data.data);
                this.setState({
                    taskList: response.data.data
                });
                this.setState({
                    taskItems: response.data.data.tasks
                });

            } catch (_err) {
                this.setState({ error: _err.message });
            }
            // call your refresh method here
            // console.log('refresh');
        });

        this.focusListener;
    };

    // setTaskItems = () => {
    //     this.setState({taskItems: this.state.taskList.tasks})
    // }

    async getItems() {
        console.log('getItems')
        try {
            const response = await api.get(`/v1/tasklist/` + this.state.taskList.id)
                .then((response) => {
                    this.setState({
                        taskList: response.data.data
                    });
                    this.setState({
                        taskItems: response.data.data.tasks
                    });
                });

        } catch (error) {
            Alert.alert(notPossibleMsg)
            console.log(error)
        }
        console.log(this.state.taskItems);
    }

    async insertTask() {
        const notPossibleMsg = "Campo não pode estar vazio!";
        if (this.state.title === "") {
            // Alert.alert("Atenção","Campo não pode estar vazio!")
        } else {
            try {
                const response = await api.post('/v1/tasks', {
                    title: this.state.text,
                    status: 0,
                    list_id: this.state.taskList.id
                });

                this.getItems();
                let text = ""
                this.setState({ text })

            } catch (error) {
                Alert.alert(notPossibleMsg)
                console.log(error)
            }
        }
    }

    completeTask = async (id) => {
        try {
            const response = await api.put('/v1/tasks/' + id, {
                status: 1,
            });
        } catch (error) {

            console.log(error)
        }
        this.getItems();

    }

    incompleteTask = async (id) => {
        const notPossibleMsg = "Não foi possível realizar a alteração";

        Alert.alert("Atenção!", "Tem certeza que deseja marcar esta anotação como incompleta?", [
            {
                text: "Não",
                style: "cancel"
            },
            {
                text: "Sim",
                onPress: async () => {
                    try {
                        const response = await api.put('/v1/tasks/' + id, {
                            status: 0,
                        });
                    } catch (error) {
                        Alert.alert(notPossibleMsg)
                        console.log(error)
                    }
                    this.getItems();
                }
            }
        ])
    }

    deleteTask = async (id) => {
        const notPossibleMsg = "Não foi possível deletar este item.";

        Alert.alert("Remover", "Tem certeza que deseja remover esta anotação?", [
            {
                text: "Não",
                style: "cancel"
            },
            {
                text: "Sim",
                onPress: async () => {
                    try {
                        const response = await api.delete('/v1/tasks/' + id)
                        this.getItems();
                    } catch (error) {
                        Alert.alert(notPossibleMsg)
                        console.log(error)
                    }
                }
            }
        ])
    }

    messageImageAlert() {
        alert("A funcionalidade de inserir imagem ainda não está disponível, por favor aguarde por futuras atualizações")
    }

    render() {
        const { modalVisible } = this.state;
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
                                    name="type"
                                    size={30}
                                    color='#2C497F'
                                />
                                <Text style={styles.taskTitle}>{this.state.taskList.title}</Text>
                            </View>

                            <View style={styles.containerTaskItems}>
                            <View style={styles.items}>

                                {
                                    this.state.taskItems.map((taskItems, index) => {
                                        if (taskItems.status == 1) return;
                                        return (
                                            <TouchableOpacity style={styles.containerTask} key={index.key} onPress={() => this.completeTask(taskItems.id)}>
                                                <View style={styles.TaskContainer}>
                                                    <Task text={taskItems.title} />
                                                </View>
                                                <TouchableOpacity
                                                    style={styles.trashIcon}
                                                    onPress={() => this.deleteTask(taskItems.id)}
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
                        </View>
                    </ScrollView>
                    <KeyboardAvoidingView
                        style={styles.writeTaskWrapper}
                    >
                        <TouchableOpacity
                            onPress={() => this.setModalVisible(true)}
                        >
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

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            this.setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Tarefas concluídas</Text>

                                <ScrollView>
                                    <View style={styles.items}>
                                        {
                                            this.state.taskItems.map((taskItems, index) => {
                                                if (taskItems.status == 0) return;
                                                return (
                                                    <TouchableOpacity style={styles.containerTask} key={index.key} onPress={() => this.incompleteTask(taskItems.id)}>
                                                        <View style={styles.TaskContainer}>
                                                            <Task text={taskItems.title} />
                                                        </View>
                                                        <TouchableOpacity
                                                            style={styles.trashIcon}
                                                            onPress={() => this.deleteTask(taskItems.id)}
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
                                </ScrollView>
                                <View style={styles.modalContainerButton}>
                                    {/* <Pressable
                                    style={[styles.buttonModal]}
                                    onPress={() => this.setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Fechar</Text>
                                </Pressable> */}
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>

        );
    }
}

