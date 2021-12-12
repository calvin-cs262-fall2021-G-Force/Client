import React, { useState, useEffect } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

import { auth } from "../firebase";
import { globalStyles } from "../styles/global";
import { Picker } from "@react-native-picker/picker";

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(null);
  const [collegeYear, setCollegeYear] = useState("");
  const [bio, setBio] = useState("");
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [createStudentRef, setCreateStudentRef] = useState(0);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {});
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Tabs", {
          screen: "Home",
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        createStudent();
        const user = userCredentials.user;
        console.log("\nRegistered with: ", user.email);
        setAuthenticated(true);
      })
      .catch((error) => alert(error.message));
    // navigation.navigate("Login");
  };

  const createStudent = async () => {
    await fetch("https://knight-bites.herokuapp.com/students", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        firstname: firstName,
        lastname: lastName,
        collegeyear: collegeYear,
        bio: bio,
        icon: "skull",
      }),
    })
      .then((responseJson) => {
        console.log(
          "\ncreateStudent response object:",
          JSON.stringify(responseJson)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCreateStudent = () => {
    {
      isAuthenticated ? createStudent : setAuthenticated(false);
    }
  };

  return (
    <View style={globalStyles.screen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={globalStyles.loginTextBox}
      >
        <Text
          style={[
            globalStyles.signUpText,
            { fontWeight: "bold", fontSize: 26 },
          ]}
        >
          Create an Account
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

        <TextInput
          style={globalStyles.loginInput}
          placeholder="First Name"
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
        />

        <TextInput
          style={globalStyles.loginInput}
          placeholder="Last Name"
          onChangeText={(text) => setLastName(text)}
          value={lastName}
        />

        {/* <TextInput
          style={globalStyles.loginInput}
          placeholder="Year in College"
          onChangeText={(text) => setCollegeYear(text)}
          value={collegeYear}
        /> */}
        <View
          style={[
            globalStyles.loginInput,
            { height: 60, justifyContent: "center" },
          ]}
        >
          <Picker
            selectedValue={collegeYear}
            // style={{ height: 50, width: 178 }}
            onValueChange={(itemValue, itemIndex) => {
              setCollegeYear(itemValue);
            }}
            style={{ height: 80, width: 220 }}
          >
            <Picker.Item label="Freshman" value="Freshman" />
            <Picker.Item label="Sophomore" value="Sophomore" />
            <Picker.Item label="Junior" value="Junior" />
            <Picker.Item label="Senior" value="Senior" />
            <Picker.Item label="Super Senior" value="Super Senior" />
          </Picker>
        </View>

        <TextInput
          style={globalStyles.loginInput}
          placeholder="Bio"
          onChangeText={(text) => setBio(text)}
          value={bio}
          multiline={true}
        />

        <TouchableOpacity
          style={globalStyles.button}
          onPressOut={handleSignUp}
          onPress={handleCreateStudent}
        >
          <Text style={globalStyles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{ marginTop: 15 }}
        >
          <Text style={{ fontSize: 15, textDecorationLine: "underline" }}>
            Already have an account?
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
