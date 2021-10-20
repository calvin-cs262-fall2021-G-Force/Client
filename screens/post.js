import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function PostScreen({ route, navigation}) {
  return (
    <View style={globalStyles.screen}>
      <Text>{route.params.item}</Text>
    </View>
  );
}