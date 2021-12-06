import React from "react";
import MainStack from "./MainStack";
import { UserProvider } from "../util/UserManager";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // headerStyle: { backgroundColor: "#ADD8E6" },
          //   headerTransparent: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
        }}
      >
        {MainStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => (
  <UserProvider>
    <Routes />
  </UserProvider>
);
