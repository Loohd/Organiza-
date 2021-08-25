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
        <TouchableOpacity style={styles.bottonNewNote}>
                <Icon
                name="plus-circle"
                style= {styles.plusCircle}
                >
                <Text style={styles.newNote}>Nova Anotação</Text>
                </Icon>
            </TouchableOpacity>
        </View>
          <ScrollView style={styles.listContainer}> 
                      <Activities
                          cover={require('../../assets/FotoTemporaria3.png')}
                          name="Metas 2021"
                          description="Planejamento de metas a serem alcançadas no ano de 2021"
                          onPress={() => navigation.navigate('List')}

                      />
                      <Activities
                          cover={require('../../assets/FotoTemporaria3.png')}
                          name="Metas 2021"
                          description="Planejamento de metas a serem alcançadas no ano de 2021"
                          onPress={() => {}}

                      />
            </ScrollView>
          </ScrollView>
  );
}