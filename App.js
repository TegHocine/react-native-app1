import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoriesScreen from './screens/categoriesScreen/CategoriesScreen'
import Overview from './screens/overview/Overview'
import DetailScreen from './screens/detailScreen/DetailScreen'

const { Navigator, Screen } = createNativeStackNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <NavigationContainer>
        <Navigator>
          <Screen
            name='MealsCategories'
            component={CategoriesScreen}
            options={{
              title: 'Meals Categories'
            }}
          />
          <Screen
            name='MealsOverview'
            component={Overview}
          />
          <Screen
            name='MealsDetail'
            component={DetailScreen}
          />
        </Navigator>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
