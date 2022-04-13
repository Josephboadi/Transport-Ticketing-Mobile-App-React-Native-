import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width - 10,
    alignSelf: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').width - 160,
    // aspectRatio: 3 / 2,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  imageV: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    alignSelf: 'center',
    width: '92%',
    alignSelf: 'center',
    marginTop: 15,
  },
});

export default styles;
