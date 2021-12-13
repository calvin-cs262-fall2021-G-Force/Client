import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Ionicons, Feather, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import moment from "moment";

import { postStyles } from "../styles/post";
import { postDetailsStyles } from "../styles/postDetails";
import { globalStyles } from "../styles/global";
import { auth } from "../firebase";
import { UserContext } from "../util/GlobalStateManager";
import colors from "../assets/colors";

export default Post = (props) => {
  const navigation = useNavigation();
  const email = props.studentemail;
  const { readState, setGlobalRead } = useContext(UserContext);
  const [showBox, setShowBox] = useState(true);
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
              {/* Displays a user's profile picture and name, can be clicked to be redirected to their profile page */}
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
                // style={}
                onPress={() => navigation.navigate("Poster", { poster: email })}
              >
                <Text style={postStyles.posterName}>
                  {props.firstname} {props.lastname}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Displays the content of the post, as defined within the dataservice */}
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
        <View style={postStyles.date}>
          <Text style={{ fontSize: 13, fontStyle: "italic" }}>
            {moment(props.posttime).startOf("seconds").fromNow()}
          </Text>
        </View>
      </View>
    </View>
  );
};
