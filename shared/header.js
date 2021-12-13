import React from "react";
import { TouchableOpacity, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
