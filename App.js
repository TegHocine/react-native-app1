import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoriesScreen from './screens/categoriesScreen/CategoriesScreen'
import Overview from './screens/overview/Overview'

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
