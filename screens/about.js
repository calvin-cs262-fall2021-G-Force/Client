import React from 'react';
import { Text, SafeAreaView, FlatList} from 'react-native';
import { globalStyles } from '../styles/global';

export default function AboutScreen ({navigation}){
  // Gives information about our mission
  return(
    <SafeAreaView contentContainerStyle={{paddingBottom:20}}>
      <Text style ={globalStyles.header}>Vision Statement</Text>
      <Text style= {globalStyles.paragraphs}> Knight Bites serves Calvin University students who, after the pandemic, wish to create meaningful connections with other Calvin University students and become more comfortable with the Grand Rapids community. It is a meet-up app that connects students through shared meals at restaurants that Calvin University is affiliated with, and, unlike tinder or other apps geared towards meet-ups, allows students to purchase these meals at a discounted price.
          The discounts are provided by Calvin University Student Senate. The Senate team has access to 10 - 15% discounts on purchases from almost 20 restaurants that are within a 4-mile radius of Calvin University! These restaurants are an integral part of the Calvin University student experience because they provide wonderful study spaces, amazing opportunities for connection, and of course, exquisite 5-star meals.
          College can be a difficult experience for students to adapt to, and meaningful interactions can be more difficult to come by. It is our belief as the KnightBites team that meals can be an excellent way to fostering discussion and relationships between anyone. Additionally, due to the nature of meet up apps, it can engage people with the culture of Grand Rapids as they enjoy meals.
      </Text>
        
      <Text style ={globalStyles.header}>Team Members </Text>  
         
      <FlatList
        data={[
          {key: 'Aayam Shrestha'},
          {key: 'Anjana Sainju'},
          {key: 'Charles Duimstra'},
          {key: 'Ifeanyi Onyeanakwe'},
        ]}
        renderItem={({item}) => <Text style= {globalStyles.paragraphs}>{item.key} </Text>}
      />
        
    </SafeAreaView>
  );
}