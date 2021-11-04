import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { postStyles } from '../styles/post';

export default function PostScreen({ route, navigation}) {
  return (
    <View style={globalStyles.paragraphs}>
      <Text>{route.params.item[0]}{'\n\n'}{route.params.item[2]}{'\n\n'}{route.params.item[1]}</Text>
    </View>
  );
}