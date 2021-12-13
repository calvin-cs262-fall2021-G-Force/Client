import React from "react";
import { Text, SafeAreaView, FlatList, ScrollView, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function AboutScreen({ navigation }) {
  // Gives information about the app
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      style={{ backgroundColor: "white" }}
    >
      {/* <Text style={globalStyles.header}> How to Use the App</Text> */}
      <Text style={[globalStyles.paragraphs]}>
        <Text
          style={[
            globalStyles.header,
            { fontSize: 24, padding: 20, paddingBottom: 4 },
          ]}
        >
          Home Screen
        </Text>
        {"\n"}
        The Homescreen shows all the events that you can attend. You can see the
        name of the person who created the event, the meetup time, and the
        location of the event. You can find additional details by tapping on the
        post. You can also create your own events by using the maroon button in
        the bottom right of the screen and specifying the date, time and
        location of the event. After an event is posted, it will appear on the
        home screen, and it will have a maroon border to indicate that it is a
        post that you have made.
        {"\n\n"}
        <Text
          style={[
            globalStyles.header,
            { fontSize: 24, padding: 20, paddingBottom: 4 },
          ]}
        >
          Navigating the app
        </Text>
        {"\n"}A Navigation bar can be seen on the bottom of the screen with 4
        icons. The left most button will redirect to the Home Screen, while the
        second button will navigate to the Restaurant Screen, the third to the
        Discount Card Screen, and the fourth to the Profile Screen
        {"\n\n"}
        <Text
          style={[
            globalStyles.header,
            { fontSize: 24, padding: 20, paddingBottom: 4 },
          ]}
        >
          Details of a Post
        </Text>
        {"\n"}
        Within the post screen, the title, meetup time, and location of the
        event are still visible, in addition to the text body of the event. From
        here, clicking the name or profile picture of the poster will redirect
        you to their profile screen. Two buttons are visible, one reading
        "Attend" with the other displaying "Who's going?" Clicking on the second
        button will display an attendee list that lists everyone who has signed
        up for the event. Clicking the first button will add you to that
        attendee list.
        {"\n\n"}
        <Text
          style={[
            globalStyles.header,
            { fontSize: 24, padding: 20, paddingBottom: 4 },
          ]}
        >
          Restaurant List and Discount Card
        </Text>
        {"\n"}
        These are read only screens which can be scrolled though, while the
        navigation bar remains accessible.
        {"\n\n"}
        <Text
          style={[
            globalStyles.header,
            { fontSize: 24, padding: 20, paddingBottom: 4 },
          ]}
        >
          Profile Screen
        </Text>
        {"\n"}
        This is where your user information is available, and reflects what
        other users will see when they visit your profile. You can also see a
        list of all the posts that you have made. You can edit you information
        by clicking the "Edit Profile" button located near the top of the
        screen. Additionally, you can sign out of your account by clicking on
        the sign out icon at the top right, which signs you out and returns you
        to the log-in screen.
      </Text>
    </ScrollView>
  );
}
