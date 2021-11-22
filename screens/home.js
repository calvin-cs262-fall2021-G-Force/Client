import React, {useEffect, useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, View, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native';
import Post from '../components/Post';
import { globalStyles } from '../styles/global';
import { postStyles } from '../styles/post';

export default function HomeScreen({ navigation }) {
  const hardCodePost1 = ["Culver's", (new Date('05 Nov 2021 17:00:00 GMT')).toLocaleString(), "Anyone want to go eat some Culver's in the next half hour or so?"]
  const hardCodePost2 = ["Subway", (new Date('5 Nov 2021 18:00:00 GMT')).toLocaleString(), "Headed to Subway if anyone wants to grab something to eat quick."]
  const hardCodePost3 = ["Anna's House", (new Date('6 Nov 2021 12:30:00 GMT')).toLocaleString(), "Going to Anna's House tomorrow. Anyone wanna join?"]
  
  const [isLoading, setLoading] = useState(true);
  const [postText, setText] = useState();
  const [postDate, setDate] = useState();
  const [postItems, setPostItems] = useState([]);
  
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
    fetch('https://knight-bites.herokuapp.com/posts', {
      method: 'POST',
      headers: {
        Accept:'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        posttitle:"culvers" ,
        post: postText,
        posttime: postDate,
      })
    })
      //.then((response) => response.json())
      .then((responseJson) => {
        console.log('response object:' , responseJson)
      })
      .catch((error) => {
        console.error(error);
      })
  };

  useEffect(() => {
    getPosts()
  }, [])

  const handleAddPost = () => {
    Keyboard.dismiss();
    const curDate = new Date().toLocaleString();

    setPostItems([...postItems, [postText, curDate, "Details will be found here"]]);
    setDate(curDate);
    postPosts(postText, curDate);
    setText(null);
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
                //postItems={postItems}
                postItems.map((item, index) => {
                  return (
                    <TouchableOpacity style={postStyles.item} key={index} onPress={() => navigation.navigate('Post', {item})}>
                      <Post text={item.posttitle} date={item.posttime}/>
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