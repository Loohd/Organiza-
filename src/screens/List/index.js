import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import ImageTitle from '../../components/ImageTitle';
import Task from '../../components/Task';

export default function App() {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy)
    }

    return (
        <View style={styles.body}>
            <View style={styles.container}>
                {/* Added this scroll view to enable scrolling when list gets longer than the page */}
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1
                    }}
                    keyboardShouldPersistTaps='handled'
                >
                    <ImageTitle
                        // cover={require('../../assets/FotoTemporaria3.png')}
                    />

                    {/* Today's Tasks */}
                    <View style={styles.tasksWrapper}>
                        <View style={styles.sectionTitle}>
                        <Icon
                            name="edit-2"
                            size={30}
                            color='#2C497F'
                        />
                        <TextInput style={styles.taskTitle}>Nova Anotação</TextInput>
                        </View>
                        <View style={styles.items}>
                            {/* This is where the tasks will go! */}
                            {
                                taskItems.map((item, index) => {
                                    return (
                                        <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                            <Task text={item} />
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    </View>

                </ScrollView>

                {/* Write a task */}
                {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
                <KeyboardAvoidingView
                    style={styles.writeTaskWrapper}
                >
                    <TextInput style={styles.input} placeholder={'Digite uma anotação'} value={task} onChangeText={text => setTask(text)} />
                    <TouchableOpacity onPress={() => handleAddTask()}>
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

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#333333',
        flex: 1,
    },
    container: {
        flex: 1,
        elevation: 2,
        borderRadius: 10,
        padding: 15,
        margin: 15,
        marginBottom: 120,
        backgroundColor: '#FFF'
    },
    tasksWrapper: {
        
        paddingTop: 5,
        paddingHorizontal: 20,
    },
    taskTitle:{
        fontSize: 24,
        fontWeight: 'bold'
    },
    sectionTitle: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#2C497F',
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#2C497F',
        borderWidth: 1,
    },
});