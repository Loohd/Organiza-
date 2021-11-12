import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

import Activities from '../../components/Activities';

export default function Home() {
    const navigation = useNavigation();
    return (

        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: '#333333' }}
        >
            <View style={styles.header}>
                <View style={styles.activitiesList}>
                    <Text style={styles.title}>ATIVIDADES RECENTES</Text>
                </View>
                <TouchableOpacity>
                    <Icon
                        name="log-out"
                        size={30}
                        color='#ffd851'
                    />
                </TouchableOpacity>
            </View>

            {/* ***FlatList*** */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, }}>
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

            </ScrollView>
            <View>
            </View>

        </ScrollView>


    );
};





