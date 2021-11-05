import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { postStyles } from '../styles/post' 
import { Ionicons } from '@expo/vector-icons';

const Post = (props) => {
    return (
        <View style={postStyles.item}>
            <View style={postStyles.itemLeft}>
                {/* <TouchableOpacity style={postStyles.square}></TouchableOpacity> */}
                <TouchableOpacity>
                    <Ionicons
                        name="checkbox-outline"
                        size={33}
                        color="#8C2131"
                    />
                </TouchableOpacity>
                <Text style={{fontSize: 18, paddingLeft: 20, maxWidth: '80%', fontWeight: 'bold'}}>
                    {props.text}{'\n\n'}{props.date}
                </Text>
            </View>
            <TouchableOpacity style={postStyles.circular}></TouchableOpacity>
        </View>
    )
}

export default Post;