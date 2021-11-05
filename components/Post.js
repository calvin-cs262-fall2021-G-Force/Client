import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { postStyles } from '../styles/post' 
import { Ionicons } from '@expo/vector-icons';

const Post = (props) => {
    return (
        <View style={postStyles.item}>
            <TouchableOpacity >
                <Ionicons
                    name="person-circle-outline"
                    size={25}
                    color="#8C2131"
                />
            </TouchableOpacity>
            <View style={postStyles.itemLeft}>
                <Text style={{fontSize: 18, paddingLeft: 20, maxWidth: '80%', fontWeight: 'bold'}}>
                    {props.text}{'\n\n'}{props.date}
                </Text>
                <TouchableOpacity>
                <Ionicons
                    name="checkbox-outline"
                    size={33}
                    color="#8C2131"
                />
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default Post;