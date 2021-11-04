import React from 'react';
import { View, Image,Text,TouchableOpacity } from 'react-native';
import { profileStyles } from '../styles/profile';
import profilePic from '../assets/demo-profile.png';
import { globalStyles } from '../styles/global';
import DiscountScreen from './discount';


export default function ProfileScreen ({navigation}){
  //Shows profile
  return(
    <View style={globalStyles.screen}>     
        <Image source={profilePic} style={{width:30, height:50}}/>
            <View style={profileStyles.text}>
                <Text>Name: John Calvin</Text>
                <Text>Year: Sophomore</Text>
                <Text>Bio: Hi all, I love spicy food!</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Discount')}>
                <Text>Student Discount Card</Text>
            </TouchableOpacity>
    </View>
  );
}