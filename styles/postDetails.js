import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

export const postDetailsStyles = StyleSheet.create({
    screen:{
        alignItems:'flex-start',
        paddingTop: 50,
        paddingLeft: 20,
        paddingRight:20,
       
    },

    //the box for the whole post detail
    allWrapper:{
        backgroundColor:'#fff',
        padding:20,
        borderRadius:20,
        width:'100%'
    },

    detailsWrapper:{
        marginTop:15,
        borderWidth:1,
        padding:20,
        borderRadius:20
    },

    poster:{
        fontSize:17,
        fontWeight:'bold',
        textDecorationLine:'underline',
    },

    title:{
        fontSize:20,
        fontWeight:'bold',
    },

    body:{
        fontSize:17,

    },

    dateText:{
        fontSize:14,
        paddingBottom:10,
        marginTop:5
        // paddingLeft:50,
    },

    signupButton:{
        alignSelf:'center',
        backgroundColor:"#8C2131",
        borderRadius:30,
        marginTop:20,
        padding:10,
        width:'60%'
    },

    signupButtonText: {
        fontSize: 16,
        color:"#F3CD00"
    },
});