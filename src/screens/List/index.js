import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { ScrollView, } from 'react-native-gesture-handler';
import {styles} from './styles';
import ImageTitle from "../../components/ImageTitle";

export default function List(){
    return (
        <ScrollView style={{backgroundColor: '#333333'}}>
            <ScrollView style={styles.bodyList}>
                <ImageTitle
                    cover={require('../../assets/FotoTemporaria2.png')}
                    titleAnnotation="Afazeres do dia"
                />
                <Text style={styles.textDescription}>
                    blablbalblablalballbalblbalbalbablablbalblablalballbalblbalbalbablablbalblablalballbalblbalbalbablablbalblablalballbalblbalbalbablablbalblablalballbalblbalbalbablablbalblablalballbalblbalbalbablablbalblablalballbalblbalbalba
                </Text>
            </ScrollView>
        </ScrollView>
    )
}