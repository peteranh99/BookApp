import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../CustomHeaderButton';

export default function DrawerToggler(props) {
    const pressIconHandler = ()=>{
        props.navigation.toggleDrawer();
    };
    return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="menu"
                iconName="ios-menu"
                style={styles.container}
                onPress={pressIconHandler.bind(this)} />
        </HeaderButtons>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
    }
});
