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
        {"\n\n"}
        A Navigation bar can be seen on the bottom of the screen with 4 icons. 
        The left most button will redirect to the Home Screen, while the second button will navigate to the Restaurant Screen, the third to the Discount Card Screen, and the fourth to the Profile Screen
        {"\n\n"}
        Post Screen
        {"\n\n"}
        Within the post screen, the title, meetup time, and location of the event are still visible, in addition to the text body of the event. 
        From here, clicking the name or profile picture of the poster will redirect you to their profile screen.
        Two buttons are visible, one reading "Attend" with the other displaying "Who's going?"
        Clicking on the second button will display an attendee list that lists everyone who has signed up for the event.
        Clicking the first button will add you to that attendee list.
        {"\n\n"}
        Restaurant and Discount Card Screen
        {"\n\n"}
        These are read only screens which can be scrolled though, while the navigation bar remains accessible.
        {"\n\n"}
        Profile Screen
        {"\n\n"}
        This is where your user information is available, and reflects what other users will see from your user profile within your posts.
        From here, a list of posts that you have made is visible, in addition to your name, profile picture, and bio.
        You can edit any of these by clicking the "Edit Profile" button located near the top of the screen.
        Additionally, you can sign out of your account by clicking directly to the right of your name, returning you to the log-in screen and requiring authetication to return to the app.
      </Text>
    </ScrollView>
  );
}
