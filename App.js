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
      activeTintColor: "#8C2131",
    },
    tabBarIcon: (tabInfo) => {
      return (
        <Ionicons
          name="md-home"
          size={24}
          color={tabInfo.focused ? "#8C2131" : "#8e8e93"}
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
      activeTintColor: "#8C2131",
    },
    tabBarIcon: (tabInfo) => {
      return (
        <Ionicons
          name="md-help-circle-outline"
          size={24}
          color={tabInfo.focused ? "#8C2131" : "#8e8e93"}
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


const Navigator = createAppContainer(TabNavigator);

export default function App() {
  return (
    <Navigator>
      <HomeScreen />
    </Navigator>
  );
}
