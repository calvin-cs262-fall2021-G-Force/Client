import React, {useContext, useState, useEffect } from "react";
import { Alert,ScrollView, Modal,Text, View, TouchableOpacity,ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";

import { modalStyles } from '../styles/modal';
import { postDetailsStyles } from "../styles/postDetails";
import { globalStyles } from "../styles/global";
import { UserContext } from "../util/GlobalStateManager";

export default function PostScreen({ route, navigation }) {
  const poster = route.params.item.studentemail;
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [attendeeVisible, setAttendeeVisible] =useState(false);
  const [attendees, setAttendees] = useState([]);
  const [isModalVisible, setModalVisible] =useState(false);
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
    getStudent();
    
  }, []);

  useEffect(() => {
    getAttendees();
  }, [readAttendees]);

  const getAttendees = async () => {
    try {
      const response = await fetch('https://knight-bites.herokuapp.com/attendees/'+ route.params.item.id); //postid
      const json = await response.json();
      setAttendees(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const addAttendee = async () =>{
    await fetch('https://knight-bites.herokuapp.com/attendees/' + route.params.item.id, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'postid': route.params.item.id,
        'studentemail': user
      })
    })
    .then((responseJson) => {
      console.log('response object:' , JSON.stringify(responseJson))
    })
    .catch((error) => {
      console.error(error);
    })
  };

  const iconName = data.icon;

  return (
    <View style={postDetailsStyles.screen}>
      <View style={postDetailsStyles.allWrapper}>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Poster", { poster })}
        >
          <View style= {[globalStyles.profileIcon,{width:40,height:40}]}>
            <Ionicons 
                name={iconName} 
                size={28} 
                color="#000" />
          </View>
        </TouchableOpacity>
        <View style={{paddingLeft:20}}>
          <TouchableOpacity onPress={() => navigation.navigate("Poster", { poster })}>
            <Text style={postDetailsStyles.poster}>
              {data.firstname} {data.lastname}
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
          <Text style={postDetailsStyles.body}>
            {route.params.item.post}
            {"\n"}
          </Text>
        </View>
        {user !==route.params.item.studentemail && (
        <View>
        <TouchableOpacity
          onPress={() => {
            Alert.alert("Signed up for event!");
            addAttendee();
            setReadAttendees(readAttendees+1);
          }}
          style={postDetailsStyles.signupButton}
        >
          <Text style={postDetailsStyles.signupButtonText}>Attend</Text>
        </TouchableOpacity>
        </View>
        )}
        {/* {user === props.email && (
              <View>
                <TouchableOpacity onPress={() => showConfirmDialog()}>
                  <Feather name="trash-2" size={34} color="gray" />
                </TouchableOpacity>
              </View>
            )} */}

        <View style={postDetailsStyles.signupButtonText}>
          <TouchableOpacity onPress={() => {setAttendeeVisible(true); setModalVisible(true)}}>
            <Text>{'\n\n'}Who's going?</Text>
          </TouchableOpacity>
        </View>
      
      {/* To show the names of attendees for each event */}
      <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            Alert.alert("No changes made");
            setModalVisible(!isModalVisible);
            //setButtonVisible(true);
          }}>
          {attendeeVisible ?
          <View style={modalStyles.centeredView}>
            <View style={modalStyles.modalView}>
              <Text style={postDetailsStyles.title}>Who's going?{'\n\n'}</Text>
            {isLoading ? <ActivityIndicator />:(
                <ScrollView >
                {
                  attendees.map((item, index) => {
                    return (
                      <Text key={index} style= {postDetailsStyles.body}>{item.firstname} {item.lastname}</Text>
                    )
                  })
                }
                </ScrollView>
            )}
            <TouchableOpacity onPress={()=>{setModalVisible(false); setAttendeeVisible(false)}}>
              <Text style= {{fontSize:30}}>OK</Text>
            </TouchableOpacity>
            </View>
          </View>
          :null}
        </Modal>
        </View>
    </View>
  );
}
