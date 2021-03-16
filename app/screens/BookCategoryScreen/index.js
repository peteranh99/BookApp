import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import BodyText from '../../components/BodyText';
import Screen from '../../components/Screen';

export default function BookCategoryScreen(props) {
    return (
        <Screen >
            <BodyText>Book category screen works</BodyText>
            <Button title="Go to book detail"
                onPress={()=>{props.navigation.navigate('BookDetail');}} />
        </Screen>
    );
}

const styles = StyleSheet.create({
});