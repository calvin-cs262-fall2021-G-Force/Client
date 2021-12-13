import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import { restaurantStyles } from "../styles/restaurant";
import moment from "moment";

export default function RestaurantScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);

  //Gets the list of restaurants from the dataservice
  const getRestaurants = async () => {
    try {
      const response = await fetch(
        "https://knight-bites.herokuapp.com/restaurants"
      );
      const json = await response.json();
      setRestaurants(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getRestaurants();
    }

    return function cleanup() {
      mounted = false;
    };
  }, []);

  return (
    <View style={globalStyles.screen}>
      <View style={{ width: "95%", top: 20 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            {restaurants.map((item, index) => {
              return (
                <View style={restaurantStyles.box} key={index}>
                  <Text style={restaurantStyles.name}>
                    {item.restaurantname}
                  </Text>
                  <Text style={restaurantStyles.discount}>
                    Discount: {item.discount}
                  </Text>
                  <Text style={restaurantStyles.details}>{item.address}</Text>
                  <Text style={restaurantStyles.details}>
                    Open hours :{" "}
                    {moment(item.openingtime, "HH:mm:ss").format("h:mm a")} -{" "}
                    {moment(item.closingtime, "HH:mm:ss").format("h:mm a")}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        )}
      </View>
    </View>
  );
}
{
  /* <View style={globalStyles.screen}>
      <View style={globalStyles.postsWrapper}>
        <Text style={globalStyles.sectionTitle}>Posts</Text>
        <View style={globalStyles.items}>
          {isLoading
            ? <ActivityIndicator />
            : (
              <ScrollView >
              {
                postItems.map((item, index) => {
                  return (
                    <TouchableOpacity style={postStyles.item} key={index} onPress={() => navigation.navigate('Post', {item})}>
                      <Post title={item.posttitle} date={moment(item.posttime).format('MMM Do YYYY, h:mm a')}/>
                    </TouchableOpacity>
                  )
                })
              }
              </ScrollView>
            )}
        </View>
      </View> */
}
