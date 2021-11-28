import React, {useEffect, useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, View, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native';
import Post from '../components/Post';
import { globalStyles } from '../styles/global';
import { postStyles } from '../styles/post';

import moment from 'moment'

export default function HomeScreen({ route, navigation }) {

  const [isLoading, setLoading] = useState(true);
  const [postText, setText] = useState();
  const [postDate, setDate] = useState();
  const [postItems, setPostItems] = useState([]);
  const [getReference, setGetReference] = useState(0);
  
  const getPosts = async () => {
    try{
      const response = await fetch('https://knight-bites.herokuapp.com/posts');
      const json = await response.json();
      setPostItems(json);
    } catch(error){
      console.error(error);
    } finally{
      setLoading(false);
    }
  }

  const postPosts = async()=> {
    await fetch('https://knight-bites.herokuapp.com/posts', {
      method: 'POST',
      headers: {
        Accept:'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'posttitle': postText ,
        'post': postText,
        'posttime': postDate,
        'studentemail': route.params.user
      })
    })
    .then((responseJson) => {
      console.log('response object:' , JSON.stringify(responseJson))
    })
    .catch((error) => {
      console.error(error);
    })
  };

  // const postPosts = async () => {
  //   try{
  //     const makePost = {
  //       method: 'POST',
  //       headers: {
  //           Accept:'application/json',
  //           'Content-Type': 'application/json'
  //         },
  //       body: JSON.stringify({
  //         posttitle: postText,
  //         post: postText,
  //         posttime: postDate,
  //         studentEmail: route.params.user
  //       })
  //     };
  //     const response = await fetch('https://knight-bites.herokuapp.com/posts', makePost);
  //     const json = await response.json();
  //     //console.log(json);
  //     return json;
  //   }
  //   catch(error) {console.error(error)}
  // };

  useEffect(() => {
    getPosts()
   }, [getReference])

  const handleAddPost = () => {
    Keyboard.dismiss();
    const curDate = new Date().toLocaleString();
    setDate(curDate);
    postPosts();
    setText(null);
    setGetReference(getReference+1);
  }

  return (
    <View style={globalStyles.screen}>
      <View style={globalStyles.postsWrapper}>
        <Text style={globalStyles.sectionTitle}>Posts</Text>
        <View style={globalStyles.items}>
          {isLoading
            ?<ActivityIndicator />
            : (
              <ScrollView >
              {
                postItems.map((item, index) => {
                  return (
                    <TouchableOpacity style={postStyles.item} key={index} onPress={() => navigation.navigate('Post', {item})}>
                      <Post title={item.posttitle} date={moment(item.posttime).format('MMM Do YYYY, h:mm a')}/>
                    </TouchableOpacity>
                  )
                })
              }
              </ScrollView>
          )}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={globalStyles.writePostWrapper}
      >
        <TextInput style={globalStyles.input} placeholder={'Write a post'} value={postText} onChangeText={text => setText(text)} />
        
        <TouchableOpacity onPress={() => handleAddPost()}>
          <View style={globalStyles.addWrapper}>
            <Text style={globalStyles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}