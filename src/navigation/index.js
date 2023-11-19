/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screen/splash';
import Main from '../screen/main';
import DetailProduct from '../screen/detailProduct';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          options={{headerShown: false}}
          component={SplashScreen}
        />
        <Stack.Screen
          name="Main"
          options={{headerShown: false}}
          component={Main}
        />
        <Stack.Screen
          name="DetailProduct"
          options={{headerShown: false}}
          component={DetailProduct}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
