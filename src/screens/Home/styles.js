import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

export const styles = StyleSheet.create({
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