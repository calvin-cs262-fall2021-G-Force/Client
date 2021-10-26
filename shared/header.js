import React from 'react';
import { TouchableOpacity, View, Text, ScrollView, SafeAreaView } from 'react-native';

import { globalStyles } from '../styles/global';
import About from "../screens/about";

export default function Header({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('About the app')}>
                    <Text style={globalStyles.about}>?</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};