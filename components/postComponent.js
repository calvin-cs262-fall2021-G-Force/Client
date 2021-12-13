import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import moment from "moment";

import { postStyles } from "../styles/post";
import { globalStyles } from "../styles/global";
import { auth } from "../firebase";
import colors from "../assets/colors";

export default Post = (props) => {
  const navigation = useNavigation();
  const email = props.studentemail;
  const userEmail = auth.currentUser?.email;

  return (
    <View>
      <View
        style={[
          postStyles.box,
          { borderColor: userEmail === props.email ? colors.maroon : "white" },
        ]}
      >
        <View>
          <View style={{ flexDirection: "row" }}>
            <View style={postStyles.left}>
              {/* Displays a user's profile picture and name
               Redirects to the user's profile page when pressed */}
              <TouchableOpacity
                style={[
                  globalStyles.profileIcon,
                  { width: 40, height: 40, marginTop: -6, marginLeft: -6 },
                ]}
                onPress={() => navigation.navigate("Poster", { poster: email })}
              >
                <Ionicons name={props.icon} size={28} color="black" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Poster", { poster: email })}
              >
                <Text
                  style={[
                    postStyles.posterName,
                    { fontWeight: "bold", textDecorationLine: "underline" },
                  ]}
                >
                  {props.firstname} {props.lastname}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Displays the content of the post (post title, restaurant name, meetup time) */}
          <View>
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

        {/* Displays how long ago the post was made */}
        <View style={postStyles.date}>
          <Text style={{ fontSize: 13, fontStyle: "italic" }}>
            {moment(props.posttime).startOf("seconds").fromNow()}
          </Text>
        </View>
      </View>
    </View>
  );
};
