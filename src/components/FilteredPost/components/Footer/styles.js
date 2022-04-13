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
    width: 100,
    justifyContent: 'space-between',
  },

  rightItems: {
    flexDirection: 'row',
    width: 90,
    justifyContent: 'space-between',
  },

  bottomContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 15,
    marginHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },

  textInputContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#8c8c8c',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    // borderRadius: 50,
    height: 50,
  },

  messageButton: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
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
  commentHeader: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  commentBody: {
    width: '100%',
    height: Dimensions.get('window').width,
    // padding: 15,
  },
});

export default styles;
