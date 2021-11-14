import React, { useState, useEffect, Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';

import api from '../services/api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ErrorMessage } from "../screens/SignIn/styles";
import DatePicker from "react-native-datepicker";

export default class NewTask extends Component {
  
  state = {
    title: '',
    date: '',
    status: '1',
    error: '',
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  handleTitleChange = (title) => {
    this.setState({ title: title })
  };

  handleDateChange = (date) => {
    this.setState({ date: date })
  };

  handleSavePress = async () => {
    if (this.state.title.length === 0 || this.state.date.length === 0) {
      this.setState({ error: 'Preencha os campos!' }, () => false);

    } else {
      try {
        const response = await api.post('/v1/tasklist', {
          title: this.state.title,
          date: this.state.date,
          status: this.state.status,
        });
      console.log(response.data.data.id);

        // await AsyncStorage.getItem('token', response.data.token);

        this.props.navigation.navigate('List', {idTaskList: response.data.data.id});
      } catch (_err) {
        this.setState({ error: _err.message });

      }
    }
  }
  // async function onInsertTask(data) {
  //   await setListId('')
  //   await api.post("/v1/tasks", data, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     }
  //   }).then(response => {
  //     console.log(response)
  //     if (response.data.status && response.data.status === (401 || 498)) {
  //       AsyncStorage.clear();
  //       history.push('/');
  //     }
  //     setListId(response.data.data.list_id)
  //   }).catch(err => {
  //     alert(err)
  //   })

  // }
  render() {
    const { modalVisible } = this.state;
    return (
      <ScrollView style={styles.body}>
        <View style={styles.contanier}>
          <Text style={styles.textTitle}>NOVA LISTA DE TAREFAS</Text>

          <View style={styles.dateContainer}>
            <DatePicker
              format="YYYY-MM-DD"
              style={styles.dateComponent}
              date={this.state.date}
              onDateChange={this.handleDateChange}
            />
          </View>

          <View>
            <View style={styles.titleInputContainer}>
              <Icon
                name="edit-2"
                size={30}
                color={'#CED3DC'}
              />
              <TextInput
                value={this.state.title}
                onChangeText={this.handleTitleChange}
                style={styles.titleInput}
                placeholder='Insira um titulo'
              />
            </View>
          </View>

          {this.state.error.length !== 0 && <ErrorMessage>{this.state.error}</ErrorMessage>}

          <View style={styles.buttonBottomView}>

            <Pressable
              style={[styles.button, styles.buttonSave]}
              onPress={this.handleSavePress}
            >
              <Text style={styles.textStyle}>Salvar</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.setModalVisible(true)}
            >
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              this.setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Permitir o cancelamento da criação da lista de tarefa?</Text>
                <View
                  style={styles.modalContainerButton}
                >
                  <Pressable
                    style={[styles.buttonModal]}
                    onPress={() => this.setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Negar</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.buttonModal]}
                    onPress={() => this.setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Permitir</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    );
  };
};

const styles = StyleSheet.create({
  body: {
    // backgroundColor: 'rgba(52, 52, 52, 0.8)',
    backgroundColor: '#333333',
    flex: 1,
  },
  dateComponent: {
    flex: 1,
},
  contanier: {
    flex: 1,
    elevation: 2,
    borderRadius: 10,
    padding: 10,
    margin: 40,
    marginBottom: 300,
    marginTop: 100,
    backgroundColor: '#FFF'
  },
  titleInputContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 4,
    marginTop: 10,
    alignItems: 'flex-end',
    height: 50,
    marginBottom: 50,

  },
  titleInput: {
    flex: 1,
    backgroundColor: '#FFF',
    color: 'black',
    flexDirection: 'row',
    height: 40,
    fontSize: 18,
    maxWidth: '80%',
  },
  dateContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop: 25,
    marginBottom: 10,
    paddingStart: 10,
  },
  buttonBottomView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    margin: 10,
    marginBottom: 20,
  },
  button: {
    width: 130,
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
    padding: 5,
    elevation: 2
  },
  buttonSave: {
    backgroundColor: "#0EAD69",
  },
  buttonClose: {
    backgroundColor: "#FF1B1C",
  },
  textTitle: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginTop: 10,
  },
  textStyle: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 40,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonModal: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    padding: 10,
    elevation: 2,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#49416D',
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,

  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",

  },
  modalContainerButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

// export default NewTaskModal;