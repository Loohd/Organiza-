import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color:#333333;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const InputArea = styled.View`
    width: 100%;
    padding: 40px;

`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #525252;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #B5B5B5;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;

`;
export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: #B5B5B5;
`;
export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: #B5B5B5;
    font-weight: bold;
    margin-left: 5px;
`;

export const ErrorMessage = styled.Text`
    text-align: center;
    color: #ce2029;
    font-size: 16px;
    margin-bottom: 15px;
`;
