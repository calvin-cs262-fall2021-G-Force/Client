import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { postStyles } from "../styles/post";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import moment from "moment";

export default Post = (props) => {
  const navigation = useNavigation();
  const email = props.email;

  return (
    <View>
      <View style={postStyles.box}>
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
            <View style={postStyles.content}>
              <Text style={postStyles.contentTitleText}>
                {props.title}
                {"\n"}
              </Text>
              <Text style={postStyles.contentDetailsText}>
                Venue: {props.venue}
                {"\n"}
              </Text>
              <Text style={postStyles.contentDetailsText}>
                Meetup time: {props.meetupTime}
                {"\n"}
              </Text>
            </View>
          </View>
        </View>
        <View style={postStyles.date}>
          <Text style={{ fontSize: 13, fontStyle: "italic" }}>
            {props.postTime}
          </Text>
          {/* <Text style={{fontSize:12}}>{moment.(props.date).startOf('seconds').fromNow()}</Text> */}
        </View>
      </View>
    </View>
  );
};
