import React from "react";
import { View, Image } from "react-native";

import { discountStyles } from "../styles/discount";
import discountCoupon from "../assets/coupon.png";

export default function DiscountScreen({ navigation }) {
  // Shows discount coupon
  return (
    <View style={discountStyles.discountCard}>
      <Image source={discountCoupon} style={{ width: 300, height: 600 }} />
    </View>
  );
}
