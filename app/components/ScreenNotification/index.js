import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import BodyText from '../BodyText';

export default function ScreenNotification(props) {
    return (
        <View style={styles.container}>
            <BodyText style={styles.text}>{props.children}</BodyText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        //backgroundColor: Colors.dodgerBlue,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        margin: 10
    },
    text: {
        color: Colors.black
    }
});
