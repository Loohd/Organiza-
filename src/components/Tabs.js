import React from "react";
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styled from "styled-components/native";

export default function Tabs() {
    return(
        <Container>
            <TabsContainer>
                <TabItem>
                <Icon name= "home" size={24} color="#FFF"/>
                </TabItem >
                <TabItem>
                <Icon name= "file-text" size={24} color="#FFF"/>
                </TabItem >
                <TabItem>
                <Icon name= "plus-circle" size={45} color="#FFF"/>
                </TabItem >
                <TabItem>
                <Icon name= "calendar" size={24} color="#FFF"/>
                </TabItem >
                <TabItem>
                <Icon name= "user" size={24} color="#FFF"/>
                </TabItem >
            </TabsContainer>
        </Container>
    );
}

export const Container = styled.View `
    height: 65px;
    margin-top: 20px;
    background: rgba(51, 51, 65, 100);

`;

export const TabsContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-right: 5px;
    padding-left: 5px;
`;

export const TabItem = styled.View`
    width: 80px;
    height: 65px;
    padding: 5px;
    justify-content: center;
    align-items: center;
`;

