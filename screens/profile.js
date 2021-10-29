import React from 'react';
import { View, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import discountCoupon from '../assets/coupon.png';

export default function ProfileScreen ({navigation}){
  // Shows discount coupon
  return(
    <View>
        <Image source={discountCoupon} style={{width:200, height:400}}/>
    </View>
  );
}