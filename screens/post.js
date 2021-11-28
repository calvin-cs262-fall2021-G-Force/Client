import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { postStyles } from '../styles/post';

import moment from 'moment'

export default function PostScreen({ route, navigation}) {
  return (
    <View style={globalStyles.paragraphs}>
      <Text>{route.params.item.posttitle}{'\n\n'}{route.params.item.post}{'\n\n'}{moment(route.params.item.posttime).format('MMM Do YYYY, h:mm a')}</Text>
    </View>
  );
}