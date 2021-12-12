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
import { UserContext } from "../util/GlobalStateManager";
import { auth } from "../firebase";

export default function LoginScreen({ navigation }) {
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

    console.log("unsubscribe is running");
    return () => {
      unsubscribe();
    };
  }, []);

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
        {/*The Button - will eventually take to Calvin's sign in page, but for now just takes you straight to the home page*/}
        <Text
          style={[globalStyles.header, { marginBottom: 18, marginTop: -5 }]}
        >
          Knight Bites
        </Text>

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

        <TouchableOpacity
          style={globalStyles.button}
          // onPress={() => {
          //   handleLogin;
          //   setGlobalUser(auth.currentUser?.email);
          //   navigation.navigate("Tabs", {
          //     screen: "Home",
          //   });
          // }}
          onPress={handleLogin}
          // onPressOut={setGlobalUser(auth.currentUser?.email)}
        >
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
