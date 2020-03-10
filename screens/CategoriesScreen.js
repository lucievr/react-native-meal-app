import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const renderGridItem = itemData => {
  return (
    <View style={styles.gridItem}>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};

const CategoriesScreen = props => {
  return (
      <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />
      /* <Button
        title='Go to Meals'
        onPress={() => {
          props.navigation.navigate({
           // special props navigation with method navigate
            routeName: 'CategoryMeals'
          });
        }}
      /> */
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoriesScreen;
