import React from 'react';
import { Text, View, StyleSheet, Button, Platform } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import BodyText from '../../components/BodyText';
import Screen from '../../components/Screen';
import TitleText from '../../components/TitleText';
import Colors from '../../constants/Colors';
import BookModel from '../../models/BookModel';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/CustomHeaderButton';

export default function BookDetailScreen(props) {
    const item = BookModel.getById(props.navigation.getParam('bookId'));
    return (
        <ScrollView>
            <Screen style={styles.screen}>
                <BodyText style={styles.title}>{item.title}</BodyText>
                <BodyText>Description:</BodyText>
                <BodyText>{item.longDescription}</BodyText>
            </Screen>
        </ScrollView>
    );
}

BookDetailScreen.navigationOptions = (props)=>{
    const item = BookModel.getById(props.navigation.getParam('bookId'));
    const pressHeartIconHandler = ()=>{
        alert('heart pressed');
    };
    return {
        headerTitle: `${item.title}`,
        headerRight:()=>(
            <CustomHeaderButton onPress={pressHeartIconHandler.bind(this)}
                name="star" />
        )
    };
};

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center'
    },
});