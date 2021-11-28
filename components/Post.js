import React, {useEffect, useState}from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { postStyles } from '../styles/post' 
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/home';


const Post = (props) => {
    // const [getReference, setGetReference] = useState(0);
    // const getPosts = async () => {
    //     try{
    //       const response = await fetch('https://knight-bites.herokuapp.com/posts');
    //       const json = await response.json();
    //       setPostItems(json);
    //     } catch(error){
    //       console.error(error);
    //     } finally{
    //       setLoading(false);
    //     }
    //   }

    // useEffect(() => {
    //     getPosts()
    //     }, [getReference])

    const deletePosts = async(postID) =>{
        fetch('https://knight-bites.herokuapp.com/posts/' + String(postID),{
            method:'DELETE',
            // body: JSON.stringify({
            //     id: postID,
            //   })
        })
        .catch((error) => {
            console.error(error);
        })
    };
    return (
        <View style={postStyles.item}>
            <TouchableOpacity >
                <Ionicons
                    name="person-circle-outline"
                    size={25}
                    color="#8C2131"
                />
            </TouchableOpacity>
            <View style={postStyles.itemLeft}>
                <Text style={{fontSize: 18, paddingLeft: 20, maxWidth: '80%', fontWeight: 'bold'}}>
                    {props.title}{'\n\n'}{props.date}{'\n'}{props.id}
                </Text>
                    <View>
                        <TouchableOpacity>
                            <Ionicons
                                name="checkbox-outline"
                                size={44}
                                color="#8C2131"
                            />
                        </TouchableOpacity>
                        <Text>{'\n'}</Text>
                        <TouchableOpacity onPress={() => deletePosts(props.id)}>
                        <Ionicons
                        name = "trash-outline"
                        size= {44}
                        />
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    )
}

export default Post;