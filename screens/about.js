import React from "react";
import { Text, SafeAreaView, FlatList, ScrollView, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function AboutScreen({ navigation }) {
  // Gives information about the app
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
      <Text style={globalStyles.header}>  How to Use the App</Text>
      <Text style={globalStyles.paragraphs}>
        Home Screen
        {"\n\n"}
        On the Home Screen, you can view all events that you can attend.
        You can see the meetup time, and location of these events from the homescreen, in addition to the person who posted it.
        Additional details can be found by clicking the event, which will take you to the Post Screen.
        You can also create events of your own, using the maroon button in the bottom right of the screen.
        Each event requires a date, time and location. After an event is posted, it can be viewed on the home screen, and it will have a border to indicate that it is a post that you have made.
        {"\n"}
        A Navigation bar can be seen on the bottom of the screen
      </Text>
    </ScrollView>
  );
}
