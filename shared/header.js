import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View, Picker, Text, ScrollView, SafeAreaView } from 'react-native';

import { globalStyles } from '../styles/global';
import About from "../screens/about";
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';

export default function Header({ navigation }) {
    const [selectedValue, setSelectedValue] = useState("1");
    const [isNotVisible, setVisible] = useState("false");

    const navigateMenu = (itemValue) => {
        setSelectedValue(itemValue);
        () => navigation.navigate(selectedValue)
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue) => navigateMenu(itemValue)}
                >
                    <Picker.Item
                        label={"Home"}
                        value={"1"}
                    />
                    <Picker.Item
                        label={"Profile"}
                        value={"2"}
                    />
                    <Picker.Item
                        label={"Restaurants"}
                        value={"3"}
                    />
                    <Picker.Item
                        label={"Discounts"}
                        value={"4"}
                    />
                    <Picker.Item
                        label={"About Us"}
                        value={"5"}
                    />

                </Picker>
            </ScrollView>
        </SafeAreaView>
    );
};