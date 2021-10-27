import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import PostScreen from './screens/post'
import AboutScreen from './screens/about'
import LoginScreen from './screens/login'
import HomeScreen from './screens/home'
import Header from './shared/header'

const TabNavigator = createBottomTabNavigator({

Home: {
  screen: HomeScreen,
  navigationOptions: {
    tabBarLabel: "Home",
    tabBarOptions: {
      activeTintColor: "#006600",
    },
    tabBarIcon: (tabInfo) => {
      return (
        <Ionicons
          name="md-home"
          size={24}
          color={tabInfo.focused ? "#006600" : "#8e8e93"}
        />
      );
    },
  },
},
About: {
  screen: AboutScreen,
  navigationOptions: {
    tabBarLabel: "About",
    tabBarOptions: {
      activeTintColor: "#006600",
    },
    tabBarIcon: (tabInfo) => {
      return (
        <Ionicons
          name="md-person-circle-outline"
          size={24}
          color={tabInfo.focused ? "#006600" : "#8e8e93"}
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
//       activeTintColor: "#006600",
//     },
//     tabBarIcon: (tabInfo) => {
//       return (
//         <Ionicons
//           name="md-settings-outline"
//           size={24}
//           color={tabInfo.focused ? "#006600" : "#8e8e93"}
//         />
//       );
//     },
//   },
});


const Navigator = createAppContainer(TabNavigator);

export default function App() {
  return (
    <Navigator>
      <HomeScreen />
    </Navigator>
    /*<NavigationContainer>
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
    </NavigationContainer>*/
  );
}
