/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {ReactNode} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';
import MainStack from './navigation';

import styled from 'styled-components';

console.log('Mainstack', MainStack);
const App: () => ReactNode = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

const Wrapper = styled(LinearGradient).attrs({
  colors: ['#6C24AA', '#190232'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
})`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const H1 = styled.Text`
  font-size: 24px;
  color: #fafafa;
`;

const Info = styled.Text`
  font-size: 14px;
  color: #fdfdfd;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Link = styled(Info)`
  color: #e0e0e0;
`;

export default App;
