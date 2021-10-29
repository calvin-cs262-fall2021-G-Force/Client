import React from 'react';
import { View, Image } from 'react-native';
import { profileStyles } from '../styles/profile';
import discountCoupon from '../assets/coupon.png';

export default function ProfileScreen ({navigation}){
  // Shows discount coupon
  return(
    <View style={profileStyles.discountCard}>
        <Image source={discountCoupon} style={{width:300, height:560}}/>
    </View>
  );
}