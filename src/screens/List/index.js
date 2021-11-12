import React, { Component, useState } from 'react';
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
import Icon from 'react-native-vector-icons/Feather';

import { styles } from './styles';

import ImageTitle from '../../components/ImageTitle';
import Task from '../../components/Task';

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            taskItems: [
                { key: "0", desc: "item1", done: false },
                { key: "1", desc: "item2", done: false },
            ],
        };

        this.insertTask = this.insertTask.bind(this)
        this.renderItem = this.renderItem.bind(this)

    }


    renderItem() {

        return (

            <TouchableOpacity style={styles.containerTask}>
                <View style={styles.TaskContainer}>
                    {this.state.taskItems.map((taskItems, index) =>
                        <Task key={index.key} text={taskItems.desc} />
                    )}

                    {/* <Task text={obj.taskItems.desc} /> */}
                </View>
                <TouchableOpacity
                    onPress={() => this.state.modalVisible(true)}
                    style={styles.trashIcon}
                >
                    <Icon
                        name='trash-2'
                        size={25}
                        color='#FF1B1C'
                    />
                </TouchableOpacity>
            </TouchableOpacity>
        )

    }

    insertTask() {
        let newTask = {
            key: this.state.taskItems.length.toString(),
            desc: this.state.text,
            done: false
        }

        let taskItems = this.state.taskItems;
        taskItems.push(newTask)
        this.setState({ taskItems })

        let text = ""
        this.setState({ text })
        console.log(this.state);
    }

    completeTask = (index) => {
        this.state.taskItems.splice(index, 1);
        this.setState({taskItems: this.state.taskItems})
        alert("Tarefa Concluída")
    }

    deleteTask = (index) => {
        this.state.taskItems.splice(index, 1);
        this.setState({taskItems: this.state.taskItems})
        alert("Tarefa Excluída")

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
                        // cover={require('../../assets/FotoTemporaria3.png')}
                        />

                        <View style={styles.tasksWrapper}>
                            <View style={styles.sectionTitle}>
                                <Icon
                                    name="edit-2"
                                    size={30}
                                    color='#2C497F'
                                />
                                <TextInput style={styles.taskTitle}></TextInput>
                            </View>


                            <View style={styles.items}>

                                {
                                    this.state.taskItems.map((taskItems, index) => {
                                        return (
                                            <TouchableOpacity style={styles.containerTask} key={index.key} onPress={()=> this.completeTask(index)}>
                                                <View style={styles.TaskContainer}>
                                                    <Task text={taskItems.desc} />
                                                </View>
                                                <TouchableOpacity
                                                    style={styles.trashIcon}
                                                    onPress={()=>this.deleteTask(index)}
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

