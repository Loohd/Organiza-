import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    avatarContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    titleInputContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 4,
        marginTop: 10,
        alignItems: 'center',
        height: 50,
        marginBottom: 20,

    },
    titleInput: {
        flex: 1,
        backgroundColor: '#FFF',
        color: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        fontSize: 18,
        maxWidth: '80%',
    },
    emailContainer:{
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 4,
        marginTop: 10,
        alignItems: 'center',
        height: 50,
        marginBottom: 20,
        marginBottom: 140,
    },
    textContanier: {
        flex: 1,
        backgroundColor: '#FFF',
        color: 'black',
        maxWidth: '80%',
        fontSize: 18,
        height: 40,
        paddingLeft: 10,
        marginTop: 15,
    }, 
    buttonBottomView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    button: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        borderRadius: 10,
        padding: 10,
        elevation: 2
    },
    buttonSave: {
        backgroundColor: "#0EAD69",
    },
    buttonClose: {
        backgroundColor: "#FF1B1C",
    },
    textStyle: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 15,
    },

}
)