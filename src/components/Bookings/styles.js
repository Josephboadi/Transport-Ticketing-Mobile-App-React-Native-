import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // height: 120,
    padding: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: '#87c830',
    borderWidth: 1,
  },

  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },

  trips: {
    // marginVertical: 10,
    marginTop: 10,
    color: '#5b5b5b',
  },
  trip: {
    marginVertical: 10,
    color: '#5b5b5b',
    fontWeight: 'bold',
    // alignSelf: 'center',
  },

  description: {
    fontSize: 15,
  },
  prices: {
    fontSize: 15,
    marginVertical: 10,
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  pricee: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 35,
    marginTop: 8,

    color: 'blue',
    // marginRight: 6,
  },
  pricee1: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 35,
    marginTop: 8,

    color: 'red',
    // marginRight: 6,
  },
  pricee2: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 35,
    marginTop: 8,

    color: 'orange',
    // marginRight: 6,
  },
  price: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },
  searchButton: {
    backgroundColor: '#fff',
    borderColor: '#E6E6E6',
    borderWidth: 1,
    height: 60,
    width: Dimensions.get('screen').width - 40,
    borderRadius: 30,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 50,
    zIndex: 100,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});

export default styles;
