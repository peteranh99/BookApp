import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import BodyText from '../../components/BodyText';
import BookList from '../../components/BookList';
import DrawerToggler from '../../components/DrawerToggler';
import MyDefaultTouchable from '../../components/MyDefaultTouchable';
import Screen from '../../components/Screen';
import TitleText from '../../components/TitleText';
import Colors from '../../constants/Colors';
import CategoryModel from '../../models/CategoryModel';

export default function BookCategoryScreen(props) {
    const catId = props.navigation.getParam('categoryId');
    const booksInCategory = useSelector(state => {
        return state.books.books.filter(item => item.categories.indexOf(catId) > -1);
    });

    return (
        <Screen >
            <BookList listData={booksInCategory}
                navigation={props.navigation} />
        </Screen>
        
    );
}

BookCategoryScreen.navigationOptions = (props)=>{
    return {
        headerTitle: props.bookTitle
    };
};

const styles = StyleSheet.create({
});