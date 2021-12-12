import { StyleSheet } from 'react-native';
import colors from '../assets/colors';

export const attendeesModalStyles = StyleSheet.create({
        modalView: {
            backgroundColor: "white",
            borderRadius: 30,
            padding:20,
            alignSelf:'center',
            marginTop: 150,
            justifyContent:'flex-start',
            elevation: 100,
            height:'70%',
            width:'90%'
        },
        heading:{
            alignSelf:'center',
            fontWeight:'bold',
            fontSize:25,
            color:colors.maroon,
            marginBottom:20,
            
        },
        button:{
            backgroundColor:colors.gold,
            alignItems:'center',
            justifyContent:'center',
            alignSelf:'center',
            height:40,
            width: 200,
            padding:20,
            borderRadius:10,

        },
        buttontext:{
            fontSize:25,
            fontWeight:'bold',
            color:colors.maroon
        },

        attendees:{
            borderTopWidth:2,
            borderTopColor:colors.maroon,
            alignItems:'center',
            height:'75%',
            margin:10,
            paddingTop:20,
        },

        body:{
            fontSize:18,
            margin:5
        },

        who:{
            // marginTop:20,
            // fontWeight:'bold',
            fontSize:16,
            color:"white",
            // textDecorationLine:'underline',
            alignSelf:'center'
        }
    
})