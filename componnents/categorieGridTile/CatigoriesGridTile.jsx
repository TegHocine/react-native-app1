import { View, Text, Pressable } from 'react-native'
import React from 'react'

import CategoriesGridTileStyle from './CategoriesGridTile.style'
const CatigoriesGridTile = ({ title, color, onPress }) => {
  return (
    <View style={CategoriesGridTileStyle.gridItem}>
      <Pressable
        style={({ pressed }) => [
          CategoriesGridTileStyle.button,
          pressed && CategoriesGridTileStyle.pressed
        ]}
        onPress={() => onPress()}>
        <View
          style={[
            CategoriesGridTileStyle.innerWrapper,
            { backgroundColor: color }
          ]}>
          <Text style={CategoriesGridTileStyle.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CatigoriesGridTile
