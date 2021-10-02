import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import UserContextProvider from './src/contexts/UserContext';
import Routes from './src/stacks/Routes';
import { StatusBar } from 'react-native';

export default () => {
  return (
    <>
      <StatusBar style="light" backgroundColor="#333333" translucent={false} />
      <UserContextProvider>
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
      </UserContextProvider>
    </>
  );
}