import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },

  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    // paddingVertical: 6,
  },

  leftItems: {
    flexDirection: 'row',
    width: 150,
    justifyContent: 'space-between',
  },

  line: {
    borderWidth: 1,
    borderColor: '#87c830',
    alignSelf: 'center',
    width: Dimensions.get('window').width - 10,
    marginTop: 10,
  },

  rightItems: {
    flexDirection: 'row',
    width: 150,
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
    marginVertical: 1,
    // marginTop: -5,
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#87c830',
  },
  postedAt: {
    color: '#8c8c8c',
    marginVertical: 1,
    marginHorizontal: 10,
    marginBottom: 10,
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
