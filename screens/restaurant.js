import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default function RestaurantScreen({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getRestaurants = async () => {
    try {
      const response = await fetch('https://knight-bites.herokuapp.com/restaurants');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text style={{ fontSize: 20, color: "#2a6b35" }}>
              {'\n'}Name : {item.name}
              {'\n'}Address : {item.address}
              {'\n'}Open hours : {item.openingtime} - {item.closingtime}
              {'\n'}Discount: {item.discount}{'\n'}
            </Text>
          )}
        />
      )}
    </View>
  );
};