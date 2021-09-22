import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import { ScrollView, TextInput, } from 'react-native-gesture-handler';
import {styles} from './styles';
import ImageTitle from "../../components/ImageTitle";


export default function List(){
    return (
        <View style={{flex: 1}}>
        <ScrollView  style={{backgroundColor: '#333333', flex: 1}}>
            <View style={styles.bodyList}>
                <ImageTitle
                    cover={require('../../assets/FotoTemporaria1.png')}
                    titleAnnotation="TAREFAS DIARIAS"
                />
                <Text style={styles.titleDescription}>Descrição</Text>
                <TextInput style={styles.textDescription}
                placeholder="Escreva uma observação"/>
                <Text style={styles.titleDescription}>Vamos lá!</Text>
                <TextInput style={styles.content}
                placeholder="Inicie aqui sua anotação"/>
                 <TextInput style={styles.content}
                placeholder="mais uma anotacao"/>
                 <TextInput style={styles.content}
                placeholder="mais uma anotacao"/>
                 <TextInput style={styles.content}
                placeholder="mais uma anotacao"/>

            </View>
        </ScrollView>
        </View>
    )
}