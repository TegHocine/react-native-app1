import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React, { useEffect } from 'react'

import overviewStyle from './Overview.style'

import { MEALS, CATEGORIES } from '../../data/dummy-data'

const Overview = ({ route, navigation }) => {
  const { catId } = route.params

  const meals = MEALS.filter((meal) => meal.categoryIds.includes(catId))

  const category = CATEGORIES.find((category) => category.id === catId).title

  useEffect(() => {
    navigation.setOptions({
      title: category
    })
  }, [catId, navigation])

  return (
    <View>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <MealsItem {...item} />}
      />
    </View>
  )
}

const MealsItem = ({ item }) => {
  const { title, imageUrl, affordability, complexity, duration } = item

  return (
    <View style={overviewStyle.mealItem}>
      <Pressable
        style={({ pressed }) => (pressed ? overviewStyle.pressed : null)}>
        <View>
          <Image
            source={{ uri: imageUrl }}
            style={overviewStyle.imageStyle}
          />
        </View>
        <View style={overviewStyle.mealInfo}>
          <Text style={overviewStyle.title}>{title}</Text>
          <View style={overviewStyle.details}>
            <Text style={overviewStyle.detailsItem}>{duration}m</Text>
            <Text style={overviewStyle.detailsItem}>
              {affordability.toUpperCase()}
            </Text>
            <Text style={overviewStyle.detailsItem}>
              {complexity.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

export default Overview
