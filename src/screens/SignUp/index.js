import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackActions, NavigationActions } from 'react-navigation';

import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold,
    SuccessMessage,
    ErrorMessage,
} from './styles';

import api from '../../services/api';

import SignInput from '../../components/SignInput';


import RoutineApplicationLogo from '../../assets/logo-organizae.svg';
import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default class SignUp extends Component {

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
            dispatch: PropTypes.func,
            goBack: PropTypes.func,
        }).isRequired,
    };

    state = {
        name: '',
        email: '',
        password: '',
        error: '',
        success: '',
    };

    handleUsernameChange = (name) => {
        this.setState({ name });
    };

    handleEmailChange = (email) => {
        this.setState({ email });
    };

    handlePasswordChange = (password) => {
        this.setState({ password });
    };

    handleBackToLoginPress = () => {
        this.props.navigation.goBack();
    };

    handleSignUpPress = async () => {
        if (this.state.email.length === 0 || this.state.password.length === 0) {
            this.setState({ error: 'Preencha todos os campos para continuar!' }, () => false);
        } else {
            try {
                await api.post('/register', {
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                });

                this.setState({ success: 'Conta criada com sucesso! Redirecionando para o login', error: '' });

                setTimeout(this.goToLogin, 2500);
            } catch (_err) {
                this.setState({ error: 'Houve um problema com o cadastro, verifique os dados preenchidos!' });
            }
        }
    };

    goToLogin = () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'SignIn' }),
            ],
        });
        this.props.navigation.dispatch(resetAction);
    }


    // const navigation = useNavigation();

    // const [nameField, setNameField] = useState('');
    // const [emailField, setEmailField] = useState('');
    // const [passwordField, setPasswordField] = useState('');

    // const handleSignClick = () => {

    // }

    // const handleMessageButtonClick = () => {
    //     navigation.reset({

    //         routes: [{name: 'SignIn'}]
    //     });
    // }

    render() {
        return (
            <Container>

                <RoutineApplicationLogo width="100%" height="260" />

                {this.state.success.length !== 0 && <SuccessMessage>{this.state.success}</SuccessMessage>}

                <InputArea>

                    <SignInput
                        IconSvg={PersonIcon}
                        placeholder="Digite seu nome"
                        value={this.state.name}
                        onChangeText={this.handleUsernameChange}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

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
                    <CustomButton onPress={this.handleSignUpPress}>
                        <CustomButtonText>CADASTRAR</CustomButtonText>
                    </CustomButton>
                </InputArea>

                <SignMessageButton onPress={this.handleBackToLoginPress}>
                    <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                    <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
                </SignMessageButton>

            </Container>
        );
    }
}