import React, { Component } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { styles } from './styles';

import api from '../../services/api';
import { Avatar } from 'react-native-paper';


export default class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: [],
        };
    };

    messageImageAlert() {
        alert("A funcionalidade de inserir imagem ainda não está disponível, por favor aguarde por futuras atualizações")
    };

    // async componentDidMount() {
    //     try {
    //         const response = await api.get('api/user');
    //         this.setState({
    //             user: response.data.data
    //         });
    //         // response.data.data.id;

    //         // const response = await api.get('/v1/task/' + this.state.idTaskList);
    //     } catch (_err) {
    //         this.setState({ error: _err.message });

    //     }
    // };

    render() {
        console.log(this.user);
        return (
            <View style={styles.body}>
                <View style={styles.container}>
                    <ScrollView>
                        <View style={styles.avatarContainer}>
                            <Avatar.Image size={200}
                                source={require('../../assets/ImageUser.webp')}
                                onTouchStart={this.messageImageAlert}
                            />
                        </View>
                        <View style={styles.titleInputContainer}>
                            <Icon
                                name="edit-2"
                                size={30}
                                color={'#CED3DC'}
                            />
                            <TextInput
                                //   value={this.state.title}
                                //   onChangeText={this.handleTitleChange}
                                style={styles.titleInput}
                                placeholder='Nome do usuario'
                            />
                        </View>
                        <View style={styles.emailContainer}>
                            <Icon
                                name="mail"
                                size={30}
                                color={'#CED3DC'}
                            />
                            <Text
                                //   value={this.state.title}
                                //   onChangeText={this.handleTitleChange}
                                style={styles.textContanier}
                            >E-mail</Text>
                        </View>

                        <View style={styles.buttonBottomView}>

                            <Pressable
                                style={[styles.button, styles.buttonSave]}
                            // onPress={this.handleSavePress}
                            >
                                <Text style={styles.textStyle}>Salvar</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                            // onPress={() => (setModalVisible(true))}
                            >
                                <Text style={styles.textStyle}>Cancelar</Text>
                            </Pressable>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    };
};