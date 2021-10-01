import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Post = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.item}>{props.text}</Text>
            </View>
            <TouchableOpacity style={styles.circular}></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
		backgroundColor: '#FFF',
        width: '100',
		padding: 15,
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center',
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
		backgroundColor: '#F3CD00',
		opacity: 0.4,
		borderRadius: 5,
		marginRight: 5,
	},
	itemText: {
		maxWidth: '80%',
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

export default Post