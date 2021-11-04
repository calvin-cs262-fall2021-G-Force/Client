import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { postStyles } from '../styles/post' 

const Post = (props) => {
    return (
        <View style={postStyles.item}>
            <View style={postStyles.itemLeft}>
                <TouchableOpacity style={postStyles.square}></TouchableOpacity>
                <Text style={postStyles.itemText}>{props.text}{'\n\n'}{props.date}</Text>
            </View>
            <TouchableOpacity style={postStyles.circular}></TouchableOpacity>
        </View>
    )
}

export default Post;