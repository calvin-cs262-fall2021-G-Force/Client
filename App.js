import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Post from './components/Post';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({navigation}) {
  const [post, setPost] = useState();
  const [postItems, setPostItems] =  useState([]);

  const handleAddPost = () => {
    Keyboard.dismiss();
    setPostItems([...postItems, post])
    setPost(null);
  }

  return (
    <View style={styles.container}>
      {/*Today's Posts*/}
      <View style={styles.postsWrapper}>
      
        <Text style={styles.sectionTitle}>Today's posts</Text>
      
        <View style ={styles.items}>
            {/*This is where the posts will go*/}
            {
              postItems.map((item, index) => {
                return (
                  <TouchableOpacity onPress= {() => navigation.navigate('Post', item)}>
                    <Post text={item}/>
                  </TouchableOpacity>
                )

              })
            }
        </View>
      </View>

      {/*write a post*/}
      
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writePostWrapper}>
          <TextInput style = {styles.input} placeholder = {'Write a post'} value={post} onChangeText={text => setPost(text)}/>

          <TouchableOpacity onPress ={() => handleAddPost()}>
            <View style = {styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>

    </View>
  );
}

function PostScreen({route, navigation}) {
  return (
    <View style={{ flex: 1, padding: 20}}>
      <Text>{route.params}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  postsWrapper: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    marginTop: 130,
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 40,
  },
  writePostWrapper: {
    position: 'absolute',
    top: 50,
    marginTop: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    padding: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {

  },
});