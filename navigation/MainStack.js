import React from "react";
import TabRoutes from "./TabRoutes";
import LoginScreen from "../screens/login";
import PostScreen from "../screens/postDetails";
import PosterScreen from "../screens/poster";
import RestaurantScreen from "../screens/restaurant";
import DiscountScreen from "../screens/discount";
import AboutScreen from "../screens/about";
import SignUpScreen from "../screens/signup";
import EditProfileScreen from "../screens/editProfile";

export default function (Stack) {
  return (
    <>
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
        name="About"
        component={AboutScreen}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tabs"
        component={TabRoutes}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        // options={{ headerStyle: { backgroundColor: "transparent" } }}
      />
      <Stack.Screen name="Poster" component={PosterScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen name="Discount" component={DiscountScreen} />
      <Stack.Screen name="Edit Profile" component={EditProfileScreen} />
    </>
  );
}
