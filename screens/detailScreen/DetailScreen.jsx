import { View, Text, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'

import { MEALS } from '../../data/dummy-data'
import styles from './DetailScreen.style'

const DetailScreen = ({ route }) => {
  const { mealId } = route.params
  const meal = MEALS.find((meal) => meal.id === mealId)

  return (
    <View style={styles.mealItem}>
      <View>
        <Image
          style={styles.imageStyle}
          source={{ uri: meal?.imageUrl }}
        />
      </View>
      <ScrollView style={styles.mealInfo}>
        <Text style={styles.title}>{meal?.title}</Text>
        <View style={styles.details}>
          <Text style={styles.detailsItem}>{meal?.duration}m</Text>
          <Text style={styles.detailsItem}>
            {meal?.affordability.toUpperCase()}
          </Text>
          <Text style={styles.detailsItem}>
            {meal?.complexity.toUpperCase()}
          </Text>
        </View>

        <View style={styles.ingredients}>
          {meal?.ingredients.map((ingre, index) => (
            <Text
              key={index}
              style={styles.ingredientsItem}>
              {`${index + 1}. ${ingre}`}
            </Text>
          ))}
        </View>
        <Text style={styles.steps}>{meal?.steps}</Text>
      </ScrollView>
    </View>
  )
}

export default DetailScreen
