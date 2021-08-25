import React from 'react';
import { StyleSheet } from 'react-native'; 

export const styles = StyleSheet.create ({
    header: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20,
    },
    inputArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#FFF',
        elevation: 2,
        paddingHorizontal: 10,
        height: 37,
        borderRadius: 10,
    },
    input: {
        paddingHorizontal: 10,
        fontSize: 13,
        width: '90%',
    },
    bottonNewNote: {
        marginTop: 10,
        width: '100%',
        alignItems: 'flex-end',
        paddingBottom: 10, 
        
    },
    newNote: {
        paddingHorizontal: 15,
        fontSize: 18,
        color: '#ffd851',
    },
    plusCircle: {
        paddingHorizontal: 15,
        color: '#ffd851',
        fontSize: 18,
    },
    container: {
        flex: 1,
        
    },
    listContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
       paddingHorizontal: 15,
    },

})