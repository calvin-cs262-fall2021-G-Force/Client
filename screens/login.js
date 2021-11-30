import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { globalStyles } from '../styles/global';
import logo from '../assets/logo.png'

export default function LoginScreen({ navigation }) {
  const [user, setUser] = useState();
  /*Create a Login Screen with a button that will ask for Authentication
    TODO: Will need to have KnightBites logo and other aesthetics added*/
  return (
    <View style={globalStyles.screen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={globalStyles.loginTextBox}
      >
        <Image source={logo} style={globalStyles.loginLogo} />
        {/*The Button - will eventually take to Calvin's sign in page, but for now just takes you straight to the home page*/}
        <Text style={globalStyles.header}>
          Knight Bites
        </Text>

        <TextInput style={globalStyles.loginInput} placeholder='Username' onChangeText={user => setUser(user)} value={user} />

        <TextInput secureTextEntry={true} style={globalStyles.loginInput} placeholder='Password' />

        <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Home', { user })}>
          <Text style={globalStyles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={{ fontSize: 14, color: '#8C2131', padding: 10 }}> Don't have an account?</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}