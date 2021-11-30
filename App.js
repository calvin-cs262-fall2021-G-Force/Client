import React from 'react';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';

import DiscountScreen from './screens/discount';
import PostScreen from './screens/post'
import AboutScreen from './screens/about'
import LoginScreen from './screens/login'
import HomeScreen from './screens/home'
import ProfileScreen from './screens/profile';
import Header from './shared/header';
import SignUpScreen from './screens/signup';
import RestaurantScreen from './screens/restaurant';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Home' component={HomeScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Header navigation={navigation} />
            )
          })} />
        <Stack.Screen name='About the app' component={AboutScreen} />
        <Stack.Screen name='Profile' component={ProfileScreen} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='Discount' component={DiscountScreen} />
        <Stack.Screen name='Restaurant' component={RestaurantScreen} />
        <Stack.Screen name='Post' component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
