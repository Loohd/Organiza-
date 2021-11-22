import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import NoteList from '../screens/NoteList';
import List from '../screens/List';
import Tabs from '../components/Tabs';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        // initialRouteName="SignIn"
        screenOptions={{
            headerShown: false
        }}
    >
        {/* <Stack.Screen name="Preload"  component={Preload} /> */}
        <Stack.Screen name="SignIn" SignIn="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" SignUp= "SignUp" component={SignUp} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen
            name="Home"
            component={Home}
            options={{
                title: 'INICIO',
                headerTintColor: '#ffd851',
            }}
        />
        <Stack.Screen
            name="NoteList"
            component={NoteList}
            options={{
                title: 'LISTA DE ANOTAÇÕES',
                headerTintColor: '#ffd851',

            }}
        />
        <Stack.Screen
            name="List"
            component={List}
            options={{
                title: 'ANOTAÇÃO',
                headerTintColor: '#ffd851',
            }}
        />
    </Stack.Navigator>
);