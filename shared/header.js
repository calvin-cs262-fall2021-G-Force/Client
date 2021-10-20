import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { globalStyles } from '../styles/global';
import About from "../screens/about";

export default function Header({ navigation }) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('About')}>
                <Text style={globalStyles.about}>?</Text>
            </TouchableOpacity>
        </View>
    );
};