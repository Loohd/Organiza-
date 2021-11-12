import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { Modal, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import CheckBox from '@react-native-community/checkbox';
import ImageTitle from './ImageTitle';

import Date from './Date';
import { TouchableOpacity } from 'react-native-gesture-handler';

const List = () => {

    const navigation = useNavigation();
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    return (

        <View style={styles.body}>
            <View
                style={styles.container}
            >
                <View style={styles.header}>
                    <Text style={styles.Title}>ANOTAÇÕES</Text>
                    <View style={styles.save}>

                        <Icon
                            name="trash-2"
                            size={30}
                            color='#E3655B'
                            onPress={() => navigation.navigate('Home')}

                        />
                    </View>
                </View>

                <ImageTitle
                    cover={require('../assets/FotoTemporaria3.png')}
                />
                <ScrollView >


                    <View style={styles.dateContainer}>
                        <Date />
                    </View>

                    <View style={styles.titleInputContainer}>
                        <Icon
                            name="edit-2"
                            size={30}
                            color={'#CED3DC'}
                        />
                        <TextInput
                            style={styles.titleInput}
                            placeholder='Insira um titulo'
                        />
                    </View>

                    <View style={styles.newNoteContainer}>
                        <TouchableOpacity
                            style={styles.bottonNewNote}
                        >
                            <Icon
                                name="plus-circle"
                                style={styles.plusCircle}
                            >
                                <Text style={styles.newNote}>Nova Anotação</Text>
                            </Icon>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.containerCheckList}>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                style={styles.checkbox}
                            />
                            <TextInput style={styles.textDescription}
                                placeholder="Escreva uma observação" />
                        </View>
                    </View>
                    <View style={styles.containerCheckList}>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                style={styles.checkbox}
                            />
                            <TextInput style={styles.textDescription}
                                placeholder="Escreva uma observação" />
                        </View>
                    </View>
                </ScrollView>

            </View>
        </View>

    );
};

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
        backgroundColor: '#FFF'
    },
    header: {
        paddingHorizontal: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    Title: {
        fontSize: 24,
        color: '#011936',
    },
    save: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleInputContainer: {
        flexDirection: 'row',
        paddingHorizontal: 4,
        marginTop: 10,
        alignItems: 'flex-end',
        height: 50,
        marginBottom: 10,

    },
    titleInput: {
        flex: 1,
        backgroundColor: '#FFF',
        color: 'black',
        flexDirection: 'row',
        height: 40,
        fontSize: 18,

    },
    checkboxContainer: {
        flexDirection: "row",
        height: 10,
    },

    checkbox: {
        alignSelf: 'center',
        justifyContent: 'flex-end',
    },

    textDescription: {
        flex: 1,
        backgroundColor: '#FFF',
        marginTop: 2,
        fontSize: 14,
        marginLeft: 5,
        marginRight: 20,
        alignSelf: 'center',
        color: 'black',
        height: 20,
    },

    containerCheckList: {
        marginLeft: 15,
        marginBottom: 10,
        marginTop: 20,
        color: '#FFF',
        fontSize: 15,
    },

    dateContainer: {
        alignItems: 'flex-end',
        paddingRight: 5,
        marginTop: 5,
    },

    newNoteContainer: {
        alignItems: 'flex-start',
        marginBottom: 5,
        marginTop: 5,
    },

    bottonNewNote: {
        marginTop: 10,
        width: '100%',
        alignItems: 'flex-start',
    },

    newNote: {
        paddingHorizontal: 15,
        fontSize: 18,
        color: '#417B5A',
    },

    plusCircle: {
        paddingHorizontal: 15,
        color: '#417B5A',
        fontSize: 18,
    },


});

export default List;