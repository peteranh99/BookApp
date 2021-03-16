import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import BodyText from '../../components/BodyText';
import Screen from '../../components/Screen';
import Colors from '../../constants/Colors';

export default function BookDetailScreen(props) {
    return (
        <Screen >
            <BodyText>Book detail screen works</BodyText>
            <Button title="Back"
                color={Colors.secondary}
                onPress={()=>{props.navigation.pop();}} />
            <Button title="Back to categories"
                color={Colors.primary}
                onPress={()=>{props.navigation.popToTop();}} />
        </Screen>
    );
}

const styles = StyleSheet.create({
});