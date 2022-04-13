import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#4f4f4f',
  },
  left: {
    flexDirection: 'row',
  },
  right: {
    marginRight: 10,
  },
});

export default styles;
