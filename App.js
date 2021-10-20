import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostScreen from './screens/post'
import AboutScreen from './screens/about'
import LoginScreen from './screens/login'
import HomeScreen from './screens/home'
import Header from './shared/header'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Login' component ={LoginScreen} 
        options={({ navigation }) => ({
          headerRight: () => (
            <Header navigation={navigation}/>
          )       
        })}/>
        <Stack.Screen name='Home' component = {HomeScreen} 
        options={({ navigation }) => ({
          headerRight: () => (
            <Header navigation={navigation}/>
          )       
        })}/>
        <Stack.Screen name='Post' component = {PostScreen} />
        <Stack.Screen name='About' component ={AboutScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}