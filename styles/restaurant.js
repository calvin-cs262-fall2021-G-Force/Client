import { StyleSheet } from 'react-native';

export const restaurantStyles = StyleSheet.create({
    item: {
		backgroundColor: '#fff',
		padding: 10,
		borderRadius: 8,
		justifyContent: 'space-between',
		marginBottom: 20,
        width:'100%',
    },

    name:{
        fontSize:20,
        fontWeight:'bold',
        color: "#8C2131",
    },

    details:{
        fontSize:14,
    }

});