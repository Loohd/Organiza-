import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import {styles} from './styles';

import Activities from '../../components/Activities';

export default function NoteList() {

  const navigation = useNavigation();
  return(
        <ScrollView
        style={{backgroundColor:'#333333'}}
        >

          <View style={styles.header}>
              <View style={styles.inputArea}>
                  <Icon name="search" size={24} color='#333333'/>
                  <TextInput 
                  placeholder="Buscar"
                  style={styles.input}
                  />
              </View>
          </View>
          <View>
       
        </View>
        <View style={styles.container}> 
          <View style={styles.listContainer}> 
          <Activities
                    cover={require('../../assets/FotoTemporaria3.png')}
                    name="Tarefa do dia"
                    date="06/11/2021"
                    status="Concluído"
                    onPress={() => navigation.navigate('List')}
                />
                <Activities
                    cover={require('../../assets/FotoTemporaria4.png')}
                    name="Tarefa do dia"
                    date="07/11/2021"
                    status="Pendente"
                    onPress={() => navigation.navigate('List')}
                />
                <Activities
                    name="Tarefa do dia"
                    date="08/11/2021"
                    status="Pendente"
                    onPress={() => navigation.navigate('List')}
                />
                <Activities
                    cover={require('../../assets/FotoTemporaria1.png')}
                    name="Tarefa do dia"
                    date="09/11/2021"
                    status="Pendente"
                    onPress={() => navigation.navigate('List')}
                />
                <Activities
                    cover={require('../../assets/FotoTemporaria2.png')}
                    name="Tarefa do dia"
                    date="10/11/2021"
                    status="Pendente"
                    onPress={() => navigation.navigate('List')}
                />
            </View>
            </View>
          </ScrollView>
  );
}