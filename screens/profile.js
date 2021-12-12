import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Alert,
} from "react-native";
import { globalStyles } from "../styles/global";
import { userStyles } from "../styles/user";
import { UserContext } from "../util/GlobalStateManager";
import { auth } from "../firebase";
import { Ionicons } from "@expo/vector-icons";
import colors from "../assets/colors";
import { postStyles } from "../styles/post";

export default function ProfileScreen({ navigation }) {
  const { readState, setGlobalRead, readProfile, setReadProfile } =
    useContext(UserContext);
  const [student, setStudent] = useState([]);
  const [isStudentPostLoading, setStudentPostLoading] = useState(true);
  const [isLoading, setLoading] = useState(true);
  const userEmail = auth.currentUser?.email;
  const [postItems, setPostItems] = useState([]);

  const getStudentPosts = async () => {
    try {
      const response = await fetch(
        "https://knight-bites.herokuapp.com/studentposts/" + userEmail
      );
      const json = await response.json();
      setPostItems(json);
    } catch (error) {
      console.error(error);
    } finally {
      setStudentPostLoading(false);
    }
  };

  const getUser = async () => {
    try {
      const response = await fetch(
        "https://knight-bites.herokuapp.com/students/" + userEmail
      );
      const json = await response.json();
      setStudent(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getUser();
      getStudentPosts();
    }

    return function cleanup() {
      mounted = false;
    };
  }, [readProfile]);

  useEffect(() => {
    getStudentPosts();
  }, [readState]);

  const handleSignOut = () => {
    console.log("\nsigned out");
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  const showConfirmDialog = () => {
    return Alert.alert(
      "",
      "Are you sure you want to sign out?",
      [
        // The "Yes" button
        // Deletes post when pressed
        {
          text: "Yes",
          onPress: () => {
            handleSignOut();
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

  //Shows profile
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
                <Ionicons name={student.icon} size={60} color="#000" />
              </View>
              <View style={userStyles.details}>
                <Text style={userStyles.name}>
                  {student.firstname} {student.lastname}
                </Text>
                <Text style={userStyles.collegeyear}>
                  {student.collegeyear}
                </Text>
                <TouchableOpacity
                  style={userStyles.editProfile}
                  onPress={() =>
                    navigation.navigate("Edit Profile", { student })
                  }
                >
                  <Text style={userStyles.editProfileText}>Edit Profile</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  paddingRight: 20,
                  paddingTop: 10,
                  // backgroundColor: colors.maroon,
                  height: 40,
                  width: 60,
                }}
                onPress={() => showConfirmDialog()}
              >
                <Ionicons
                  name="log-out-outline"
                  size={30}
                  color={colors.maroon}
                />
              </TouchableOpacity>
            </View>
            <View style={userStyles.lower}>
              <Text style={userStyles.bioheading}>Bio: </Text>
              <Text style={userStyles.biodetails}>{student.bio}</Text>
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
            Your Posts
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
