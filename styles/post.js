import { StyleSheet } from 'react-native';

export const postStyles = StyleSheet.create({
    item: {
		backgroundColor: '#fff',
		padding: 15,
		borderRadius: 8,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
	itemLeft: {
		flexDirection: 'row',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
    /*Square could be replaced by some kind of Profile Picture*/
	square: {
		width: 24,
		height: 24,
		backgroundColor: '#ffcd00',
		opacity: 0.4,
		borderRadius: 5,
		marginRight: 15,
	},
	itemText: {
		fontSize: 18,
		paddingLeft: 20,
		maxWidth: '80%',
	},
    /*circle can be replaced with an options menu*/
    circular: {
		width: 20,
		height: 20,
		borderColor: '#8C2131',
		borderWidth: 2,
		borderRadius: 10,
	},
});