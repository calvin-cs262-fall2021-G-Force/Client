import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { postStyles } from "../styles/post";
import { Ionicons, Feather, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import moment from "moment";

import { UserContext } from "../util/GlobalStateManager";

export default Post = (props) => {
  const navigation = useNavigation();
  const email = props.studentemail;
  const { user, readState, setGlobalRead } = useContext(UserContext);

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

  return (
    <View>
      <View style={postStyles.box}>
        <Text>{props.id}</Text>
        <View>
          <View style={{ flexDirection: "row" }}>
            <View style={postStyles.left}>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 2,
                  borderRadius: 23,
                  backgroundColor: "gold",
                  borderColor: "black",
                }}
                onPress={() => navigation.navigate("Poster", { poster: email })}
              >
                <Ionicons name={props.icon} size={28} color="black" />
              </TouchableOpacity>
            </View>
            {user === props.email && (
              <View>
                <TouchableOpacity onPress={() => handleDeletePost()}>
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
