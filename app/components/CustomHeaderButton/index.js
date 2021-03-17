import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

export default function CustomHeaderButton(props) {

    return (
        <TouchableOpacity onPress={props.onPress}
            style={styles.container}>
            <Ionicons 
                size={props.size || 22}
                name={props.name}
                color={Platform.OS === 'android' ? 'white' : Colors.primary} 
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
    }
});
