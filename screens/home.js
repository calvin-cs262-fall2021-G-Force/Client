import React, { useState } from 'react';
import { Alert, Modal, Keyboard, KeyboardAvoidingView, Platform, Pressable, Text, TextInput, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Post from '../components/Post';
import { globalStyles } from '../styles/global';
import { postStyles } from '../styles/post';
import { modalStyles } from '../styles/modal';

export default function HomeScreen({ navigation }) {
  const hardCodePost1 = ["Culver's", (new Date('05 Nov 2021 17:00:00 GMT')).toLocaleString(), "Anyone want to go eat some Culver's in the next half hour or so?"]
  const hardCodePost2 = ["Subway", (new Date('5 Nov 2021 18:00:00 GMT')).toLocaleString(), "Headed to Subway if anyone wants to grab something to eat quick."]
  const hardCodePost3 = ["Anna's House", (new Date('6 Nov 2021 12:30:00 GMT')).toLocaleString(), "Going to Anna's House tomorrow. Anyone wanna join?"]

  const [postTitle, setTitle] = useState();
  const [postText, setText] = useState();
  const [postItems, setPostItems] = useState([hardCodePost1, hardCodePost2, hardCodePost3]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddPost = () => {
    Keyboard.dismiss();
    const curDate = new Date().toLocaleString();
    setPostItems([...postItems, [postTitle, curDate, postText]]);
    setTitle(null);
    setText(null);
  }

  return (
    <View style={globalStyles.screen}>
      <View style={globalStyles.postsWrapper}>
        <Text style={globalStyles.sectionTitle}>Posts</Text>
        <View style={globalStyles.items}>
          <ScrollView >
            {
              postItems.map((item, index) => {
                return (
                  <TouchableOpacity style={postStyles.item} key={index} onPress={() => navigation.navigate('Post', { item })}>
                    <Post text={item[0]} date={item[1]} />
                  </TouchableOpacity>
                )
              })
            }
          </ScrollView>
        </View>
      </View>
      <View style={modalStyles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={modalStyles.centeredView}>
            <View style={modalStyles.modalView}>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <TextInput
                  style={globalStyles.input}
                  placeholder={'Add title...'}
                  value={postTitle}
                  onChangeText={text => setTitle(text)}
                />
                <TextInput
                  style={globalStyles.input}
                  placeholder={'Write post here...'}
                  value={postText}
                  onChangeText={text => setText(text)}
                />
                <Pressable
                  style={[modalStyles.button, modalStyles.buttonOpen]}
                  onPressIn={() => handleAddPost()}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={modalStyles.textStyle}>Add Post</Text>
                </Pressable>
              </KeyboardAvoidingView>
            </View>
          </View>
        </Modal>
      </View>
      <TouchableOpacity style={globalStyles.button} onPress={() => setModalVisible(true)}>
        <View style={globalStyles.addWrapper}>
          <Text style={globalStyles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

