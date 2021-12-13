import React, { useContext, useState, useEffect } from "react";
import {
  Alert,
  ScrollView,
  Modal,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  useColorScheme,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import moment from "moment";

import { attendeesModalStyles } from "../styles/attendeesModal";
import { postDetailsStyles } from "../styles/postDetails";
import { globalStyles } from "../styles/global";
import { UserContext } from "../util/GlobalStateManager";
import { auth } from "../firebase";
import colors from "../assets/colors";
import { postStyles } from "../styles/post";

export default function PostScreen({ route, navigation }) {
  const poster = route.params.item.studentemail;
  const iconName = route.params.item.icon;
  const userEmail = auth.currentUser?.email;
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [attendeeVisible, setAttendeeVisible] = useState(false);
  const [attendees, setAttendees] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [readAttendees, setReadAttendees] = useState(0);
  const [isAttending, setIsAttending] = useState();
  const { readState, setGlobalRead } = useContext(UserContext);

  const getStudent = async () => {
    try {
      const response = await fetch(
        "https://knight-bites.herokuapp.com/students/" + String(poster)
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getIsAttending = async () => {
    try {
      const response = await fetch(
        "https://knight-bites.herokuapp.com/attendees/" +
          route.params.item.id +
          "/" +
          route.params.item.studentemail
      ); //postid
      const json = await response.json();
      setIsAttending(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getAttendees = async () => {
    try {
      const response = await fetch(
        "https://knight-bites.herokuapp.com/attendees/" + route.params.item.id
      ); //postid
      const json = await response.json();
      setAttendees(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addAttendee = async () => {
    await fetch(
      "https://knight-bites.herokuapp.com/attendees/" + route.params.item.id,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postid: route.params.item.id,
          studentemail: userEmail,
        }),
      }
    )
      .then((responseJson) => {
        console.log(
          "\nadd aattendee response object:",
          JSON.stringify(responseJson)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deletePosts = async () => {
    fetch(
      "https://knight-bites.herokuapp.com/posts/" +
        String(route.params.item.id),
      {
        method: "DELETE",
      }
    )
      .then((responseJson) => {
        console.log("\ndelete response object:", JSON.stringify(responseJson));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeletePost = () => {
    deletePosts();
    setGlobalRead(readState + 1);
    navigation.navigate("Home");
    Alert.alert("Post successfully deleted");
  };

  const showConfirmDialog = () => {
    return Alert.alert(
      "Delete post",
      "Are you sure you want to delete this post?",
      [
        // The "Yes" button
        // Deletes post when pressed
        {
          text: "Yes",
          onPress: () => {
            handleDeletePost();
            // setShowBox(false);
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "No",
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  // useEffect(() => {
  //   let mounted = true;
  //   if (mounted) {
  //     getStudent();
  //   }
  //   return function cleanup() {
  //     mounted = false;
  //   };
  // }, []);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getStudent();
      getAttendees();
      getIsAttending();
    }
    return function cleanup() {
      mounted = false;
    };
  }, [readAttendees]);

  return (
    <View style={postDetailsStyles.screen}>
      <View style={postDetailsStyles.allWrapper}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Poster", { poster })}
          >
            <View style={[globalStyles.profileIcon, { width: 40, height: 40 }]}>
              <Ionicons name={iconName} size={28} color="#000" />
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <View style={{ paddingLeft: 20 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Poster", { poster })}
              >
                <Text style={postDetailsStyles.poster}>
                  {route.params.item.firstname} {route.params.item.lastname}
                </Text>
              </TouchableOpacity>
              <Text style={postDetailsStyles.dateText}>
                {" "}
                {moment(route.params.item.posttime).format(
                  "MMMM D, YYYY [at] h:mm a"
                )}
              </Text>
            </View>
            {userEmail === route.params.item.email && (
              <View>
                <TouchableOpacity onPress={() => showConfirmDialog()}>
                  <Feather name="trash-2" size={32} color={colors.maroon} />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        <View style={postDetailsStyles.detailsWrapper}>
          <Text style={postDetailsStyles.title}>
            {route.params.item.posttitle}
            {"\n"}
          </Text>
          <Text style={postDetailsStyles.contentDetailsText}>
            Venue: {route.params.item.restaurantname}
            {"\n"}
          </Text>

          <Text style={postDetailsStyles.contentDetailsText}>
            Meetup time:{" "}
            {moment(route.params.item.meetuptime).format(
              "MMMM D, YYYY [at] h:mma"
            )}
            {"\n"}
          </Text>
          <Text style={[postDetailsStyles.contentDetailsText, {}]}>
            Details:
          </Text>
          <Text style={postDetailsStyles.contentDetailsText}>
            {route.params.item.post}
            {"\n"}
          </Text>
          <Text style={postDetailsStyles.dateText}>
                {" Meeting Details: \n "}
                {moment(route.params.item.meetuptime).format(
                  "MMMM D, YYYY [at] h:mm a"
                )}
                {"\n at "}
                {route.params.item.restaurantname}
              </Text>
        </View>

        {userEmail !== route.params.item.studentemail && (
          <View>
            <TouchableOpacity
              onPress={() => {
                Alert.alert("Signed up for event!");
                addAttendee();
                setReadAttendees(readAttendees + 1);
              }}
              style={postDetailsStyles.signupButton}
            >
              <Text style={postDetailsStyles.signupButtonText}>Attend</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={postDetailsStyles.signupButtonText}>
          <TouchableOpacity
            onPress={() => {
              setAttendeeVisible(true);
              setModalVisible(true);
              setReadAttendees(readAttendees + 1);
            }}
            style={{
              backgroundColor: "#8C2131",
              width: 150,
              // alignContent:'center',
              // alignItems:'center',
              justifyContent: "center",
              height: 25,
              padding: 10,
              marginTop: 20,
              borderRadius: 10,
            }}
          >
            <Text style={attendeesModalStyles.who}>Who's going?</Text>
          </TouchableOpacity>
        </View>

        {/* To show the names of attendees for each event */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            setModalVisible(!isModalVisible);
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
              setAttendeeVisible(false);
            }}
          >
            {attendeeVisible ? (
              <TouchableOpacity
                style={attendeesModalStyles.modalView}
                activeOpacity={1}
                onPress={() => setReadAttendees(readAttendees + 1)}
              >
                <Text style={attendeesModalStyles.heading}>Who's going? </Text>
                <View style={attendeesModalStyles.attendees}>
                  {isLoading ? (
                    <ActivityIndicator />
                  ) : (
                    <ScrollView>
                      {attendees.map((item, index) => {
                        return (
                          <Text key={index} style={attendeesModalStyles.body}>
                            {item.firstname} {item.lastname}
                          </Text>
                        );
                      })}
                    </ScrollView>
                  )}
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                    setAttendeeVisible(false);
                  }}
                  style={attendeesModalStyles.button}
                >
                  <Text style={attendeesModalStyles.buttontext}>OK</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ) : null}
          </TouchableOpacity>
        </Modal>
      </View>
    </View>
  );
}
