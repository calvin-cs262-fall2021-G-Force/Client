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
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";

import { attendeesModalStyles } from "../styles/attendeesModal";
import { postDetailsStyles } from "../styles/postDetails";
import { globalStyles } from "../styles/global";
import { UserContext } from "../util/GlobalStateManager";
import { auth } from "../firebase";

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

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getStudent();
    }

    return function cleanup() {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getAttendees();
    }

    return function cleanup() {
      mounted = false;
    };
  }, [readAttendees]);

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
        </View>
        <View style={postDetailsStyles.detailsWrapper}>
          <Text style={postDetailsStyles.title}>
            {route.params.item.posttitle}
            {"\n"}
          </Text>
          {/* <Text style={postDetailsStyles.title}>
            {route.params.item.restaurantname}
            {"\n"}
          </Text> */}
          <Text style={postDetailsStyles.body}>
            {route.params.item.post}
            {"\n"}
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
            }}
            style={{
              backgroundColor:'#8C2131', 
              width:150,
              // alignContent:'center', 
              // alignItems:'center',
              justifyContent:'center',
              height:20,
              padding:10,
              marginTop:20,
              borderRadius:10
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
          <TouchableOpacity onPress={() => {
            setModalVisible(false);
            setAttendeeVisible(false);
          }}>
          {attendeeVisible ? (
            <TouchableOpacity style={attendeesModalStyles.modalView} activeOpacity={1}>
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
