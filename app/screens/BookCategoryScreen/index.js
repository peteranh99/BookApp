import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import BodyText from '../../components/BodyText';
import BookList from '../../components/BookList';
import MyDefaultTouchable from '../../components/MyDefaultTouchable';
import Screen from '../../components/Screen';
import TitleText from '../../components/TitleText';
import Colors from '../../constants/Colors';
import BookModel from '../../models/BookModel';
import CategoryModel from '../../models/CategoryModel';

export default function BookCategoryScreen(props) {
    const catId = props.navigation.getParam('categoryId');
    const booksInCategory = BookModel.listByCatId(catId, {});


    return (
        <Screen >
            <BookList listData={booksInCategory}
                navigation={props.navigation} />
        </Screen>
        
    );
}

BookCategoryScreen.navigationOptions = (props)=>{
    const catId = props.navigation.getParam('categoryId');
    const category = CategoryModel.getById(catId);
    return {
        headerTitle: `${category.name} category`,
    };
};

const styles = StyleSheet.create({
});