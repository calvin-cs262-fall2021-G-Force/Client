import React from 'react';
import { Image, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import { globalStyles } from '../styles/global';

export default function SignUpScreen({ navigation }) {
return(
    <View style={globalStyles.screen}>
         <TouchableOpacity style = {globalStyles.button} onPress= {() => navigation.navigate('Login')}>
          <Text style = {globalStyles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
    </View>
);
}