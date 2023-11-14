/* eslint-disable react/react-in-jsx-scope */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screen/splash';
import Main from './src/screen/main';
import DetailProduct from './src/screen/detailProduct';
const Stack = createNativeStackNavigator();
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
