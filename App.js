import React from 'react';
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

enableScreens();

const fetchFonts = ()=>{
    return Font.loadAsync({
        [FontFamily.montserratMedium]: require('./assets/fonts/Montserrat/Montserrat-Medium.ttf'),
        [FontFamily.montserratRegular]: require('./assets/fonts/Montserrat/Montserrat-Regular.ttf'),
        [FontFamily.montserratLight]: require('./assets/fonts/Montserrat/Montserrat-Light.ttf'),
        [FontFamily.montserratSemiBold]: require('./assets/fonts/Montserrat/Montserrat-SemiBold.ttf'),
    });
};

export default function App() {
    const [isLoading, setLoading] =useState(true);

    if (isLoading) return (
        <AppLoading startAsync={fetchFonts}
            onFinish={()=>{setLoading(false);}}
            onError={(error)=>{console.log(`loading error: ${error}`);
            }} />
    );

    return (
        <BookNavigator />
    );
}

const styles = StyleSheet.create({ });
