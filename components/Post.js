import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { postStyles } from "../styles/post";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";

export default Post = (props) => {
  return (
    <View>
      <View style={postStyles.box}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <View style={postStyles.left}>
              <TouchableOpacity onPress={() => posterProfile()}>
                <Ionicons
                  name="person-circle-outline"
                  size={30}
                  color="#8C2131"
                />
              </TouchableOpacity>
            </View>
            <View style={postStyles.content}>
              <Text style={postStyles.contentTitleText}>
                {props.title}
                {"\n"}
              </Text>
              <Text style={postStyles.contentDetailsText}>Venue:{"\n"}</Text>
              <Text style={postStyles.contentDetailsText}>
                Meet up Time:{"\n"}
              </Text>
            </View>
          </View>
        </View>
        <View style={postStyles.date}>
          <Text style={{ fontSize: 13, fontStyle: "italic" }}>
            {props.date}
          </Text>
          {/* <Text style={{fontSize:12}}>{moment.(props.date).startOf('seconds').fromNow()}</Text> */}
        </View>
      </View>
    </View>
  );
};
