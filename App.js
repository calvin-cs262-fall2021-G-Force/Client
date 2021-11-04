import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

import PostScreen from './screens/post'
import AboutScreen from './screens/about'
import LoginScreen from './screens/login'
import HomeScreen from './screens/home'
import ProfileScreen from './screens/profile';
import Header from './shared/header'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const TabNavigator = createBottomTabNavigator({

Home: {
  screen: home,
  navigationOptions: {
    tabBarLabel: "Home",
    tabBarOptions: {
      activeTintColor: "#8C2131",
    },
    tabBarIcon: (tabInfo) => {
      return (
        <Ionicons
          name="md-home"
          size={24}
          color={tabInfo.focused ? "#33adff" : "#8e8e93"}
        />
      );
    },
  },
},
Profile: {
  screen: ProfileScreen,
  navigationOptions: {
    tabBarLabel: "Profile",
    tabBarOptions: {
      activeTintColor: "#8C2131",
    },
    tabBarIcon: (tabInfo) => {
      return (
        <Ionicons
          name="md-person-circle-outline"
          size={24}
          color={tabInfo.focused ? "#33adff" : "#8e8e93"}
        />
      );
    },
  },
},
// Profile: {
//   screen: ProfileScreen,
//   navigationOptions: {
//     tabBarLabel: "Profile",
//     tabBarOptions: {
//       activeTintColor: "#8C2131",
//     },
//     tabBarIcon: (tabInfo) => {
//       return (
//         <Ionicons
//           name="md-settings-outline"
//           size={24}
//           color={tabInfo.focused ? "#8C2131" : "#8e8e93"}
//         />
//       );
//     },
//   },
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
          )       
        })}/>
        <Stack.Screen name='Post' component = {PostScreen} />
        <Stack.Screen name='About the app' component ={AboutScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default function App() {
  return (
    <Navigator>
      <HomeScreen/>
    </Navigator>
  );
}
