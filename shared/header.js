import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, TouchableOpacity } from 'react-native';


import { Menu, MenuItem } from 'react-native-material-menu';

export default function Header({ navigation }) {

    const [visible, setVisible] = useState(false);
    const hideMenu = () => setVisible(false);
    const showMenu = () => setVisible(true);


    return (
        <SafeAreaView style={{ flexDirection: "row" }}>
            <TouchableOpacity>
                <Ionicons
                    onPress={() => navigation.navigate('About Us')}
                    name="help-circle-outline"
                    size={43}
                    color={'#ccc'}
                />
            </TouchableOpacity>
            <Menu
                visible={visible}
                style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}
                anchor={<Ionicons
                    onPress={showMenu}
                    name="menu"
                    size={43}
                    color={'#ccc'}
                />}
                onRequestClose={hideMenu}
            >
                <MenuItem onPress={() => navigation.navigate('Home')}>Home</MenuItem>
                <MenuItem onPress={() => navigation.navigate('Profile')}>Profile</MenuItem>
                <MenuItem onPress={() => navigation.navigate('Restaurants')}>Restaurants</MenuItem>
                <MenuItem onPress={() => navigation.navigate('Discount')}>Discount Card</MenuItem>
            </Menu>
        </SafeAreaView >
    );
};