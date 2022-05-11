import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Config from 'react-native-config';
import PoolList from '../screens/PoolList';
import AddPool from '../screens/AddPool';

const {PRIMARY_YELLOW} = Config;
const Stack = createNativeStackNavigator();

console.log('PoolList ', Config);
console.log('sta ', Stack);
const MainStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: PRIMARY_YELLOW,
      },
    }}
  >
    <Stack.Screen name="Pools" component={PoolList} />
    <Stack.Screen name="AddPool" component={AddPool} />
    <Stack.Screen name="AddReport" component={PoolList} />
  </Stack.Navigator>
);

export default MainStack;
