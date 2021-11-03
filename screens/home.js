import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, View, TouchableOpacity} from 'react-native';
import Post from '../components/Post';
import { globalStyles } from '../styles/global';
import { postStyles } from '../styles/post';

export default function HomeScreen({ navigation }) {
  const [postText, setText] = useState();
  const [postDate, setDate] = useState();
  const [post, setPost] = useState([postText, postDate]);
  const [postItems, setPostItems] = useState([]);
  
  const handleAddPost = () => {
    Keyboard.dismiss();
    const curDate = new Date();
    setDate(curDate);
    setPost([postText,postDate])
    setPostItems([...postItems, post])
    setPost(null);
    setDate(null);
    setText(null);
  }

  return (
    <View style={globalStyles.screen}>
      <View style={globalStyles.postsWrapper}>
        <Text style={globalStyles.sectionTitle}>Today's posts</Text>
        <View style={globalStyles.items}>
          {
            postItems.map((item, index) => {
              return (
                <TouchableOpacity style={postStyles.item} key={index} onPress={() => navigation.navigate('Post', {item})}>
                  <Post text={item} date={item}/>
                </TouchableOpacity>
              )
            })
          }
          </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={globalStyles.writePostWrapper}
      >
        <TextInput style={globalStyles.input} placeholder={'Write a post'} value={post} onChangeText={text => setText(text)} />
        
        <TouchableOpacity onPress={() => handleAddPost()}>
          <View style={globalStyles.addWrapper}>
            <Text style={globalStyles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}