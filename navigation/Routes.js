import React from "react";
import { GlobalStateProvider } from "../util/GlobalStateManager";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabRoutes from "./TabRoutes";
import LoginScreen from "../screens/login";
import PostScreen from "../screens/postDetails";
import PosterScreen from "../screens/poster";
import RestaurantScreen from "../screens/restaurant";
import DiscountScreen from "../screens/discount";
import AboutScreen from "../screens/about";
import SignUpScreen from "../screens/signup";
import EditProfileScreen from "../screens/editProfile";

const Stack = createNativeStackNavigator();

//Contains the main stack for our app
function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Help"
          component={AboutScreen}
          options={{ title: "How to Use the App" }}
        />
        {/* The Tab Navigator is nested inside the Stack Navigator */}
        <Stack.Screen
          name="Tabs"
          component={TabRoutes}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="Poster" component={PosterScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Discount" component={DiscountScreen} />
        <Stack.Screen name="Edit Profile" component={EditProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => (
  <GlobalStateProvider>
    <Routes />
  </GlobalStateProvider>
);
