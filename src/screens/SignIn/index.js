import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {Container, 
    InputArea, 
    CustomButton, 
    CustomButtonText, 
    SignMessageButton, 
    SignMessageButtonText, 
    SignMessageButtonTextBold 
} from './styles';

import SignInput from '../../components/SignInput';

import RoutineApplicationLogo from '../../assets/logo-organizae.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = () => {
        navigation.reset({
            routes: [{name: 'Home'}]
        });
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });
    }


    return (
        <Container>
            <RoutineApplicationLogo width="100%" height="260"/>

            <InputArea>

                <SignInput 
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />

                <SignInput 
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}

                />


                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress = {handleMessageButtonClick}>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}