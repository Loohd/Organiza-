import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

export const styles = StyleSheet.create({
    body:{
        backgroundColor:'#333333',
        flex: 1,
    },
    flatList:{
        flex: 1,
    },
    containerList:{
        flex: 1,
    },
    containerTest:{
        backgroundColor: '#FFF',
        height: 10,
        margin: 10,
        height: 200,
        flex: 1,
    },
    textTest:{
        margin: 10,
        color: '#000',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 20,
        maxWidth: '90%'
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
    activitiesList:{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },

    title: {
        paddingHorizontal: 15,
        fontSize: 18,
        color: '#ffd851',
    },

    
});