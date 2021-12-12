import { StyleSheet } from "react-native";
import colors from '../assets/colors';

export const editProfileStyles = StyleSheet.create({
heading:{
    fontSize:30,
    margin:20,
    padding:20,
    color: colors.maroon,
    fontWeight:'bold'
},

name:{
    fontSize:16,
    paddingBottom:5,
    paddingLeft:10,
    fontWeight:'bold'
},

box:{
    paddingBottom:10
},

button:{
    backgroundColor:colors.gold,
    height:40,
    width:'60%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
},

buttonText:{
    fontSize:18,
    fontWeight:'bold'
}

})