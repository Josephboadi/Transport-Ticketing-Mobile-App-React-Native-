import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/Dimensions';
// import CircularProgress from '@material-ui/core/CircularProgress';

const FormButtonRe = ({loading, buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      {/* {loading ? <CircularProgress size={30} /> : null} */}
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButtonRe;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '48%',
    height: windowHeight / 20,
    backgroundColor: '#87c830',
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
