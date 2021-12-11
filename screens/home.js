import React, { useState, useEffect, useContext } from "react";
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
  Picker,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { auth } from "../firebase";

import Post from "../components/postComponent";
import { globalStyles } from "../styles/global";
import { postStyles } from "../styles/post";
import { modalStyles } from "../styles/modal";
import { UserContext } from "../util/GlobalStateManager";

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
  const [refreshing, setRefreshing] = useState(false);
  const { readState, setGlobalRead } = useContext(UserContext);
  const [sortSelected, setSortSelected] = useState("posttime");

  const userEmail = auth.currentUser?.email;

  const getPostsPostTime = async () => {
    try {
      const response = await fetch(
        "https://knight-bites.herokuapp.com/posts-details/posttime"
      );
      const json = await response.json();
      setPostItems(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    setGlobalRead(readState + 1);
  };

  const getPostsMeetUpTime = async () => {
    try {
      const response = await fetch(
        "https://knight-bites.herokuapp.com/posts-details/meetuptime"
      );
      const json = await response.json();
      setPostItems(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    setGlobalRead(readState + 1);
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
        meetuptime: new Date(Date.now()).toISOString(),
        restaurantid: 9,
        studentemail: userEmail,
      }),
    })
      .then((responseJson) => {
        console.log("post response object:", JSON.stringify(responseJson));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      sortSelected === "posttime" ? getPostsPostTime() : getPostsMeetUpTime();
    }

    return function cleanup() {
      mounted = false;
    };
  }, [readState]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      onRefresh();
    }

    return function cleanup() {
      mounted = false;
    };
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

  return (
    <View style={globalStyles.screen}>
      <View
        style={{
          flexDirection: "row",
          paddingRight: 15,
          alignSelf: "flex-end",
        }}
      >
        <Text style={{ marginTop: 20, fontWeight: "bold", fontSize: 16 }}>
          Sort By:{" "}
        </Text>
        <View
          style={{
            marginTop: 10,
            backgroundColor: "#F3CD00",
            borderRadius: 20,
            height: 40,
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Picker
            selectedValue={sortSelected}
            style={{ height: 50, width: 178 }}
            onValueChange={(itemValue, itemIndex) => {
              setSortSelected(itemValue);
            }}
          >
            <Picker.Item label="Recently posted" value="posttime" />
            <Picker.Item label="Meet-up Time" value="meetuptime" />
          </Picker>
        </View>
      </View>
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

      {/* <View style={modalStyles.modalView}> */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
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
          {/* <TouchableOpacity
            style={{width: '100%', height: 70, margin: 0}}
            onPressOut={() => {
              Alert.alert("No changes made");
              setModalVisible(!modalVisible);
              setButtonVisible(true);
            }}
          /> */}

          <View style={modalStyles.modalView}>
            <TextInput
              style={globalStyles.input}
              placeholder={"Title..."}
              value={postTitle}
              onChangeText={(text) => setTitle(text)}
            />
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
              <Text style={modalStyles.textStyle}>Post</Text>
            </Pressable>
          </View>
        </Modal>
      </KeyboardAvoidingView>
      {/* </View> */}

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
