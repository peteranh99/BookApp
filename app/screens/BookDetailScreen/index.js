import React, { useCallback } from 'react';
import { Text, View, StyleSheet, Button, Platform, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import BodyText from '../../components/BodyText';
import Screen from '../../components/Screen';
import TitleText from '../../components/TitleText';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';
import BookModel from '../../models/BookModel';
import { useEffect } from 'react';
import { toggleFavoriteBook } from '../../store/actions/books';
import { useTheme } from 'react-navigation';
import CustomHeaderButton from '../../components/CustomHeaderButton';

export default function BookDetailScreen(props) {
    const itemId = props.navigation.getParam('bookId');
    const item = useSelector(state => state.books.books.find(item => item.id === itemId));
    const isFavorite = useSelector(state => state.books.favorite.findIndex(book => book.id === item.id)) > -1;

    useEffect(()=>{
        props.navigation.setParams({ isFavorite });
    }, [isFavorite]);

    const dispatch = useDispatch();

    const pressFavoriteHandler = useCallback(()=>{
        dispatch(toggleFavoriteBook(itemId));
    },[dispatch, itemId]);
    useEffect(()=>{
        props.navigation.setParams({
            toggleFavorite: pressFavoriteHandler
        });
    }, [pressFavoriteHandler]);
    
    useEffect(()=>{
        props.navigation.setParams({bookTitle: item.title});
    }, []);
    return (
        <Screen style={styles.screen}>
            <ScrollView>
                <Image style={styles.image}
                    source={require('../../../assets/images/book.jpg')} />
                {
                    item.pageCount
                        ?
                        <BodyText style={styles.totalPage}>{item.pageCount} pages</BodyText>
                        :null
                }

                {
                    item.shortDescription
                        ?
                        <View>
                            <TitleText style={styles.title}>Description</TitleText>
                            <BodyText style={styles.description}>{item.shortDescription}</BodyText>
                        </View>
                        : null
                }
                {
                    item.longDescription
                        ?
                        <React.Fragment>
                            <TitleText style={styles.title}>Long description</TitleText>
                            <BodyText style={styles.description}>{item.longDescription}</BodyText>
                        </React.Fragment>
                        : null
                }

            </ScrollView>
        </Screen>
    );
}

BookDetailScreen.navigationOptions = (props)=>{
    const toggleFavorite = props.navigation.getParam('toggleFavorite');
    const isFavorite = props.navigation.getParam('isFavorite');
    return {
        headerTitle: `${props.navigation.getParam('bookTitle')}`,
        headerRight:()=>(
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="favorite"
                    iconName={isFavorite ? 'star' : 'star-outline'}
                    onPress={toggleFavorite} />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    screen: {
    },
    image: {
        width: '100%',
        resizeMode: 'contain',
        height: 250,
        backgroundColor: Colors.default,
        marginVertical: 20,
    },
    title: {
        color: Colors.primary,
        textAlign: 'center',
        marginVertical: 10,
    },
    totalPage: {
        paddingHorizontal: 10,
        textAlign: 'right'
    },
    description: {
        textAlign: 'justify',
        paddingHorizontal: 10,
        lineHeight: 20,
    }
});
//<CustomHeaderButton style={{marginRight: 10}}
//onPress={toggleFavorite}
//name={isFavorite ? 'star' : 'star-outline'} />