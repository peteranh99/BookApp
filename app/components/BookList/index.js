import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import BodyText from '../../components/BodyText';
import MyDefaultTouchable from '../../components/MyDefaultTouchable';
import Colors from '../../constants/Colors';

export default function BookList(props) {
    const listItem = ({item, index})=>{
        const pressHandler = ()=>{
            props.navigation.navigate({
                routeName: 'BookDetail',
                params: {
                    bookId: item.id
                }
            });
        };
        return (
            <View style={{flex: 1}}>
                <MyDefaultTouchable style={styles.listItem}
                    onPress={pressHandler.bind(this)}>
                    <BodyText>{item.title}</BodyText>
                </MyDefaultTouchable>
            </View>
        );
    };
    return (
        <FlatList
            keyExtractor={item=>item.id}
            data = {props.listData}
            renderItem={listItem}
        />
    );
}

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20,
        backgroundColor: Colors.default,
        margin: 10,
    }

});
