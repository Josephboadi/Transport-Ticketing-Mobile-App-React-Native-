import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/Dimensions';
// import CircularProgress from '@material-ui/core/CircularProgress';

const FormButtonCan = ({loading, buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      {/* {loading ? <CircularProgress size={30} /> : null} */}
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButtonCan;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,

    width: '45%',
    height: windowHeight / 20,
    backgroundColor: 'red',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },
});
