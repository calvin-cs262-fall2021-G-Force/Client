import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, View, TouchableOpacity} from 'react-native';
import Post from '../components/Post';
import { globalStyles } from '../styles/global';

export default function HomeScreen({ navigation }) {
  const [post, setPost] = useState();
  const [postItems, setPostItems] = useState([]);
  
  const handleAddPost = () => {
    Keyboard.dismiss();
    setPostItems([...postItems, post])
    setPost(null);  
  }
  
  const completePost = (index) => {
    let itemsCopy = [...postItems];
    itemsCopy.splice(index, 1);
    setPostItems(itemsCopy);
  }

  return (
    <View style={globalStyles.screen}>
      <View style={globalStyles.postsWrapper}>

        <Text style={globalStyles.sectionTitle}>Today's posts</Text>
        <View>
          {
            postItems.map((item, index) => {
              return (
                <TouchableOpacity style={globalStyles.post} key={index} onPress={() => navigation.navigate('Post', {item})}>
                  <Post text={item} />
                </TouchableOpacity>
              )
            })
          }
          </View>
      </View>
      
      {/*Write a post */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        behavior={Platform.OS === "android" ? "padding" : "height"}
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