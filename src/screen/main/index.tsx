/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../home/index.';
import Tab1 from '../Tab1';
import Tab2 from '../Tab2';
import Tab3 from '../Tab3';
const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen options={{headerShown: false}} name="Tab1" component={Tab1} />
      <Tab.Screen options={{headerShown: false}} name="Tab2" component={Tab2} />
      <Tab.Screen options={{headerShown: false}} name="Tab3" component={Tab3} />
    </Tab.Navigator>
  );
}
export default Main;
