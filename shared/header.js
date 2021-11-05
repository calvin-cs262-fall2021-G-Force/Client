import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View, Text, ScrollView, SafeAreaView } from 'react-native';

import { globalStyles } from '../styles/global';
import About from "../screens/about";

export default function Header({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('About the app')}>
                <Ionicons
                    name="help-circle-outline"
                    size={33}
                />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};