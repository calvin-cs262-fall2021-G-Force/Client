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
        backgroundColor:'#F3CD00',
        padding:20,
        borderRadius:20,
        width:'100%'
    },

    detailsWrapper:{
        backgroundColor:"#fff",
        padding:20,
        borderRadius:20
    },

    poster:{
        fontSize:17,
        paddingTop:10,
        fontWeight:'bold',
        textDecorationLine:'underline',
    },

    title:{
        fontSize:20,
        fontWeight:'bold',
    },

    body:{
        fontSize:16,

    },

    dateText:{
        fontSize:14,
        paddingBottom:10,
    },

    signupButton:{
        
        alignSelf:'center',
        backgroundColor:"#8C2131",
        borderRadius:30,
        marginTop:20,
        padding:10,
        width:'50%',
        height:'15%',
        justifyContent:'center',
        alignItems:'center'        
    },

    signupButtonText: {
        fontSize: 20,
        alignSelf:'center',
        color:"#F3CD00",
        justifyContent:'center',
    },
});