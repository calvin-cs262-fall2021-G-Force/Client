import React, { useContext } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { profileStyles } from "../styles/profile";
import profilePic from "../assets/demo-profile.png";
import { globalStyles } from "../styles/global";
import { UserContext } from "../util/GlobalStateManager";
import { auth } from "../firebase";

export default function ProfileScreen({ navigation }) {
  const userEmail = auth.currentUser?.email;

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => alert(error.message));
  };
  //Shows profile
  return (
    <View style={globalStyles.screen}>
      <Image source={profilePic} style={{ width: 50, height: 55 }} />

      <View style={profileStyles.text}>
        <Text style={profileStyles.text}>{userEmail}</Text>
        <Text style={profileStyles.text}>Year: Sophomore</Text>
        <Text style={profileStyles.text}>Bio: Hi all, I love spicy food!</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Discount")}>
        <Text style={profileStyles.discountText}>Student Discount Card</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Restaurant")}>
        <Text style={profileStyles.discountText}>Restaurant</Text>
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.button} onPress={handleSignOut}>
        <Text style={globalStyles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
