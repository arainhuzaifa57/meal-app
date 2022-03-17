import React from 'react';
import { View, Text, StyleSheet, Button, Platform, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
// import Colors from '../constants/Colors';

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');

  // const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  const displayedMeal = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);
  return <MealList listData={displayedMeal} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  // console.log(navigationData)
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
    // headerStyle: {
    //     backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    // },
    // headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  };
};

export default CategoryMealsScreen;
