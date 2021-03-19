import React from 'react';
import {Provider} from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { useState } from 'react';
import { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import FontFamily from './app/constants/FontFamily';
import BodyText from './app/components/BodyText';
import TitleText from './app/components/TitleText';
import BookNavigator from './app/navigation/BookNavigator';
import { enableScreens } from 'react-native-screens';
import { combineReducers, createStore } from 'redux';
import BookReducer from './app/store/reducers/books';
import { composeWithDevTools } from 'redux-devtools-extension';
import { useTheme } from 'react-native-paper';

enableScreens();

const rootReducer = combineReducers({
    books: BookReducer
});

//const store = createStore(rootReducer, composeWithDevTools());
const store = createStore(rootReducer);

const fetchFonts = ()=>{
    return Font.loadAsync({
        [FontFamily.montserratMedium]: require('./assets/fonts/Montserrat/Montserrat-Medium.ttf'),
        [FontFamily.montserratRegular]: require('./assets/fonts/Montserrat/Montserrat-Regular.ttf'),
        [FontFamily.montserratLight]: require('./assets/fonts/Montserrat/Montserrat-Light.ttf'),
        [FontFamily.montserratSemiBold]: require('./assets/fonts/Montserrat/Montserrat-SemiBold.ttf'),
    });
};

export default function App() {
    useTheme();
    const [isLoading, setLoading] =useState(true);
    if (isLoading) return (
        <AppLoading startAsync={fetchFonts}
            onFinish={()=>{setLoading(false);}}
            onError={(error)=>{console.log(`loading error: ${error}`);
            }} />
    );

    return (
        <Provider store={store}>
            <BookNavigator />
        </Provider>
    );
}

const styles = StyleSheet.create({ });