import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { postStyles } from '../styles/post';

export default function PostScreen({ route, navigation}) {
  return (
    <View style={globalStyles.paragraphs}>
      <Text>{route.params.item.posttitle}{'\n\n'}{route.params.item.post}{'\n\n'}{route.params.item.posttime}</Text>
    </View>
  );
}