import { StyleSheet } from 'react-native';

export const postStyles = StyleSheet.create({
    item: {
		backgroundColor: '#FFF',
		padding: 15,
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 15,
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
		backgroundColor: '#F3CD00',
		opacity: 0.4,
		borderRadius: 5,
		marginRight: 15,
	},
	itemText: {
		width: 250
	},
    /*circle can be replaced with an options menu*/
    circular: {
		width: 12,
		height: 12,
		borderColor: '#8C2131',
		borderWidth: 2,
		borderRadius: 5,
	},
});