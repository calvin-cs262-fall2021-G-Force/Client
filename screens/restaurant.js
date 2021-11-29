import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { restaurantStyles } from '../styles/restaurant';
import moment from 'moment';

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
    <View style={globalStyles.screen}>
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style= {restaurantStyles.item}>
            <Text style={restaurantStyles.name}>{item.name}</Text>
            <Text style={restaurantStyles.details}>Discount: {item.discount}</Text>
            <Text style={restaurantStyles.details}>Address : {item.address}</Text>
            {/* <Text style={restaurantStyles.details}>Open hours : {item.openingtime} - {item.closingtime}</Text> */}
            <Text style={restaurantStyles.details}>Open hours : {moment(item.openingtime).format('h:mm a')} - {item.closingtime}</Text>
            {/* date={moment(item.posttime).format('MMM Do YYYY, h:mm a')} */}
            </View>
          )}
        />
      )}
    </View>
    </View>
  );
};