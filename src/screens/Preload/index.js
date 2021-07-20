import React, { useEffect } from 'react';
import {Container, LoadingIcon} from './styles';
import AssyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import RoutineApplicationLogo from '../../assets/logo-organizae.svg';
import AsyncStorage from '@react-native-community/async-storage';

export default () => {

    const navigation = useNavigation();

   useEffect(()=>{
        const checkToken = async () =>{
            const token = await AsyncStorage.getItem('token');
            if(token) {

            } else {
                navigation.navigate('SignIn');
            }
        }
        checkToken();
   }, []);

    return (
        <Container>
            <RoutineApplicationLogo width="100%" height="180"/>
            <LoadingIcon size="large" color="#FFFFFF" />
        </Container>
    );
}