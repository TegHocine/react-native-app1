import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  mealItem: {
    flex: 1,
    backgroundColor: 'white',
    overflow: 'hidden',
    elevation: 1
  },
  imageStyle: {
    width: '100%',
    height: 200
  },
  mealInfo: {
    padding: 15
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
    marginRight: 10,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: 'gray',
    color: 'white'
  },
  ingredients: {
    flex: 1,
    marginVertical: 10
  },
  steps: {
    marginBottom: 30
  }
})

export default styles
