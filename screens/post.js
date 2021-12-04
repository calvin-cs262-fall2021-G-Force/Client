import React, { useState, useEffect } from 'react';
import { Modal, Alert, ScrollView, Text, View, TouchableOpacity, FlatList, ActivityIndicator, Pressable, TextComponent } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment'
import { Button } from 'react-native-paper';

import { postDetailsStyles } from "../styles/postDetails";
import { modalStyles } from '../styles/modal';
import { postStyles } from '../styles/post';


export default function PostScreen({ route, navigation }) {
  const poster = route.params.item.studentemail;
  const user = route.params.user;
  const postid = route.params.item.id;
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [attendeeVisible, setAttendeeVisible] =useState(false);
  const [attendees, setAttendees] = useState([]);
  const [isModalVisible, setModalVisible] =useState(false);

  
  const getStudent = async () => {
    try {
      const response = await fetch('https://knight-bites.herokuapp.com/students/' + String(poster));
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const getAttendees = async () => {
    try {
      const response = await fetch('https://knight-bites.herokuapp.com/attendees/'+ postid); //postid
      const json = await response.json();
      setAttendees(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getStudent();
    getAttendees();
  }, []);

  const addAttendee = async () =>{
    await fetch('https://knight-bites.herokuapp.com/attendees/' + postid, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'postid': postid ,
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
        <TouchableOpacity onPress={() => navigation.navigate('Poster', { poster })} style={{flexDirection:'row'}}>
          <Ionicons
            name={iconName}
            size={40}
            color="#8C2131"
          />
        <Text style={postDetailsStyles.poster}>{data.firstname} {data.lastname}</Text>
        </TouchableOpacity>
        <Text style={postDetailsStyles.dateText}>            {moment(route.params.item.posttime).format('MMMM D, YYYY [at] h:mm a')}</Text>

      <View style={postDetailsStyles.detailsWrapper}>
        <Text style={postDetailsStyles.title}>{route.params.item.posttitle}{'\n'}</Text>
        <Text style={postDetailsStyles.body}>{route.params.item.post}{'\n'}</Text>
      </View>
        <TouchableOpacity
          onPress={() => {
            Alert.alert("Signed up for event!");
            addAttendee();
          }} 
          style={postDetailsStyles.signupButton}
        >
          <Text
            style={postDetailsStyles.signupButtonText}
          >
            Attend
          </Text>
          </TouchableOpacity>
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