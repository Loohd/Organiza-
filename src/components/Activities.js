import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Modal, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-vector-icons/Feather';

export default function Activities(props) {

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onPress}>
                <Image
                    source={require('../assets/ImageActivities.png')}
                    style={styles.cover}
                />

                <View style={styles.content}>
                    <Text style={styles.textTitle}>{props.name}</Text>

                </View>
                <View style={styles.content}>
                    <Text style={styles.text}>
                        {props.date}
                    </Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.text}>
                        {props.status}
                    </Text>
                </View>

            </TouchableOpacity>
            <View style={styles.deleteButtonContainer}>
                <Button
                    style={styles.deleteButton}
                    onPress={() => setModalVisible(true)}
                >
                    Excluir
                </Button>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Permitir que a anotação seja excluida?</Text>
                        <View
                            style={styles.modalContainerButton}
                        >
                            <Pressable
                                style={[styles.buttonModal]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Negar</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.buttonModal]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Permitir</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: '#FFF',
        height: 260,
        width: 160,
        elevation: 2,
        borderRadius: 10,
        padding: 15,
        marginRight: 15,
        marginLeft: 2,
        marginBottom: 5,
        alignItems: 'center',
    },

    cover: {
        width: 150,
        height: 110,
        borderRadius: 10,
    },

    content: {
        alignItems: 'center',
        marginBottom: 8,
    },
    textTitle: {
        fontSize: 18,
        color: '#000',
        fontWeight: "bold",
        marginTop: 5,

    },
    text: {
        fontSize: 12,
        color: '#000',
        marginTop: 2,

    },

    deleteButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteButton: {
        backgroundColor: '#FF1B1C',
        width: 120,
        height: 40,
        justifyContent: 'center',
        padding: 10,
        elevation: 2,
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