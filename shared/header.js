import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View, Text, SafeAreaView } from "react-native";

import { globalStyles } from "../styles/global";
import About from "../screens/about";

export default function Header({ navigation }) {
  return (
    //Displays a help icon that can be pressed to be navigated to the help screen
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate("Help")}>
        <Ionicons name="help-circle-outline" size={33} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
