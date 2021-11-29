import React from 'react';
import { Alert, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { postStyles } from '../styles/post';

import moment from 'moment'
import { Button } from 'react-native-paper';

export default function PostScreen({ route, navigation}) {
  return (
    <View style={globalStyles.paragraphs}>
      <Text style={globalStyles.sectionTitle}>{route.params.item.posttitle}{'\n'}</Text>
      <Text style={postStyles.itemText}>{route.params.item.post}{'\n'}</Text>
      <Text style={postStyles.itemText}>{moment(route.params.item.posttime).format('MMM Do YYYY, h:mm a')}</Text>

      <Button
        onPress={() => {
          Alert.alert("Signed up for event!");
        }}
      >
        <Text
          style={{
            color: '#8C2131'
          }}
        >
          Sign up
        </Text>
      </Button>
    </View>
  );
}