import { View, FlatList } from 'react-native'
import React from 'react'

import { CATEGORIES } from '../../data/dummy-data'
import CatigoriesGridTile from '../../componnents/categorieGridTile/CatigoriesGridTile'

const CategoriesScreen = ({ navigation }) => {
  const handleNavigation = (catId) => {
    navigation.navigate('MealsOverview', { catId })
  }
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(catg) => catg.id}
        renderItem={(catg) => (
          <CatigoriesGridTile
            {...catg.item}
            onPress={() => handleNavigation(catg.item.id)}
          />
        )}
        numColumns={2}
      />
    </View>
  )
}

export default CategoriesScreen
