import React, { useContext, useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { profileStyles } from "../styles/profile";
import profilePic from "../assets/demo-profile.png";
import { globalStyles } from "../styles/global";
import { userStyles } from "../styles/poster";
import { UserContext } from "../util/GlobalStateManager";
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen({ navigation }) {
  const { user } = useContext(UserContext);
  const [student,setStudent] =useState([]);
  const [isLoading, setLoading] = useState(true);

  const getUser = async () => {
    try {
      const response = await fetch('https://knight-bites.herokuapp.com/students/' + user);
      const json = await response.json();
      setStudent(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUser();
  }, []);
  //Shows profile
<<<<<<< HEAD
  return(
    <View style={globalStyles.screen}>     
        <Image source={profilePic} style={{width:50, height:55}}/>
            <View style={profileStyles.text}>
                <Text style={profileStyles.text}>Name: John Calvin</Text>
                <Text style={profileStyles.text}>Year: Sophomore</Text>
                <Text style={profileStyles.text}>Bio: Hi all, I love spicy food!</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Discount')}>
                <Text style={profileStyles.discountText}>Student Discount Card</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Restaurants')}>
                <Text style={profileStyles.discountText}>Restaurant</Text>
            </TouchableOpacity>
    </View>
=======
  return (
    // <View style={globalStyles.screen}>
    //   <Image source={profilePic} style={{ width: 50, height: 55 }} />
    //   <View style={profileStyles.text}>
    //     <Text style={profileStyles.text}>{user}</Text>
    //     <Text style={profileStyles.text}>Year: Sophomore</Text>
    //     <Text style={profileStyles.text}>Bio: Hi all, I love spicy food!</Text>
    //   </View>
    //   <TouchableOpacity onPress={() => navigation.navigate("Discount")}>
    //     <Text style={profileStyles.discountText}>Student Discount Card</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity onPress={() => navigation.navigate("Restaurant")}>
    //     <Text style={profileStyles.discountText}>Restaurant</Text>
    //   </TouchableOpacity>
    // </View>
      <View>
          <View style={{margin:20}}>
            {isLoading ? <ActivityIndicator /> : (
              <View style={userStyles.user}>
                <View style={userStyles.upper}>
                  <View style={[globalStyles.profileIcon,{width:90,height:90}]}>
                      <Ionicons
                      name= {student.icon}
                      size={60}
                      color="#000"
                    />
                  </View>
                  <View style={userStyles.details}>
                    <Text style= {userStyles.name}>{student.firstname} {student.lastname}</Text>
                    <Text style= {userStyles.detailstext}>{student.collegeyear}</Text>
                    <TouchableOpacity style={userStyles.editProfile}>
                      <Text>Edit Profile</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={userStyles.lower}>
                    <Text style= {userStyles.bioheading}>Bio:  </Text>
                    <Text style= {userStyles.biodetails}>{student.bio}</Text>
                </View>
              </View>
            )}
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Discount")}>
          <Text style={profileStyles.discountText}>Student Discount Card</Text>
          </TouchableOpacity>
        </View>      
>>>>>>> 538e8bb9a85cba1bfcae4bf07060cfad66e880da
  );
}
