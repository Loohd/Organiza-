import React, { useEffect } from 'react';
import {Container, LoadingIcon} from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RoutineApplicationLogo from '../../assets/logo-organizae.svg';

export default () => {

    const navigation = useNavigation();

//    useEffect(()=>{
//         const checkToken = async () =>{
//             const token = await AsyncStorage.getItem('token');
//             if(token) {
//                 this.setState({ error:_err.message});
//             } else {
//                 navigation.navigate('SignIn');
//             }
//         }
//         checkToken();
//    }, []);

    return (
        <Container>
            <RoutineApplicationLogo width="100%" height="180"/>
            <LoadingIcon size="large" color="#FFFFFF" />
        </Container>
    );
}