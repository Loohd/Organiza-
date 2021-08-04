import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Activities(props) {
    return(

        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Image
            source={props.cover}
            style={styles.cover}
            />

            <View style={styles.content}>
                <Text style={styles.title}>{props.name}</Text>
            
            </View>

            <Text style={styles.description}>
                {props.description}
            </Text>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        backgroundColor: '#FFF',
        height: 250,
        width: 200,
        elevation: 2,
        borderRadius: 10,
        padding: 15,
        marginRight: 30,
        marginLeft: 2,
        marginBottom: 5,
    },

    cover:{
        width: 170,
        height: 110,
        borderRadius: 10,
    },

    content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },

    title: {
        fontSize: 12,
        color: '#4f4a4a',
    },

    description:{
        fontSize: 9,
        color: '#4f4a4a'
    }

});