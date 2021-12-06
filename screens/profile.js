import React, { useContext } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { profileStyles } from "../styles/profile";
import profilePic from "../assets/demo-profile.png";
import { globalStyles } from "../styles/global";
import { UserContext } from "../util/UserManager";

export default function ProfileScreen({ navigation }) {
  const { user } = useContext(UserContext);

  //Shows profile
  return (
    <View style={globalStyles.screen}>
      <Image source={profilePic} style={{ width: 50, height: 55 }} />
      <View style={profileStyles.text}>
        <Text style={profileStyles.text}>{user}</Text>
        <Text style={profileStyles.text}>Year: Sophomore</Text>
        <Text style={profileStyles.text}>Bio: Hi all, I love spicy food!</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Discount")}>
        <Text style={profileStyles.discountText}>Student Discount Card</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Restaurant")}>
        <Text style={profileStyles.discountText}>Restaurant</Text>
      </TouchableOpacity>
    </View>
  );
}
