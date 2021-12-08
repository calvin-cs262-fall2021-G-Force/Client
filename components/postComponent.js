import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { postStyles } from "../styles/post";
import { globalStyles } from "../styles/global";
import { Ionicons, Feather, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import moment from "moment";

import { UserContext } from "../util/GlobalStateManager";

export default Post = (props) => {
  const navigation = useNavigation();
  const email = props.studentemail;
  const { user, readState, setGlobalRead } = useContext(UserContext);
  const [showBox, setShowBox] = useState(true);

  const deletePosts = async () => {
    fetch("https://knight-bites.herokuapp.com/posts/" + String(props.id), {
      method: "DELETE",
    })
      .then((responseJson) => {
        console.log("\ndelete response object:", JSON.stringify(responseJson));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeletePost = () => {
    deletePosts();
    setGlobalRead(readState + 1);
  };

  const showConfirmDialog = () => {
    return Alert.alert(
      "Delete post",
      "Are you sure you want to delete this post?",
      [
        // The "Yes" button
        // Deletes post when pressed
        {
          text: "Yes",
          onPress: () => {
            handleDeletePost();
            setShowBox(false);
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

  return (
    <View>
      <View style={postStyles.box}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <View style={postStyles.left}>
              <TouchableOpacity style={[globalStyles.profileIcon,{width:40, height:40}]}
                onPress={() => navigation.navigate("Poster", { poster: email })}
              >
                <Ionicons name={props.icon} size={28} color="black" />
              </TouchableOpacity>
            </View>
            {user === props.email && (
              <View>
                <TouchableOpacity onPress={() => showConfirmDialog()}>
                  <Feather name="trash-2" size={34} color="gray" />
                </TouchableOpacity>
              </View>
            )}
            <View style={postStyles.content}>
              <Text style={postStyles.contentTitleText}>
                {props.posttitle}
                {"\n"}
              </Text>
              <Text style={postStyles.contentDetailsText}>
                Venue: {props.restaurantname}
                {"\n"}
              </Text>
              <Text style={postStyles.contentDetailsText}>
                Meetup time:{" "}
                {moment(props.meetuptime).format("MMMM D, YYYY [at] h:mma")}
                {"\n"}
              </Text>
            </View>
          </View>
        </View>
        <View style={postStyles.date}>
          <Text style={{ fontSize: 13, fontStyle: "italic" }}>
            {moment(props.posttime).startOf("seconds").fromNow()}
          </Text>
        </View>
      </View>
    </View>
  );
};
