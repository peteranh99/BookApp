import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import BodyText from '../../components/BodyText';
import CustomHeaderButton from '../../components/CustomHeaderButton';
import DrawerToggler from '../../components/DrawerToggler';
import Screen from '../../components/Screen';
import TitleText from '../../components/TitleText';
import Colors from '../../constants/Colors';

const switches = [{
    name: 'latest',
    value: false,
}, {
    name: 'best seller',
    value: false,
},{
    name: 'having discount',
    value: false,
}];

const FilterItem = ({item, changeSwitchHandler, index})=>{

    return (
        <View style={styles.filterContainer}>
            <BodyText style={styles.switchLabel}>{item.name}</BodyText>
            <Switch value={item.value}
                onValueChange={(newVal)=>{changeSwitchHandler( item.name, newVal);}}
                thumbColor={Colors.primary}
                trackColor={{
                    true: Colors.primary,
                    false: Colors.grey,
                }}
            />
        </View>
    );
};

export default function FilterScreen(props) {
    const [filters, setFilters] = useState(switches);

    useEffect(()=>{
        props.navigation.setParams({
            saveFilters: saveFiltersHandler
        });
    }, [filters]);

    const changeSwitchHandler = (name, value)=>{
        const items = filters.slice(0);
        const item = items.find(item => item.name === name);
        item.value =value;
        setFilters(items);
    };

    const saveFiltersHandler = ()=>{
    };

    return (
        <Screen style={styles.screen}>
            <TitleText>Available Filters</TitleText>
            <View style={styles.filterWrapper}>
                {
                    filters.map((item, index)=>{
                        return <FilterItem key={index}
                            item={item}
                            changeSwitchHandler={changeSwitchHandler}
                            index={index}/>;
                    })
                }
            </View>
        </Screen>
    );
}

FilterScreen.navigationOptions = (props)=>{
    const pressIconHandler = ()=>{
        props.navigation.getParam('saveFilters')();
    };

    return {
        headerLeft: DrawerToggler.bind(this, props),
        headerRight: ()=>{
            return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title="save"
                        iconName="ios-save"
                        style={styles.headerRightIcon}
                        onPress={pressIconHandler.bind(this)} />
                </HeaderButtons>
            );
        }
    };
};

const styles = StyleSheet.create({
    screen: {
        padding: 10
    },
    filterWrapper: {
        marginVertical: 20,
    },
    filterContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30
    },
    switchLabel: {
        textTransform: 'capitalize'
    },
    headerRightIcon: {
        marginRight: 10,
    }

});