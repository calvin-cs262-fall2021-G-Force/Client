import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { postStyles } from '../styles/post';

export default function PostScreen({ route, navigation}) {
  return (
    <View style={globalStyles.paragraphs}>
      <Text style={globalStyles.sectionTitle}>{route.params.item.posttitle}{'\n'}</Text>
      <Text>{route.params.item.post}{'\n'}</Text>
      <Text>{route.params.item.posttime}</Text>
    </View>
  );
}