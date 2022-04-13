import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },

  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },

  leftItems: {
    flexDirection: 'row',
    width: 90,
    justifyContent: 'space-between',
  },

  rightItems: {
    flexDirection: 'row',
    width: 90,
    justifyContent: 'space-between',
  },

  likes: {
    fontWeight: 'bold',
    margin: 3,
  },
  caption: {
    margin: 3,
  },
  postedAt: {
    color: '#8c8c8c',
    margin: 3,
  },
});

export default styles;
