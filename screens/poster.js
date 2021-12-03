import React, { useState, useEffect } from 'react';
import { View, Text,ActivityIndicator, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import { Ionicons } from '@expo/vector-icons';

export default function PosterScreen({ route, navigation}) {
    const [student, setStudent] = useState(route.params.poster)
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getStudent = async () => {
        try {
          const response = await fetch('https://knight-bites.herokuapp.com/students/' + String(student));
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
    return(
        <View style={globalStyles.screen}>
          {isLoading ? <ActivityIndicator /> : (
              <View>
                  <Ionicons
                  name= {iconName}
                  size={40}
                  color="#8C2131"
                />
                  <Text style= {globalStyles.paragraphs}>Name: {data.firstname} {data.lastname}</Text>
                  <Text>Year: {data.year}</Text>
                  <Text style= {globalStyles.paragraphs}>Bio: {data.bio}</Text>
              </View>
            
          )}
        </View>      
    );
  };