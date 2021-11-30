import { StyleSheet } from 'react-native';

export const postStyles = StyleSheet.create({
    item: {
		backgroundColor: '#fff',
		padding: 10,
		borderRadius: 8,
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: 20,
	},
	itemLeft: {
		flexDirection: 'row',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	
	itemText: {
		fontSize: 18,
		paddingLeft: 20,
		maxWidth: '80%',
	},
});