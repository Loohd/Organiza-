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
            taskLists: [
                // { id: 1, title: "teste", status: 'Feito', date: '2021-10-11' }
            ]
        }
    }

    async componentDidMount() {
        try {
            const response = await api.get('/v1/tasklist/34');
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

        // const { taskLists } = this.state;
        console.log(this.state.taskLists);

        return (
            <View style={styles.body}>
                <View style={styles.header}>
                    <View style={styles.activitiesList}>
                        <Text style={styles.title}>ANOTAÇÕES RECENTES</Text>
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
                <View style={styles.containerList}>
                    <Activities
                        // key={index.idTaskList}
                        // cover={require()}
                        name={this.state.taskLists.title}
                        date={this.state.taskLists.date}
                        status={this.state.taskLists.status}
                        onPress={() => this.props.navigation.navigate('List', { idTaskList: this.state.taskLists.id })}
                    />
                </View>
                {/* <View style={styles.containerList}>
                    <Text>{this.state.taskLists.title}</Text>
                    <FlatList
                        style={styles.flatList}
                        data={this.state.taskLists}
                        key={this.state.taskLists.id}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) =>
                            <View style={styles.containerTest}>
                                <Text style={styles.textTest}>
                                    {item.title}
                                </Text>
                                <Text style={styles.textTest}>
                                    {item.id}
                                </Text>
                                <Text style={styles.textTest}>
                                    {item.date}
                                </Text>
                            </View>
                        }
                    />
                    {taskLists.map(taskList => (
                        <View key={taskList.data.id}> 
                        <Text>
                            {taskList.data.title}
                        </Text>
                        </View>
                    ))}

                </View>
                {taskLists.map((taskList) => (
                    // <Activities key={taskList.data.id}
                    //     name={taskList.data.title}
                    //     date={taskList.data.date}
                    //     status={taskList.data.state}
                    //     onPress={() => this.props.navigation.navigate('List', { idTaskList: 34 })}
                    // />
                    <Text>{taskList.data.title}</Text>
                ))} */}

            </View>

            // <ScrollView
            //     showsVerticalScrollIndicator={false}
            //     style={{ backgroundColor: '#333333' }}
            // >
            //     {console.log(taskList)} 
            //     <View style={styles.header}>
            //         <View style={styles.activitiesList}>
            //             <Text style={styles.title}>ATIVIDADES RECENTES</Text>
            //         </View>
            //         <TouchableOpacity>
            //             <Icon
            //                 name="log-out"
            //                 size={30}
            //                 color='#ffd851'
            //             />
            //         </TouchableOpacity>
            //     </View>
            //     {/* data={this.state.TaskList}
            //         keyExtractor={item => item.id.toString}
            //         renderItem={({ item }) => <Activities 
            //         data={item} */}
            //     {/* ***FlatList*** */}
            //     <ScrollView
            //         horizontal
            //         showsHorizontalScrollIndicator={false}
            //         style={{ paddingHorizontal: 15, }}

            //     >
            //         {/* {
            //             this.state.taskList.data((taskList, index) => {
            //                 return ( */}

            // <Activities
            //     // key={index.idTaskList}
            //     // cover={require()}
            //     // name={this.props.taskList.title}
            //     // date={this.props.taskList.date}
            //     // status={this.props.taskList.state}
            //     onPress={() => this.props.navigation.navigate('List', { idTaskList: 34 })}
            // />
            //                     <Activities/>
            //                     <Activities/>
            //                     <Activities/>
            //                     <Activities/>


            //                 {/* )
            //             })
            //         } */}
            //     </ScrollView>

            //     <View>
            //     </View>

            // </ScrollView>


        );
    };
};





