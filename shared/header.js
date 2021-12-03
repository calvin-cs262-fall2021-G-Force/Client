import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';


import { Menu, MenuItem } from 'react-native-material-menu';

export default function Header({ navigation }) {

    const [visible, setVisible] = useState(false);
    const hideMenu = () => setVisible(false);
    const showMenu = () => setVisible(true);


    return (
        <SafeAreaView>
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
                <MenuItem onPress={() => navigation.navigate('About Us')}>About Us</MenuItem>
            </Menu>
        </SafeAreaView >
    );
};