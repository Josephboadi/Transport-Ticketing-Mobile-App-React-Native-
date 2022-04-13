import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    marginRight: 10,
    paddingRight: 40,
  },
  name: {
    alignSelf: 'center',
    // fontWeight: 'bold',
    color: '#4f4f4f',
    marginRight: 10,
  },
  text: {
    // alignSelf: 'center',
    fontWeight: 'bold',
    color: '#4f4f4f',
  },
  createdAt: {
    alignSelf: 'center',
    color: '#4f4f4f',
  },
  left: {
    flexDirection: 'row',
    paddingRight: 10,
    marginRight: 10,
  },
  right: {
    marginRight: 10,
  },
});

export default styles;
