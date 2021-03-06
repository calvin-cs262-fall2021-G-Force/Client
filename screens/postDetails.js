import React, { useContext, useState, useEffect } from "react";
import {
  Alert,
  ScrollView,
  Modal,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import moment from "moment";

import { attendeesModalStyles } from "../styles/attendeesModal";
import { postDetailsStyles } from "../styles/postDetails";
import { globalStyles } from "../styles/global";
import { UserContext } from "../util/GlobalStateManager";
import { auth } from "../firebase";
import colors from "../assets/colors";

export default function PostScreen({ route, navigation }) {
  //Variables for viewing attendee list and defining attendeees
  const [attendeeVisible, setAttendeeVisible] = useState(false);
  const [attendees, setAttendees] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [readAttendees, setReadAttendees] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { readState, setGlobalRead } = useContext(UserContext);

  //Variables for rendering details about the poster
  const poster = route.params.item.studentemail;
  const iconName = route.params.item.icon;

  //Defines the users auth token
  const userEmail = auth.currentUser?.email;

  //Deprecated
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

  //Get a list of all those who are set to attend an event via the webservice
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

  //Create you as an attendee by POST ing it to the webservice
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

  //Delete the post from the webserver and home page
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

  //Deletes the post and navigates you back to the home page
  const handleDeletePost = () => {
    deletePosts();
    setGlobalRead(readState + 1);
    navigation.navigate("Home");
    Alert.alert("Post successfully deleted");
  };

  //Confirmation Dialog to avoid accidental deletions
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

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getStudent();
      getAttendees();
      // getIsAttending();
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
        </View>

        {userEmail !== route.params.item.studentemail && (
          <View>
            {/* Button that allows for you to sign up for an event*/}
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
          {/* Button to view a Modal listing all current attendees of an event */}
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

        {/* Modal to show the names of attendees for each event */}
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
