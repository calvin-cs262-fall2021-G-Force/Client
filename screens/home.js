import React, { useState, useEffect, useContext } from "react";
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import {
  ActivityIndicator,
  Alert,
  FlatList,
  Modal,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { UserContext } from "../util/GlobalStateManager";
import Post from '../components/Post';
import { globalStyles } from '../styles/global';
import { postStyles } from '../styles/post';
import { modalStyles } from '../styles/modal';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function HomeScreen({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [postTitle, setTitle] = useState(null);
  const [postText, setText] = useState(null);
  const [postItems, setPostItems] = useState([]);
  const [isButtonVisible, setButtonVisible] = useState(true);
  const [selectedValue, setSelectedValue] = useState('1');
  const [restaurants, setRestaurants] = useState([]);
  const [meetupTime, setDate] = useState(null);
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const { user } = useContext(UserContext);
  const { readState, setGlobalRead } = useContext(UserContext);
  

  const getPosts = async () => {
    try {
      const response = await fetch(
        "https://knight-bites.herokuapp.com/posts-details"
      );
      const json = await response.json();
      setPostItems(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const postPosts = async () => {
    await fetch("https://knight-bites.herokuapp.com/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        posttitle: postTitle,
        post: postText,
        posttime: new Date(),
        meetuptime: meetupTime,
        restaurantid: 9,
        studentemail: user,
      }),
    })
      .then((responseJson) => {
        console.log("post response object:", JSON.stringify(responseJson));
      })
      .catch((error) => {
        console.error(error);
      });
  };

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

  useEffect(() => {
    getRestaurants();
  }, []);

  useEffect(() => {
    getPosts();
  }, [readState]);

  useEffect(() => {
    onRefresh();
  }, []);

  const handleAddPost = () => {
    Keyboard.dismiss();
    postPosts();
    setText(null);
    setTitle(null);
    setGlobalRead(readState + 1);
    Alert.alert("New Post Created");
  };

  const onRefresh = () => {
    setRefreshing(true);
    wait(1500).then(() => setRefreshing(false));
    setGlobalRead(readState + 1);
  };

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
        <View style={globalStyles.items}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <ScrollView
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            >
              {postItems.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={postStyles.item}
                    key={index}
                    onPress={() => navigation.navigate("Post", { item })}
                  >
                    <Post {...item} />
                  </TouchableOpacity>
                );
              })}
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
                  placeholder={"Add title..."}
                  value={postTitle}
                  onChangeText={(text) => setTitle(text)}
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
                    value={meetupTime}
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
                  placeholder={"Write post here..."}
                  value={postText}
                  onChangeText={(text) => setText(text)}
                />
                <Pressable
                  style={[modalStyles.button, modalStyles.buttonOpen]}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    setButtonVisible(true);
                    handleAddPost();
                  }}
                >
                  <Text style={modalStyles.textStyle}>Add Post</Text>
                </Pressable>
              </KeyboardAvoidingView>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
      {isButtonVisible ? (
        <TouchableOpacity
          style={globalStyles.addPost}
          onPress={() => {
            setModalVisible(true);
            setButtonVisible(false);
          }}
        >
          <View>
            <Ionicons name="create-outline" size={34} color="#F3CD00" />
          </View>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
