import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, View, TouchableOpacity, ScrollView} from 'react-native';
import Post from '../components/Post';
import { globalStyles } from '../styles/global';
import { postStyles } from '../styles/post';

export default function HomeScreen({ navigation }) {
  const [post, setPost] = useState();
  const [postItems, setPostItems] = useState([]);
  
  const handleAddPost = () => {
    Keyboard.dismiss();
    setPostItems([...postItems, post])
    setPost(null);  
  }

  return (
    <View style={globalStyles.screen}>
       <Text style={globalStyles.sectionTitle}>Today's posts</Text>
       <View style={globalStyles.postsWrapper}>
        <View style={globalStyles.items}>
        <ScrollView>
          {/* This is where the posts will go! */}
          {
            
            postItems.map((item, index) => {
              
              return (
                <TouchableOpacity key={index} onPress={() => navigation.navigate('Post', {item})}>
                
                  <Post text={item} />
                  
                </TouchableOpacity>
               
              )})
          }
          </ScrollView>
          </View>
      </View>
      
      {/*Write a post */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={globalStyles.writePostWrapper}
      >
        <TextInput style={globalStyles.input} placeholder={'Write a post'} value={post} onChangeText={text => setPost(text)} />
        
        <TouchableOpacity onPress={() => handleAddPost()}>
          <View style={globalStyles.addWrapper}>
            <Text style={globalStyles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}