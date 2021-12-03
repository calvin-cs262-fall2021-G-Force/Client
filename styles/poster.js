import { StyleSheet } from 'react-native';

export const posterStyles = StyleSheet.create({
    profileIcon:{
        alignItems:'center',
        backgroundColor:'#fff',
        borderRadius:100,
        justifyContent:'center',
        width:90,
        height:90,
        alignSelf:'center'
        
    },

    user:{
        alignItems:'center',
    },

    name:{
        fontSize: 20,
        fontWeight:'bold',
    },

    details:{
        fontSize:14,

    },

    bio:{
        fontSize:16,
    }
});