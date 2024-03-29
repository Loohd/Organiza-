import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions, NavigationActions } from 'react-navigation';

import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold,
    ErrorMessage,
} from './styles';

import api from '../../services/api';

import SignInput from '../../components/SignInput';

import RoutineApplicationLogo from '../../assets/logo-organizae.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';


export default class SignIn extends Component {

    static navigationOptions = {
        header: null,
    }

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
            dispatch: PropTypes.func,
        }).isRequired,
    };

    state = {
        email: '',
        password: '',
        error: '',
    };

    handleEmailChange = (email) => {
        this.setState({ email });
    };

    handlePasswordChange = (password) => {
        this.setState({ password });
    };

    handleCreateAccountPress = () => {
        this.props.navigation.navigate('SignUp');
    };

    handleSignInPress = async () => {
        if (this.state.email.length === 0 || this.state.password.length === 0) {
            this.setState({ error: 'Preencha usuário e senha para continuar!' }, () => false);
        } else {
            try {
                const response = await api.post('/login', {
                    email: this.state.email,
                    password: this.state.password,
                });

                await AsyncStorage.setItem('token', response.data.token);
                this.setState({
                    error: '',
                    email: '',
                    password: '',
                })
                console.log(response.data.token);

                this.props.navigation.navigate('Tabs');

            } catch (_err) {

                this.setState({ error: 'Por favor revise os dados preenchidos!' });

            }
        }
    };

    render() {

        return (

            <Container>
                <RoutineApplicationLogo width="100%" height="260" />

                <InputArea >

                    <SignInput
                        IconSvg={EmailIcon}
                        placeholder="Digite seu e-mail"
                        value={this.state.email}
                        onChangeText={this.handleEmailChange}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <SignInput
                        IconSvg={LockIcon}
                        placeholder="Digite sua senha"
                        value={this.state.password}
                        onChangeText={this.handlePasswordChange}
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry
                        password={true}

                    />

                    {this.state.error.length !== 0 && <ErrorMessage>{this.state.error}</ErrorMessage>}
                    <CustomButton onPress={this.handleSignInPress}>
                        <CustomButtonText>LOGIN</CustomButtonText>
                    </CustomButton>
                </InputArea>

                <SignMessageButton onPress={this.handleCreateAccountPress}>
                    <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                    <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
                </SignMessageButton>

            </Container>
        );
    }
}