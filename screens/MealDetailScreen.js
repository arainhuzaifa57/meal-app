import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';

import { MEALS } from '../data/dummy-data';

const MealDetailScreen = (props) => {
    const MealId = props.navigation.getParam('mealIds');
    const selectedMeal = MEALS.find((meal) => meal.id === MealId);
    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button
                title='Go back to main screen'
                onPress={() => {
                    // With method popToTop we can go back to the main screen..
                    props.navigation.popToTop();
                }}
            />
        </View>
    );
};

MealDetailScreen.navigationOptions = (navigationData) => {
    const MealId = navigationData.navigation.getParam('mealIds');
    const selectedMeal = MEALS.find((meal) => meal.id === MealId);
    return {
        headerTitle: selectedMeal.title,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='Favorites'
                    iconName='ios-star'
                    onPress={() => {
                        console.log('Mask As Favorite');
                    }}
                />
            </HeaderButtons>
        ),
    };
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MealDetailScreen;
