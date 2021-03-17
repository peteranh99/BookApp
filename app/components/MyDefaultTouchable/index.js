import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';

export default function MyDefaultTouchable(props) {
    let TouchableComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) TouchableComponent = TouchableNativeFeedback;
    return (
        <View >
            <TouchableComponent {...props} >
                {props.children}
            </TouchableComponent>
        </View>
    );
}
