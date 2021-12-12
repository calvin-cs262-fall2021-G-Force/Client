import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
import { Ionicons } from "@expo/vector-icons";
import { userStyles } from "../styles/user";
import { postStyles } from "../styles/post";

export default function PosterScreen({ route, navigation }) {
  const [student, setStudent] = useState(route.params.poster);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isStudentPostLoading, setStudentPostLoading] = useState(true);
  const [postItems, setPostItems] = useState();

  const getStudentPosts = async () => {
    try {
      const response = await fetch(
        "https://knight-bites.herokuapp.com/studentposts/" + String(student)
      );
      const json = await response.json();
      setPostItems(json);
    } catch (error) {
      console.error(error);
    } finally {
      setStudentPostLoading(false);
    }
  };

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
    let mounted = true;

    if (mounted) {
      getStudent();
      getStudentPosts();
    }

    return function cleanup() {
      mounted = false;
    };
  }, []);

  return (
    <View>
      <View style={{ margin: 20 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={userStyles.user}>
            <View style={userStyles.upper}>
              <View
                style={[globalStyles.profileIcon, { width: 90, height: 90 }]}
              >
                <Ionicons name={data.icon} size={60} color="#000" />
              </View>
              <View style={userStyles.details}>
                <Text style={userStyles.name}>
                  {data.firstname} {data.lastname}
                </Text>
                <Text style={userStyles.detailstext}>{data.collegeyear}</Text>
              </View>
            </View>
            <View style={userStyles.lower}>
              <Text style={userStyles.bioheading}>Bio: </Text>
              <Text style={userStyles.biodetails}>{data.bio}</Text>
            </View>
          </View>
        )}
      </View>
      {isStudentPostLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              paddingLeft: 25,
              paddingBottom: 10,
            }}
          >
            {data.firstname}'s Posts
          </Text>
          {postItems.map((item, index) => {
            return (
              <TouchableOpacity
                style={[postStyles.item, { paddingHorizontal: 18 }]}
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
  );
}
