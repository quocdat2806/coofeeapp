import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from '../screen/splash';
import Main from '../screen/main';
import DetailProduct from '../screen/detailProduct';
import HomeScreen from '../screen/main/home';
import Tab1 from '../screen/main/tab1';
import Tab2 from '../screen/main/tab2';
import Tab3 from '../screen/main/tab3';
import { StyleSheet } from 'react-native';
import HomeSvg from '../assets/svg/home.svg';
import FavoriteSvg from '../assets/svg/favorite.svg';
import ProfileSvg from '../assets/svg/profile.svg';
import CartSvg from '../assets/svg/cart.svg';

import { COLORS } from '../constants/color';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const styleBottomTab = (isActive: boolean) => {
  return StyleSheet.create({
    stl: {
      paddingTop: 2,
      borderTopColor: isActive ? COLORS.BROWN : COLORS.TRANSPARENT,
      borderLeftColor: '',
      paddingHorizontal: 6,
      borderTopWidth: isActive ? 3 : 0,
    },
  });
};
function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          options={{ headerShown: false }}
          component={SplashScreen}
        />
        <Stack.Screen
          name="Main"
          options={{ headerShown: false }}
          component={Main}
        />
        <Stack.Screen
          name="DetailProduct"
          options={{ headerShown: false }}
          component={DetailProduct}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function AppBottomNavigation() {
  const renderProfileIcon = ({ focused }) => {
    const style = styleBottomTab(focused);
    return (
      <View style={style.stl}>
        <ProfileSvg
          style={{ color: focused ? COLORS.BROWN : COLORS.GREY_2 }}
          width={24}
          height={24}
        />
      </View>
    );
  };
  const renderHomeIcon = ({ focused }) => {
    const style = styleBottomTab(focused);
    return (
      <View style={style.stl}>
        <HomeSvg
          style={{ color: focused ? COLORS.BROWN : COLORS.GREY_2 }}
          width={24}
          height={24}
        />
      </View>
    );
  };
  const renderCartIcon = ({ focused }) => {
    const style = styleBottomTab(focused);
    return (
      <View style={style.stl}>
        <CartSvg
          style={{ color: focused ? COLORS.BROWN : COLORS.GREY_2 }}
          width={24}
          height={24}
        />
      </View>
    );
  };
  const renderFavoritesIcon = ({ focused }) => {
    const style = styleBottomTab(focused);
    return (
      <View style={style.stl}>
        <FavoriteSvg
          style={{ color: focused ? COLORS.BROWN : COLORS.GREY_2 }}
          width={24}
          height={24}
        />
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          paddingBottom: 4,
        },
      }}
      initialRouteName="Home">
      <Tab.Screen
        options={{
          tabBarActiveTintColor: COLORS.BROWN,
          tabBarLabel: 'Home',
          tabBarIcon: renderHomeIcon,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: COLORS.BROWN,
          tabBarLabel: 'Favorites',
          tabBarIcon: renderFavoritesIcon,
        }}
        name="Favorites"
        component={Tab1}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: COLORS.BROWN,
          tabBarLabel: 'Cart',
          tabBarIcon: renderCartIcon,
        }}
        name="Cart"
        component={Tab2}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: COLORS.BROWN,
          tabBarLabel: 'Profile',
          tabBarIcon: renderProfileIcon,
        }}
        name="Profile"
        component={Tab3}
      />
    </Tab.Navigator>
  );
}
export { AppNavigation, AppBottomNavigation };
