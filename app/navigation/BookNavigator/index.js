import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../../screens/CategoriesScreen';
import BookCategoryScreen from '../../screens/BookCategoryScreen';
import BookDetailScreen from '../../screens/BookDetailScreen';
import { createAppContainer } from 'react-navigation';
import Colors from '../../constants/Colors';
import FontFamily from '../../constants/FontFamily';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FavoriteScreen from '../../screens/FavoriteScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

const defaultNavigationOptions ={
    headerTitle: 'Default title',
    headerStyle: {
        backgroundColor: Colors.primary,
    },
    headerTintColor: Colors.white,
    headerTitleStyle: {
        fontFamily: FontFamily.montserratSemiBold,
    },
};

const BookNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Categories',
        }
    },
    BookCategory: {
        screen: BookCategoryScreen,
    },
    BookDetail: {
        screen: BookDetailScreen,
    },
}, { defaultNavigationOptions, navigationOptions: {
    tabBarLabel: 'Categories'
} });

const FavoriteNavigator = createStackNavigator({
    Favorite: {
        screen: FavoriteScreen,
        navigationOptions: {
            headerTitle: 'Favorite',
        }
    },
    BookDetail: {
        screen: BookDetailScreen,
    },
}, { defaultNavigationOptions });

const routeConfigs = {
    Books:  {
        screen: BookNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo)=>{
                return (
                    <MaterialCommunityIcons name="bookshelf"
                        size={24}
                        color={tabInfo.tintColor} />
                );
            }
        }
    },
    Favorite:  {
        screen: FavoriteNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo)=>{
                return (
                    <Ionicons 
                        name="star"
                        size={25}
                        color={tabInfo.tintColor} />
                );
            },
            tabBarColor: Colors.secondary
        }
    },
};

const BottomTabNavigator =Platform.OS === 'android' && Platform.Version >=21?
    // bottom tab bar for android
    createMaterialBottomTabNavigator(routeConfigs, {
        activeColor: Colors.white,
        shifting: true,
        barStyle: { backgroundColor: Colors.primary },
    })
    // bottom tab bar for ios
    : createBottomTabNavigator(routeConfigs, {
        tabBarOptions: {
            activeTintColor: Colors.secondary
        }
    });

export default createAppContainer(BottomTabNavigator);