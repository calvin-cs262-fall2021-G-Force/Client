import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
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
import PosterScreen from './screens/poster';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const TabNavigator = createBottomTabNavigator({
Home: {
  screen: home,
  navigationOptions: {
    tabBarLabel: "Home",
    tabBarOptions: {
      showLabel:false,
      activeTintColor: "#F3CD00",
      style: {backgroundColor:'#8C2131', height:60}
    },

    tabBarIcon: (tabInfo) => {
      return (
        <Ionicons
          name="home"
          size={24}
          color={tabInfo.focused ? "#F3CD00" : "#bec1c4"}
        />
      );
    },
  },
},
Profile: {
  screen: profile,
  navigationOptions: {
    tabBarLabel: "Profile",
    tabBarOptions: {
      showLabel:false,
      activeTintColor: "#8C2131",
      style: {backgroundColor:'#8C2131', height:60}
    },
    tabBarIcon: (tabInfo) => {
      return (
        <Ionicons
          name="md-person-circle-outline"
          size={24}
          color={tabInfo.focused ? "#F3CD00" : "#bec1c4"}
        />
      );
    },
  },
},
});


const Stack = createNativeStackNavigator();
const Navigator = createAppContainer(TabNavigator);

function home() {
  return(
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
          ),
          title:"Knight Bites"
        })
        
        }/>
        <Stack.Screen name='Post' component = {PostScreen} />
        <Stack.Screen name='About the app' component ={AboutScreen}/>
        <Stack.Screen name='Poster' component = {PosterScreen} />
        <Stack.Screen name='Profile' component ={ProfileScreen}/>
        <Stack.Screen name='SignUp' component ={SignUpScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
};

function profile() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name='Profile' component ={ProfileScreen}/>
        <Stack.Screen name='Discount' component ={DiscountScreen}/>
        <Stack.Screen name='Restaurant' component ={RestaurantScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <Navigator>
      <HomeScreen/>
    </Navigator>
  );
}
