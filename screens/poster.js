import React, { useState } from 'react';
import { View, Text } from 'react-native';



export default function PosterScreen({ route, navigation}) {
    return(
        <View>
            <Text>
                This post was made by {route.params.poster}
            </Text>
        </View>
    )
}