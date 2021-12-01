import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Alert, Button, FlatList, Modal, Keyboard, KeyboardAvoidingView, Platform, Pressable, Text, TextInput, View, TouchableOpacity, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import Post from '../components/Post';
import { globalStyles } from '../styles/global';
import { postStyles } from '../styles/post';
import { modalStyles } from '../styles/modal';

import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ route, navigation }) {

  const [isLoading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [postTitle, setTitle] = useState();
  const [postText, setText] = useState();
  const [postDate, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [postItems, setPostItems] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedValue, setSelectedValue] = useState("1");
  const [getReference, setGetReference] = useState(0);
  const [isButtonVisible, setButtonVisible] = useState(true);
  const [show, setShow] = useState(false);

  const getPosts = async () => {
    try {
      const response = await fetch('https://knight-bites.herokuapp.com/posts');
      const json = await response.json();
      setPostItems(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const getRestaurants = async () => {
    try {
      const response = await fetch('https://knight-bites.herokuapp.com/restaurants');
      const json = await response.json();
      setRestaurants(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const postPosts = async () => {
    await fetch('https://knight-bites.herokuapp.com/posts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'posttitle': postTitle,
        'post': postText,
        'posttime': new Date(),
        'studentemail': route.params.user
      })
    })
      .then((responseJson) => {
        console.log('response object:', JSON.stringify(responseJson))
      })
      .catch((error) => {
        console.error(error);
      })
  };

  useEffect(() => {
    getPosts();
    getRestaurants();
  }, [getReference])

  const handleAddPost = () => {
    Keyboard.dismiss();
    postPosts();
    setText(null);
    setTitle(null);
    setGetReference(getReference + 1);
    Alert.alert("New Post Created");
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={globalStyles.screen}>
      <View style={globalStyles.postsWrapper}>
        <Text style={globalStyles.sectionTitle}>Posts</Text>
        <View style={globalStyles.items}>
          {isLoading
            ? <ActivityIndicator />
            : (
              <ScrollView >
                {
                  postItems.map((item, index) => {
                    return (
                      <TouchableOpacity style={postStyles.item} key={index} onPress={() => navigation.navigate('Post', { item })}>
                        <Post title={item.posttitle} date={moment(item.posttime).format('MMM Do YYYY, h:mm a')} />
                      </TouchableOpacity>
                    )
                  })
                }
              </ScrollView>
            )}
        </View>
      </View>

      <View style={modalStyles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("No changes made");
            setModalVisible(!modalVisible);
            setButtonVisible(true);
          }}
        >
          <TouchableOpacity
            style={modalStyles.centeredView}
            onPressOut={() => {
              Alert.alert("No changes made");
              setModalVisible(!modalVisible);
              setButtonVisible(true);
            }}
          >
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
                <View style={{ flexDirection:"row", alignContent: 'center'}}>
                  <TouchableOpacity
                    onPress={showDatepicker}
                    style={modalStyles.button}
                  >
                    <Ionicons
                      name="calendar"
                      size={43}
                      color={'#ccc'}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={showTimepicker}
                    style={modalStyles.button}
                  >
                    <Ionicons
                      name="time-outline"
                      size={43}
                      color={'#ccc'}
                    />
                  </TouchableOpacity>
                </View>
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={postDate}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                  />
                )}
                <Picker
                  selectedValue={selectedValue}
                  style={modalStyles.picker}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                  {
                    restaurants.map((item, index) => {
                      return (
                        <Picker.Item label={item.name} value={index} />
                      )
                    })
                  }
                </Picker>

                <TextInput
                  style={modalStyles.postInput}
                  placeholder={'Write post here...'}
                  value={postText}
                  onChangeText={text => setText(text)}
                />
                <Pressable
                  style={[modalStyles.button, modalStyles.buttonOpen]}
                  onPressIn={() => handleAddPost()}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    setButtonVisible(true);
                  }}
                >
                  <Text style={modalStyles.textStyle}>Add Post</Text>
                </Pressable>
              </KeyboardAvoidingView>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
      {isButtonVisible ?
        <TouchableOpacity
          style={globalStyles.addPost}
          onPress={() => {
            setModalVisible(true);
            setButtonVisible(false);
          }}
        >
          <View>
            <Ionicons
              name='create-outline'
              size={34}
              color='#F3CD00'
            />
          </View>
        </TouchableOpacity>
        : null}
    </View>
  );
}