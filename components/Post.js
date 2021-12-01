import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { postStyles } from '../styles/post'
import { Ionicons } from '@expo/vector-icons';


const Post = (props) => {
    const [signUp, setSignup] = useState("#8C2131");

    const swtichSignup = () => {
        if(signUp=="#8C2131") {
            setSignup("#34b233")
            // Add to UserEvent Table (POST)
        } else {
            setSignup("#8C2131")
            // Remove from UserEvent Table (DELETE)
        }
    }
    const posterProfile = () =>{

    }
    return(
        <View style={postStyles.item}>
            <TouchableOpacity onPress={() => posterProfile()}>
                <Ionicons
                    name="person-circle-outline"
                    size={25}
                    color="#8C2131"
                />
            </TouchableOpacity>
            <View style={postStyles.itemLeft}>
                <Text style={{fontSize: 18, paddingLeft: 20, maxWidth: '80%', fontWeight: 'bold'}}>
                    {props.title}{'\n\n'}{props.date}
                </Text>
                <TouchableOpacity onPress={() => swtichSignup()}>
                    <Ionicons
                        name="checkbox-outline"
                        size={43}
                        color={signUp}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Post;