import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';

export default function ImageTitle({cover, titleAnnotation}) {
    return(
        <ImageBackground
        source={cover}
        style={styles.container}
        >
            <Text style={styles.title}>
                {titleAnnotation}
            </Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        backgroundColor: '#000',
        padding: 10,
        flex: 1,
    },  
    title:{
        fontSize: 20,
        color: '#333333',
        margin: 15,
    },
})