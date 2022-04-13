import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const Body = ({imageUri}) => {
  // const {
  //   imageUri: {imageUri},
  // } = props;
  return <Image source={imageUri} style={styles.image} />;
  // <Image source={{uri: imageUri}} style={styles.image} />;

  // {uri: imageUri}
};

export default Body;
