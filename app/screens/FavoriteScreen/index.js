import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import BodyText from '../../components/BodyText';
import BookList from '../../components/BookList';
import DrawerToggler from '../../components/DrawerToggler';
import Screen from '../../components/Screen';
import ScreenNotification from '../../components/ScreenNotification';
import BookModel from '../../models/BookModel';

export default function FavoriteScreen(props) {
    const items = useSelector(state => state.books.favorite);
    return (
        <Screen style={styles.screen}>
            {
                items.length > 0
                    ?

                    <BookList listData={items}
                        navigation={props.navigation} />
                    : <ScreenNotification>No favorite books, yet!</ScreenNotification>
            }
        </Screen>
    );
}

FavoriteScreen.navigationOptions = (props)=>{
    return {
        headerLeft: DrawerToggler.bind(this, props)
    };
};

const styles = StyleSheet.create({
    screen: {
        alignContent: 'center',
    }
});