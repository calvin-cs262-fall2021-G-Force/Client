import React, { useContext, useState, useEffect } from "react";
import {
    Image,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Alert,
    Picker,
} from "react-native";
import { auth } from "../firebase";
import { editProfileStyles } from "../styles/editProfile";
import { UserContext } from "../util/GlobalStateManager";
import { globalStyles } from "../styles/global";

export default function EditProfileScreen({ route, navigation }) {
    const {readProfile, setReadProfile} = useContext(UserContext)
    const userEmail = auth.currentUser?.email;
    const [firstName, setFirstName] = useState(route.params.student.firstname);
    const [lastName, setLastName] = useState(route.params.student.lastname);
    const [collegeYear, setCollegeYear] = useState(route.params.student.collegeyear);
    const [bio, setBio] = useState(route.params.student.bio);

    const makeChange = async () => {
        await fetch("https://knight-bites.herokuapp.com/students/" + String(userEmail), {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: firstName,
            lastname: lastName,
            collegeyear: collegeYear,
            bio: bio,
            icon: "skull",
          }),
        })
          .then((responseJson) => {
            console.log(
              "\ncreateStudent response object:",
              JSON.stringify(responseJson)
            );
          })
          .catch((error) => {
            console.error(error);
          });
      };
    return (
        <View style={globalStyles.screen}>
            {/* <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={globalStyles.loginTextBox}
            > */}
            <View>
                <Text style={editProfileStyles.heading}>Edit Profile</Text>
            </View>
            <View style={editProfileStyles.box}>
                <Text style={editProfileStyles.name}>First Name:</Text>
                <TextInput
                    style={globalStyles.loginInput}
                    placeholder="First Name"
                    onChangeText={(text) => setFirstName(text)}
                    value={firstName}
                />
            </View>
            <View style={editProfileStyles.box}>
                <Text style={editProfileStyles.name}>Last Name:</Text>
                <TextInput
                    style={globalStyles.loginInput}
                    placeholder="Last Name"
                    onChangeText={(text) => setLastName(text)}
                    value={lastName}
                />
            </View>

            <View style={editProfileStyles.box}>
                <Text style={editProfileStyles.name}>Year in College:</Text>
                <View
                    style={[
                        globalStyles.loginInput,
                        { height: 60, justifyContent: "center" },
                    ]}
                >

                    <Picker
                        selectedValue={collegeYear}
                        // style={{ height: 50, width: 178 }}
                        onValueChange={(itemValue, itemIndex) => {
                            setCollegeYear(itemValue);
                        }}
                        style={{ height: 80, width: 220 }}
                    >
                        <Picker.Item label="Freshman" value="Freshman" />
                        <Picker.Item label="Sophomore" value="Sophomore" />
                        <Picker.Item label="Junior" value="Junior" />
                        <Picker.Item label="Senior" value="Senior" />
                        <Picker.Item label="Super Senior" value="Super Senior" />
                    </Picker>
                </View>
            </View>
            <View style={editProfileStyles.box}>

                <Text style={editProfileStyles.name}>Your Bio:</Text>
                <TextInput
                    style={[globalStyles.loginInput, { alignContent: 'flex-start' }]}
                    placeholder="Bio"
                    onChangeText={(text) => setBio(text)}
                    value={bio}
                    multiline={true}
                />
            </View>
            {/* </KeyboardAvoidingView> */}
            <TouchableOpacity style={editProfileStyles.button} onPress={() => {
                makeChange();
                Alert.alert(" Changes saved!");
                navigation.goBack();
                setReadProfile(readProfile+1);
                }}>
                <Text style={editProfileStyles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>

    );
}