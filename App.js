import React from 'react';
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

//import { createBottomTabNavigator } from 'react-navigation-tabs';
// const TabNavigator = createBottomTabNavigator({
// Home: {
//   screen: home,
//   navigationOptions: {
//     tabBarLabel: "Home",
//     tabBarOptions: {
//       showLabel:false,
//       activeTintColor: "#F3CD00",
//       style: {backgroundColor:'#8C2131', height:60}
//     },

//     tabBarIcon: (tabInfo) => {
//       return (
//         <Ionicons
//           name="home"
//           size={24}
//           color={tabInfo.focused ? "#F3CD00" : "#bec1c4"}
//         />
//       );
//     },
//   },
// },
// Profile: {
//   screen: profile,
//   navigationOptions: {
//     tabBarLabel: "Profile",
//     tabBarOptions: {
//       showLabel:false,
//       activeTintColor: "#8C2131",
//       style: {backgroundColor:'#8C2131', height:60}
//     },
//     tabBarIcon: (tabInfo) => {
//       return (
//         <Ionicons
//           name="md-person-circle-outline"
//           size={24}
//           color={tabInfo.focused ? "#F3CD00" : "#bec1c4"}
//         />
//       );
//     },
//   },
// },
// });

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
        <Stack.Screen name='About Us' component={AboutScreen} options={({ navigation }) => ({
            headerRight: () => (
              <Header navigation={navigation} />
            )
          })} />
        <Stack.Screen name='Profile' component={ProfileScreen} options={({ navigation }) => ({
          headerRight: () => (
            <Header navigation={navigation} />
          )
        })} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='Discount' component={DiscountScreen} options={({ navigation }) => ({
          headerRight: () => (
            <Header navigation={navigation} />
          )
        })} />
        <Stack.Screen name='Restaurants' component={RestaurantScreen} options={({ navigation }) => ({
          headerRight: () => (
            <Header navigation={navigation} />
          )
        })} />
        <Stack.Screen name='Poster' component={PosterScreen} />
        <Stack.Screen name='Post' component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
