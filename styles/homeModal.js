import { StyleSheet } from 'react-native';
//import colors from './assets/colors';

export const homeModalStyles = StyleSheet.create({
    modalView: {
        backgroundColor: "gold",
        borderRadius: 30,
        // alignItems: "center",
        padding:20,
        alignSelf:'center',
        marginTop: 100,
        justifyContent:'center',
        elevation: 100,
        height:'80%',
        width:'90%'
    },

    heading:{
        fontSize:25,
        color:'#8C2131',
        alignSelf:'center',
        fontWeight:'bold'
    },

    textinput:{
        backgroundColor:'white',
        height:50,
        width:300,
        paddingLeft:20,
        borderRadius:10,
        alignSelf:'center'
    },

    text:{
        fontSize:16,
        fontWeight:'bold',
        paddingLeft:10,
        marginTop:20,
        marginBottom:5
    },

    datetime: {
        borderRadius: 15,
        paddingLeft: 20,
    },

    picker:{
        justifyContent:'center',
        backgroundColor:'#fff',
        height:40,
        paddingLeft:30,
        width:300,
        borderRadius:10,
        alignContent:'center',

    },
    buttontext:{
        alignSelf:'center',
        color:'#fff',
        fontSize:18

    },
    button:{
        backgroundColor:'#8C2131',
        margin:25,
        height:40,
        justifyContent:'center',
        width:300,
        alignSelf:'center',
        borderRadius:10,
    },
});