import React from 'react';
import styled from 'styled-components/native';

export default ({IconSvg, placeholder, value, onChangeText, password}) => {
    return(
        <InputArea>
            <IconSvg width="24" height="24" fill="#B5B5B5" />
            <Input
                placeholder={placeholder}
                placeholderTextColor="#B5B5B5"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>
    );
}

const InputArea = styled.View`
width:100%;
height: 60px;
background-color: #3D3D3D;
flex-direction: row;
border-radius: 30px;
padding-left: 15px;
align-items:center;
margin-bottom: 15px;
`;

const Input = styled.TextInput`
flex: 1;
font-size: 16px;
color: #B5B5B5;
margin-left: 10px;
`;