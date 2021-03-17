import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BodyText from '../../components/BodyText';
import BookList from '../../components/BookList';
import Screen from '../../components/Screen';
import BookModel from '../../models/BookModel';

export default function FavoriteScreen(props) {
    const items = BookModel.listDummyFavorite();
    return (
        <Screen style={styles.screen}>
            <BookList listData={items}
                navigation={props.navigation} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignContent: 'center',
    }
});