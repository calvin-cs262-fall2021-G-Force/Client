import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import profilePic from "../assets/demo-profile.png";
import { globalStyles } from "../styles/global";
import { userStyles } from "../styles/user";
import { UserContext } from "../util/GlobalStateManager";
import { auth } from "../firebase";
import { Ionicons } from "@expo/vector-icons";
import colors from "../assets/colors";
import { postStyles } from "../styles/post";

export default function ProfileScreen({ navigation }) {
  //Defines the student for whom the screen represents
  const { readProfile, setReadProfile } = useContext(UserContext);
  const [student, setStudent] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const userEmail = auth.currentUser?.email;
  const [postItems, setPostItems] = useState([]);

  //Gets all posts that the user has made from the webservice
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
      setLoading(false);
    }
  };

  //Gets user details from the webservice
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

  //Enable signing out from your profile, then navigating back to Login
  const handleSignOut = () => {
    console.log("\nsigned out");
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
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
                {/* Allows you to edit your profile by redirecting you to an edit page */}
                <TouchableOpacity style={userStyles.editProfile} onPress={() => navigation.navigate("Edit Profile", { student })}>
                  <Text style={userStyles.editProfileText}>Edit Profile</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={{
                paddingRight: 20,
                paddingTop: 10,
                // backgroundColor: colors.maroon,
                height: 40,
                width: 60
              }} onPress={()=>handleSignOut()}>
                <Ionicons name="log-out-outline" size={30} color={colors.maroon} />
              </TouchableOpacity>
            </View>
            <View style={userStyles.lower}>
              <Text style={userStyles.bioheading}>Bio: </Text>
              <Text style={userStyles.biodetails}>{student.bio}</Text>
            </View>
          </View>
        )}
      </View>
      {/* Returns a list of posts that this user has made*/}
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
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
