import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#4f4f4f',
  },
  left: {
    flexDirection: 'row',
  },
  right: {
    marginRight: 10,
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
    borderWidth: 1,
    borderColor: '#8c8c8c',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 50,
    height: 50,
  },
});

export default styles;
