import React from 'react';
import {Image, View} from 'react-native';
// import img from '../../assets/images/profile1.png';
import styles from './styles';

// {
//   uri: uri,
// }

const ProfilePicture = ({uri, size = 60}) => {
  return (
    <View style={[styles.container, {width: size + 6, height: size + 6}]}>
      <Image
        source={{
          uri: `${uri}`,
        }}
        style={[styles.image, {width: size, height: size}]}
      />
    </View>
  );
};

export default ProfilePicture;
