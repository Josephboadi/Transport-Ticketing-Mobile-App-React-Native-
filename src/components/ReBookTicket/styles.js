import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 0,
    height: Dimensions.get('window').height,
    // justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    alignSelf: 'center',
    aspectRatio: 3.5 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  // image: {
  //   width: Dimensions.get('window').width - 20,
  //   height: Dimensions.get('window').width - 120,
  //   // aspectRatio: 3 / 2,
  //   resizeMode: 'cover',
  //   borderRadius: 10,
  // },
  imageV: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    width: '100%',
    alignSelf: 'center',
    marginTop: 15,
  },

  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  description: {
    marginTop: 15,
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 26,
    color: 'black',
  },
  prices: {
    fontSize: 16,
    marginVertical: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
  },
  prices1: {
    fontSize: 16,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  oldPrice: {
    marginTop: 15,
    fontSize: 15,
    color: '#5b5b5b',
    // textDecorationLine: 'line-through',
  },
  oldPrice1: {
    fontSize: 15,
    color: '#5b5b5b',
    // marginLeft: 20,
    // textDecorationLine: 'line-through',
  },
  price: {
    marginTop: 15,
    fontSize: 15,
    fontWeight: 'bold',
    // marginLeft: 10,
  },
  priced: {
    // marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    // marginLeft: 10,
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#676767',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paybutton: {
    width: '100%',
    height: 40,
    backgroundColor: '#6c63ff',
    color: 'white',
    margin: 5,
    borderRadius: 20,
    // border: 'none',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
});

export default styles;
