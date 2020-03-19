import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';


const FavouritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favouriteMeals);

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Favourites',
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title='Menu'
            iconName='ios-menu'
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    }
  };
};

export default FavouritesScreen;
