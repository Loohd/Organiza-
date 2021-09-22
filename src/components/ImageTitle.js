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
        backgroundColor: '#FFF',
        padding: 10,
    },
    
    cover:{
        width: '100%',
        height: 110,
        borderRadius: 10,
    },

    title:{
        fontSize: 20,
        color: '#000',
        margin: 15,
        textShadowColor: '#FFF', 
        textShadowOffset: { width: 1.5, height: 1.5 }, 
        textShadowRadius: 1

    },
})