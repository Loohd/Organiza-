import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import Home from '../screens/Home';
import List from '../screens/List';
import NoteList from '../screens/NoteList';
import Calendar from './Calendar';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -40,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow
    }}
    onPress={onPress}
  >
    <View style={{
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: '#e32f45',
    }}>

    </View>
  </TouchableOpacity>
)

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 15,
          left: 15,
          right: 15,
          elevation: 0,
          backgroundColor: '#FFF',
          borderRadius: 15,
          height: 80,
          ...styles.shadow

        }
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Icon name="home" size={24} color='#748c94' />
            <Text style={{
              color: '#748c94',
              height: 18
            }}>Home</Text>
          </View>
        )
      }} />
      <Tab.Screen name="Calendar" component={Calendar} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Icon name="calendar" size={24} color='#748c94' />
            <Text style={{
              color: '#748c94',
              height: 18

            }}>Calendar</Text>
          </View>
        )
      }} />
      <Tab.Screen name="Post" component={Home} options={{
        tabBarIcon: ({ focused }) => (
          <Icon name="plus" size={24} color='#748c94' />
          
        ),
        tabBarButton: (props) => (
          <CustomTabBarButton {...props} />
        )
      }}
      />
      <Tab.Screen name="List" component={NoteList} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Icon name="file-text" size={24} color='#748c94' />
            <Text style={{
              color: '#748c94',
              height: 18

            }}>Anotações</Text>
          </View>

        )
      }} />
      <Tab.Screen name="User" component={Home} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Icon name="user" size={24} color='#748c94' />
            <Text style={{
              color: '#748c94',
              height: 18

            }}>Usuario</Text>
          </View>
        )
      }} />

    </Tab.Navigator>
  )
}


const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: { width: 0, height: 10, },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  }
});

export default Tabs;
