import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, Platform, } from 'react-native';
import BodyText from '../../components/BodyText';
import Screen from '../../components/Screen';
import Colors from '../../constants/Colors';
import FontFamily from '../../constants/FontFamily';
import DummyCategories from '../../commons/Data/DummyCategories';
import { FlatList, TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler';
import MyDefaultTouchable from '../../components/MyDefaultTouchable';

const colorNames = ['red', 'orange', 'green', 'blue'];
const GridItem = ({item, index, navigation})=>{
    const [colorCode, setColorCode] = useState(colorNames);
    useEffect(()=>{
        const codeIndex = index%colorNames.length;
        setColorCode(colorNames[codeIndex]);
    }, []);
    const pressHandler = ()=>{
        navigation.navigate({
            routeName: 'BookCategory',
            params: {
                categoryId: item.id
            }
        });
    };

    return (
        <View style={styles.gridItem}>
            <MyDefaultTouchable style={[styles.gridItemTouchable, {
                backgroundColor: colorCode
            }]}
            onPress={pressHandler.bind(this)}>
                <BodyText numberOfLines={1}
                    style={styles.categoryName}>{item.name}</BodyText>
            </MyDefaultTouchable>
        </View>
    );
};

export default function CategoriesScreen(props) {

    return (
        <Screen style={styles.screen} >
            <FlatList
                style={styles.grid}
                contentContainerStyle={styles.gridContainer}
                numColumns={2}
                style={styles.grid}
                data={DummyCategories}
                keyExtractor={(item)=>item.id}
                renderItem={({item, index})=>{
                    return <GridItem navigation={props.navigation}
                        item={item}
                        index={index} ></GridItem>;
                }}
            />
        </Screen>
    );
    //renderItem={({item, index})=>{
    //return <GridItem {...props} item={item} index={index} ></GridItem>;
    //}}
}

const styles = StyleSheet.create({
    screen:{
    },
    grid: {
        flex: 1,
    },
    gridItem:{
        flex: 1,
        margin: 10,
        borderRadius: 20,
        overflow: 'hidden'
    },
    gridItemTouchable: {
        backgroundColor: Colors.default,
        padding: 10,
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        elevation:6 
    },
    categoryName: {
        color: Colors.white
    }
});