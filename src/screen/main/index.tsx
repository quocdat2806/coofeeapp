import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './home';
import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';
import HomeSvg from '../../assets/svg/home.svg';
import FavoriteSvg from '../../assets/svg/favorite.svg';
import ProfileSvg from '../../assets/svg/profile.svg';

const Tab = createBottomTabNavigator();
function Main() {
  const renderProfileIcon = () => <ProfileSvg width={20} height={20} />;
  const renderHomeIcon = () => <HomeSvg width={20} height={20} />;
  const renderCartIcon = () => <ProfileSvg width={20} height={20} />;
  const renderFavoritesIcon = () => <FavoriteSvg width={20} height={20} />;

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: renderHomeIcon,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Favorites',
          tabBarIcon: renderFavoritesIcon,
        }}
        name="Tab1"
        component={Tab1}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: renderCartIcon,
        }}
        name="Tab2"
        component={Tab2}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: renderProfileIcon,
        }}
        name="Tab3"
        component={Tab3}
      />
    </Tab.Navigator>
  );
}

export default Main;
