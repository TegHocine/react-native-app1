import { StyleSheet } from 'react-native'

const overviewStyle = StyleSheet.create({
  mealItem: {
    margin: 16,
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 1
  },
  imageStyle: {
    width: '100%',
    height: 200
  },
  mealInfo: {
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: '600'
  },
  details: {
    flexDirection: 'row',

    marginTop: 16,
    marginBottom: 5
  },
  detailsItem: {
    marginRight: 10
  },
  pressed: { opacity: 0.75 }
})
export default overviewStyle
