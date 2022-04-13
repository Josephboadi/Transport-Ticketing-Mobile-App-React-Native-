import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  // image: {
  //   width: '100%',
  //   height: 500,
  //   resizeMode: 'contain',
  //   // justifyContent: 'center',
  // },
  // title: {
  //   marginTop: 200,
  //   fontSize: 25,
  //   fontWeight: 'bold',
  //   color: '#6C63FF',
  //   width: '70%',
  //   marginLeft: 15,
  // },
  // title2: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   color: '#6C63FF',
  //   width: '70%',
  //   marginLeft: 15,
  // },
  // button: {
  //   backgroundColor: '#6C63FF',
  //   width: 230,
  //   height: 50,
  //   // borderRadius: 25,
  //   borderTopRightRadius: 40,
  //   borderBottomLeftRadius: 40,
  //   marginTop: 10,
  //   marginLeft: 15,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   // padding: 10,
  // },
  // buttonText: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   color: '#fff',
  // },

  searchButton: {
    backgroundColor: '#fff',
    borderColor: '#87c830',
    borderWidth: 2,
    height: 60,
    width: Dimensions.get('screen').width - 40,
    borderRadius: 30,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    paddingHorizontal: 20,
    top: 10,
    zIndex: 100,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});

export default styles;
