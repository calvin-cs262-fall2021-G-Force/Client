import React from "react";
import HomeScreen from "../screens/home";
import ProfileScreen from "../screens/profile";
import RestaurantScreen from "../screens/restaurant";
import Header from "../shared/header";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import DiscountScreen from "../screens/discount";

const Tab = createBottomTabNavigator();

// This is the tab navigator
// It consists of the Home Screen, Restaurant Screen, DiscountScreen, and Profile Screen
function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => ({
        headerShown: true,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#fff",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 68,
          marginBottom: -5,
          borderTopWidth: 0,
        },
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 30,
        },
        headerRight: () => <Header navigation={navigation} />,
      })}
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
          headerTitle: "Knight Bites",
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
        name="Discount"
        component={DiscountScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "card" : "card-outline"}
                size={27}
                color="maroon"
              />
            );
          },
          headerTitle: "Discount Card",
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
          headerTitle: "Your Profile",
        }}
      />
    </Tab.Navigator>
  );
}

export default TabRoutes;
