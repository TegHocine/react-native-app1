import { StyleSheet } from 'react-native'

const CategoriesGridTileStyle = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15
  },
  button: {
    flex: 1
  },
  innerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  pressed: { opacity: 0.6 }
})

export default CategoriesGridTileStyle
