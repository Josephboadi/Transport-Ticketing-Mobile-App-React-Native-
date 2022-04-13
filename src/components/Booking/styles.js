import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 0,
    height: Dimensions.get('screen').height,
    // justifyContent: 'space-between',
    // backgroundColor: 'gray',
    // opacity: 0.1,
  },
  image: {
    width: 50,
    height: 40,
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  description: {
    // marginTop: 10,
    fontSize: 15,
    lineHeight: 16,
    color: 'black',
  },
  prices: {
    fontSize: 12,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  prices1: {
    fontSize: 18,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  oldPrice: {
    fontSize: 25,
    color: '#5b5b5b',
    // textDecorationLine: 'line-through',
  },
  pricee: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 35,

    color: 'blue',
    // marginRight: 6,
  },
  pricee1: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 35,

    color: 'red',
    // marginRight: 6,
  },
  pricee2: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 35,

    color: 'orange',
    // marginRight: 6,
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 35,

    // color: '#646464',
    // marginRight: 6,
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
