import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import BodyText from '../../components/BodyText';
import Screen from '../../components/Screen';
import Colors from '../../constants/Colors';
import FontFamily from '../../constants/FontFamily';
import DummyCategories from '../../commons/Data/DummyCategories';
import { FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function CategoriesScreen(props) {

    const GridItem = ({item, index})=>{
        return (
            <View style={styles.gridItem}>
                <TouchableOpacity style={styles.gridItemTouchable}>
                    <BodyText>{item.name}</BodyText>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <Screen >
            <FlatList
                style={styles.grid}
                contentContainerStyle={styles.gridContainer}
                numColumns={2}
                style={styles.grid}
                data={DummyCategories}
                keyExtractor={(item)=>item.id}
                renderItem={GridItem}
            />
        </Screen>
    );
}

CategoriesScreen.navigationOptions = {
    title: 'Home Screen',
    headerStyle: {
        backgroundColor: Colors.primary,
    },
    headerTintColor: Colors.white,
    headerTitleStyle: {
        fontFamily: FontFamily.montserratSemiBold,
    },
};

const styles = StyleSheet.create({
    grid: {
        flex: 1,
    },
    gridItem:{
        flex: 1,
        margin: 10,
    },
    gridItemTouchable: {
        height: '100%',
        width: '100%',
        backgroundColor: Colors.default,
        padding: 20,
        height: 100,
    }
});