import React from 'react';
import { View, StyleSheet, Text, FlatList} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from './styles';
import Tabs from '../../components/Tabs';

import Activities from '../../components/Activities';

export default function Home() {

    const navigation = useNavigation();
    return(

        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#333333'}}
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

        <View style={styles.activitiesList}>
            <Text style={styles.title}>ATIVIDADES RECENTES</Text>
        </View>

        
        {/* ***FlatList*** */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, }}> 
            <Activities
                cover={require('../../assets/FotoTemporaria3.png')}
                name="Metas 2021"
                description="Planejamento de metas a serem alcançadas no ano de 2021"
                onPress={() => navigation.navigate('NoteList')}
            />
                
            <Activities
                cover={require('../../assets/FotoTemporaria5.png')}
                name="Metas 2021"
                description="Planejamento de metas a serem alcançadas no ano de 2021"
                onPress={() => {}}
            />
            
            <Activities
                cover={require('../../assets/FotoTemporaria1.png')}
                name="Metas 2021"
                description="Planejamento de metas a serem alcançadas no ano de 2021"
                onPress={() => {}}
            />

            <Activities
                cover={require('../../assets/FotoTemporaria2.png')}
                name="Metas 2021"
                description="Planejamento de metas a serem alcançadas no ano de 2021"
                onPress={() => {}}
            />
            <Activities
                cover={require('../../assets/FotoTemporaria4.png')}
                name="Metas 2021"
                description="Planejamento de metas a serem alcançadas no ano de 2021"
                onPress={() => {}}
            />
        </ScrollView>
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
        <Tabs/>
        </ScrollView>
        
        
    );
};

       
    


