import React, { useState, useContext, useEffect } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { globalStyles } from "../styles/global";
import logo from "../assets/logo.png";
import { auth } from "../firebase";

export default function LoginScreen({ navigation }) {
  //Defines the variables to be used for login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {});
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Tabs", {
          screen: "Home",
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  //Uses firebase to get authentication token
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with: ", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={globalStyles.screen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={globalStyles.loginTextBox}
      >
        <Image source={logo} style={globalStyles.loginLogo} />

        <Text
          style={[globalStyles.header, { marginBottom: 18, marginTop: -5 }]}
        >
          Knight Bites
        </Text>
        {/* User inputs for email and password */}
        <TextInput
          style={globalStyles.loginInput}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        <TextInput
          style={globalStyles.loginInput}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        {/* Signals that userName and password are defined, and attempts to authenticate using firebase */}
        <TouchableOpacity style={globalStyles.button} onPress={handleLogin}>
          <Text style={globalStyles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text
            style={[
              globalStyles.signUpText,
              { fontSize: 16, textDecorationLine: "underline" },
            ]}
          >
            Don't have an account?
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
