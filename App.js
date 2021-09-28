import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function LoginScreen({ navigation }) {
  /*Create a Login Screen with a button that will ask for Authentication
    TODO: Will need to have KnightBites logo and other aesthetics added*/
  return (
    <View style={styles.screen}>
      {/*The Button - will eventually take to Calvin's sign in page, but for now just takes you straight to the home page*/}
      <Text style={styles.header}>
        Knight Bites
      </Text>
      <TouchableOpacity style = {styles.button} onPress= {() => navigation.navigate('Home')}>
        <Text style = {styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomeScreen({ navigation }) {
  /*Will need to be able to add Posts
    TODO: Add component for Posts similar to tasks from HW1*/
  return (
    <View style={styles.container}>
      <Text>Hello, world! Welcome to the Knight Bites app!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Login' component ={LoginScreen} />
        <Stack.Screen name='Home' component = {HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  /*Per Calvin University Brand Identity Standards 
    Fonts: Constantia, Gotham, Century Schoolbook
    Maroon: #8C2131
    Gold:   #F3CD00 
    Can be found at https://calvin.edu/dotAsset/f784aa74-291f-45b1-b45c-d6455663bcb4
  */
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Century Schoolbook',
  },
  screen: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    padding: 40,
    fontSize: 40,
    fontFamily: 'Constantia',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: '#8C2131',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontFamily: 'Gotham',
    color: '#F3CD00'
  }
});
