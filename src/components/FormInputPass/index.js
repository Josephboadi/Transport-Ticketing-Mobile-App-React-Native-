import React, {useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AntDesign from 'react-native-vector-icons/AntDesign';

const FormInputPass = ({
  labelValue,
  placeholderText,
  iconType,
  // iconType1,
  // onPress,
  // icon,
  // iconPosition,
  ...rest
}) => {
  const [secured, setSecured] = useState(true);
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <AntDesign name={iconType} size={25} color="#666" />
      </View>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        secureTextEntry={secured}
        {...rest}
      />
      <TouchableOpacity
        style={styles.iconStyle}
        onPress={() => setSecured(prev => !prev)}>
        <Ionicons
          name={secured ? 'md-eye-off' : 'md-eye'}
          size={25}
          color="#666"
        />
      </TouchableOpacity>
    </View>
  );
};

export default FormInputPass;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    // borderColor: '#ccc',
    borderColor: '#87c830',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
