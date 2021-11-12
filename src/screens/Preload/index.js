import React, { Component, useEffect } from 'react';
import { Container, LoadingIcon } from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RoutineApplicationLogo from '../../assets/logo-organizae.svg';
import PropTypes from 'prop-types';

import api from '../../services/api';

// export default () => {
export default class Preload extends Component {

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
            dispatch: PropTypes.func,
        }).isRequired,
    };
    

         checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                setTimeout(2500);
                // this.setState({ error: _err.message });
                this.props.navigation.navigate('Tabs');
                console.log(token);
                
            } else {
                this.props.navigation.navigate('SignIn');
            }
        };
render(){
    return (
        <Container onTouchStart={this.checkToken}>
            <RoutineApplicationLogo width="100%" height="180" />
            <LoadingIcon size="large" color="#FFFFFF" />
        </Container>
    );
};
}
