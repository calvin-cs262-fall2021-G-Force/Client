import { StyleSheet } from 'react-native';

export const userStyles = StyleSheet.create({
    user:{
        justifyContent:'center',
        backgroundColor:'#fff',
        padding:15,
        borderWidth:1,
        borderTopRightRadius:30,
        borderBottomLeftRadius:30
        //  margin:30
    },
    
    upper:{
        flexDirection:'row',
        // paddingLeft:30
    },
    lower:{
        flexDirection:'row',
        marginTop:20,
    },

    details:{
        paddingLeft:30,
        marginTop:10,
    },

    name:{
        fontSize: 20,
        fontWeight:'bold',
    },

    detailstext:{
        fontSize:16,

    },

    bioheading:{
        fontSize:16,
        fontWeight:'bold',
        // paddingLeft:30,
    },

    biodetails:{
        fontSize:16,
    },

    editProfile:{
        backgroundColor:'#afc7b5',
        alignItems:'center',
        borderRadius:15,
    },
});