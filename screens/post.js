import React, { useState, useEffect } from 'react';
import { Alert, Text, View, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment'
import { Button } from 'react-native-paper';

import { globalStyles } from '../styles/global';
import { postStyles } from '../styles/post';

export default function PostScreen({ route, navigation}) {
  const poster = route.params.item.studentemail;
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

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

    useEffect(() => {
      getStudent();
    }, []);

    const iconName = data.icon;

  return (
    <View style={globalStyles.screen}>
      <View style= {postStyles.poster}>
        <TouchableOpacity onPress= {() => navigation.navigate('Poster', {poster})}>
          <Ionicons
              name= {iconName}
              size={30} 
              color="#8C2131"
          />
        </TouchableOpacity>
        <Text>{route.params.item.studentemail}</Text>
      </View>
      <View style={globalStyles.paragraphs}>
        <Text style={globalStyles.sectionTitle}>{route.params.item.posttitle}{'\n'}</Text>
        <Text style={postStyles.itemText}>{route.params.item.post}{'\n'}</Text>
        <Text style={postStyles.itemText}>{moment(route.params.item.posttime).format('MMM Do YYYY, h:mm a')}</Text>

        <Button
          onPress={() => {
            Alert.alert("Signed up for event!");
          }}
        >
          <Text
            style={{
              color: '#8C2131'
            }}
          >
            Sign up
          </Text>
        </Button>
      </View>
    </View>
  );
}