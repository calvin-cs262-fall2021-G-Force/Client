import React from "react";
import HomeScreen from "../screens/home";
import ProfileScreen from "../screens/profile";
import RestaurantScreen from "../screens/restaurant";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

// This is the tab navigator
// It consists of the Home Screen and Profile Screen
function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#fff",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          // bottom: 20,
          // marginHorizontal: 16,
          height: 68,
          marginBottom: -5,
          borderTopWidth: 0,
        },
        // headerTintColor: "red",
        // headerTransparent: true,
        headerShadowVisible: false,
        // headerStyle: { backgroundColor: "green" },
        headerTitleStyle: { fontWeight: "bold", fontSize: 25 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={27}
                color="maroon"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Restaurants"
        component={RestaurantScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "fast-food" : "fast-food-outline"}
                size={27}
                color="maroon"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={27}
                color="maroon"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabRoutes;