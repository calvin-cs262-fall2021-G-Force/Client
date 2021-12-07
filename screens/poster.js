import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { globalStyles } from "../styles/global";
import { Ionicons } from "@expo/vector-icons";
import { posterStyles } from "../styles/poster";

export default function PosterScreen({ route, navigation }) {
  const [student, setStudent] = useState(route.params.poster);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getStudent = async () => {
    try {
      const response = await fetch(
        "https://knight-bites.herokuapp.com/students/" + String(student)
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
  const iconName = data.icon;
  return (
    <View style={globalStyles.screen}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <View style={posterStyles.profileIcon}>
            <Ionicons name={iconName} size={60} color="#8C2131" />
          </View>
          <View style={posterStyles.user}>
            <Text style={posterStyles.name}>
              {data.firstname} {data.lastname}
            </Text>
            <Text style={posterStyles.details}>{data.collegeyear}</Text>
            <Text style={posterStyles.name}>{"\n"}Bio: </Text>
            <Text style={posterStyles.bio}>{data.bio}</Text>
          </View>
        </View>
      )}
    </View>
  );
}
