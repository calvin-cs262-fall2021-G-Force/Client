import React, { useState, createRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View, Text, ScrollView, SafeAreaView } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { globalStyles } from '../styles/global';
import ActionSheet from "react-native-actions-sheet";
import About from "../screens/about";
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';

const actionSheetRef = createRef();

export default function Header({ navigation }) {
    let actionSheet;

    // const [selectedValue, setSelectedValue] = useState('0');
    // const navigateMenu = (itemValue) => {
    //     if (itemValue != '0')
    //         navigation.navigate(itemValue);
    // }
    
    return (
        <SafeAreaView>
            <ScrollView>
                < TouchableOpacity onPress={() => { actionSheetRef.current?.setModalVisible(); }} >
                    <Ionicons
                        name="menu"
                        size={43}
                        color={'#ccc'}
                    />
                </TouchableOpacity>

                <ActionSheet ref={actionSheetRef}>
                    <View>
                        <Text>YOUR CUSTOM COMPONENT INSIDE THE ACTIONSHEET</Text>
                    </View>
                </ActionSheet>

                {/* {isVisible
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
                    : 
                } */}
            </ScrollView>
        </SafeAreaView >
    );
};