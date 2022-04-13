import React, {useContext, useState, useEffect} from 'react';
import {
  Alert,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfilePicture from '../../../ProfilePicture';
import styles from './styles';

import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {AuthContext} from '../../../../router/AuthProvider';

const Header = ({imageUri, name, userId, onDelete, onPress}) => {
  const {user} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.left}>
          <ProfilePicture uri={imageUri} size={40} />
          <Text style={styles.name}>{name}</Text>
        </View>
      </TouchableOpacity>
      {/* {user.uid === userId ? ( */}
      <View style={styles.right}>
        <TouchableOpacity onPress={() => onDelete()}>
          <Icon name="md-trash-bin" size={20} color={'#545454'} />
          {/* <Icon name="dots-three-vertical" size={16} /> */}
        </TouchableOpacity>
      </View>
      {/* // ) : null} */}
    </View>
  );
};

export default Header;
