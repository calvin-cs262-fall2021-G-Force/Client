import { StyleSheet } from 'react-native';

export const restaurantStyles = StyleSheet.create({
    box: {
		backgroundColor: '#fff',
		padding: 20,
		borderRadius: 8,
		justifyContent: 'space-between',
		marginBottom: 15,
    },

    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf:'center',
        color: "#8C2131",
        bottom: 5
    },

    name:{
        fontSize:20,
        fontWeight:'bold',
        color: "#8C2131",
        marginBottom:10
    },

    details:{
        fontSize:14,
        marginTop:5
       // width:'70%',
    },

    discount:{
        fontSize:16,
        marginTop:5,
        fontWeight:'bold',
    },


});