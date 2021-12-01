import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View, Picker, Text, ScrollView, SafeAreaView } from 'react-native';

import { globalStyles } from '../styles/global';
import About from "../screens/about";
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';

export default function Header({ navigation }) {
    const [selectedValue, setSelectedValue] = useState('0');
    const [isVisible, setVisible] = useState(false);

    const navigateMenu = (itemValue) => {
        if (itemValue != '0')
            navigation.navigate(itemValue);
    }
    return (
        <SafeAreaView>
            <ScrollView>
                {isVisible
                    ? <Picker
                        selectedValue={selectedValue}
                        style={globalStyles.menu}
                        onValueChange={(itemValue) => navigateMenu(itemValue)}
                    >
                        <Picker.Item
                            label=''
                            value="0"
                        />
                        <Picker.Item
                            label={"Home"}
                            value={'Home'}
                        />
                        <Picker.Item
                            label={"Profile"}
                            value={'Profile'}
                        />
                        <Picker.Item
                            label={"Restaurants"}
                            value={'Restaurants'}
                        />
                        <Picker.Item
                            label={"Discounts"}
                            value={'Discount'}
                        />
                        <Picker.Item
                            label={"About Us"}
                            value={'About the app'}
                        />

                    </Picker>
                    : < TouchableOpacity onPress={() => setVisible(!isVisible)} style={{ marginRight: 150 }}>
                    <Ionicons
                        name="menu"
                        size={43}
                        color={'#ccc'}
                    />
                </TouchableOpacity>
                }
            </ScrollView>
        </SafeAreaView >
    );
};