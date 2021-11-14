import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

export default function ImageTitle({ cover, info }) {

    return (
        <ImageBackground
            source={cover}
            style={styles.container}
        >
            <View style={styles.containerIcon}
            >
                <TouchableOpacity 
                style={styles.iconImage}
                onPress={info}
                >
                    <Icon
                        name='image'
                        size={30}
                        color={'#000'}
                        

                        
                    />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 140,
        margin: 5,
        backgroundColor: '#FFF',
        padding: 10,
    },

    cover: {
        width: '100%',
        height: 110,
        borderRadius: 10,
    },

    containerIcon: {
        flex: 1,
        alignItems: 'flex-start',
    },

    iconImage: {
        width: 30,
        height: 30,
        backgroundColor: '#3E699077',
        alignItems: 'center',
        borderRadius: 5,

    },
})