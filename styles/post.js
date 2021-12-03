import { StyleSheet } from 'react-native';

export const postStyles = StyleSheet.create({
    box: {
		backgroundColor: '#fff',
		padding: 15,
		borderRadius: 26,
		marginBottom: 20,
		justifyContent:'space-between'
	},

	//profile icon
	left:{
		justifyContent:'flex-start',
	},

	//the post informations
	content: {
		paddingTop:10,
		paddingLeft:20,
	},
	
	contentTitleText:{
		fontSize:18,
		fontWeight:'bold'
	},

	contentDetailsText:{
		fontSize:15,
		fontStyle:'italic'
	},

	date:{
		alignItems:'flex-end',
		paddingRight:10,
	},

	itemText: {
		fontSize: 18,
		paddingLeft: 20,
		maxWidth: '80%',
	},

	poster:{
		padding:20,
		flexDirection:'row',
	},
});