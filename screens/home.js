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
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
<<<<<<< HEAD
import { Picker } from '@react-native-picker/picker';
import moment from "moment";
import DateTimePicker from '@react-native-community/datetimepicker';
=======
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
>>>>>>> 05439144000c9c463a06e12fbccd362bb706ba9c
import { auth } from "../firebase";
import colors from "../assets/colors";
import Post from "../components/postComponent";
import { globalStyles } from "../styles/global";
import { postStyles } from "../styles/post";
import { homeModalStyles } from "../styles/homeModal";
import { UserContext } from "../util/GlobalStateManager";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function HomeScreen({ route, navigation }) {
  // Modal Variables
  const [isLoading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [isButtonVisible, setButtonVisible] = useState(true);
  // Post Variables
  const [postTitle, setTitle] = useState(null);
  const [postText, setText] = useState(null);
  const [postItems, setPostItems] = useState([]);

  const [refreshing, setRefreshing] = useState(false);
  //Picker Variables
  const [selectedValue, setSelectedValue] = useState("1");
  const [restaurants, setRestaurants] = useState([]);

  const { user } = useContext(UserContext);
  const { readState, setGlobalRead } = useContext(UserContext);
  const [sortSelected, setSortSelected] = useState("posttime");
  
  // Date Time Picker Variables
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const userEmail = auth.currentUser?.email;

  //Used to get time of posting from the Database
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
  };

  //Used to get meetup time from Database
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
  };

  //Gets a list of restaurants from the database
  const getRestaurants = async () => {
    try {
      const response = await fetch(
        "https://knight-bites.herokuapp.com/restaurants"
      );
      const json = await response.json();
      setRestaurants(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  //Creates a new post which is sent to the database with distinct variables
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
        meetuptime: date,
        restaurantid: selectedValue,
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

  //Various functions associated with showing the date time picker and altering its mode
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  useEffect(() => {
    getRestaurants();
  }, []);

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

  //Calls the POST operation and resets post variables, refreshes post screen and sends and alert
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
        <Text
          style={{
            marginTop: 20,
            fontWeight: "bold",
            fontSize: 16,
            color: "black",
            fontWeight: "bold",
          }}
        >
          Sort By:{" "}
        </Text>
        <View
          style={{
            marginTop: 10,
            backgroundColor: colors.gold,
            borderRadius: 10,
            height: 40,
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          {/* Allows for sorting by different values */}
          <Picker
            selectedValue={sortSelected}
            style={{ height: 50, width: 178, color: "black" }}
            onValueChange={(itemValue, itemIndex) => {
              setSortSelected(itemValue);
              setGlobalRead(readState + 1);
            }}
          >
            <Picker.Item label="Recently posted" value="posttime" />
            <Picker.Item label="Meet-up Time" value="meetuptime" />
          </Picker>
        </View>
      </View>
      <View style={globalStyles.postsWrapper}>
        <View style={globalStyles.items}>
          {/* Displays all posts after loading them from the database */}
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

      {/* A Modal used to create a post that appears after the create post button is pressed */}
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
          onPress={() => {
            setModalVisible(!modalVisible);
            setButtonVisible(true);
            Alert.alert("No changes made");
          }}
        >
          <TouchableOpacity style={homeModalStyles.modalView} activeOpacity={1}>
            <KeyboardAwareScrollView>
              <Text style={homeModalStyles.heading}>New Post</Text>
              <View>
                {/* Allows you to change the postTitle component for creating a post */}
                <Text style={homeModalStyles.text}>Title:</Text>
                <TextInput
                  style={homeModalStyles.textinput}
                  placeholder={"Title..."}
                  value={postTitle}
                  onChangeText={(text) => setTitle(text)}
                />
              </View>
              <View>
                {/* Allows you to select the meet time and date for a post */}
                <Text style={homeModalStyles.text}>
                  Select meet up date and time:
                </Text>
                <View style={{ flexDirection: "row", paddingRight: 20 }}>
                  <TouchableOpacity
                    onPress={showDatepicker}
                    style={homeModalStyles.datetime}
                  >
                    <Ionicons name="calendar" size={43} color={"#fff"} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={showTimepicker}
                    style={homeModalStyles.datetime}
                  >
                    <Ionicons name="time-outline" size={43} color={"#fff"} />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text style={homeModalStyles.text}>Choose Restaurant:</Text>
                <View style={homeModalStyles.picker}>
                  {/* A Picker that allows you to select from the list of restaurants from the database */}
                  <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedValue(itemValue)
                    }
                  >
                    {restaurants.map((item, index) => {
                      return (
                        <Picker.Item
                          label={item.restaurantname}
                          value={item.restaurantid}
                          key={index}
                        />
                      );
                    })}
                  </Picker>
                </View>
              </View>
              <View>
                {/* Allows you to change the postText component for creating a post */}
                <Text style={homeModalStyles.text}>
                  Details for the meet up:
                </Text>
                <TextInput
                  style={[homeModalStyles.textinput, { height: 70 }]}
                  placeholder={"Details for the event..."}
                  value={postText}
                  onChangeText={(text) => setText(text)}
                  multiline={true}
                />
              </View>
            </KeyboardAwareScrollView>
            {/* Creates a new post and closes the modal */}
            <TouchableOpacity
              style={homeModalStyles.button}
              onPress={() => {
                setModalVisible(!modalVisible);
                setButtonVisible(true);
                handleAddPost();
              }}
            >
              <Text style={homeModalStyles.buttontext}>Add Post</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
      {/* Opens up the Modal so a post can be created */}
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
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}
