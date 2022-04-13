import React from 'react';
import {Image, Pressable, View} from 'react-native';
import ProgressiveImage from '../../../ProgressiveImage';

import styles from './styles';

const Body = ({imageUri, onPress}) => {
  // const {
  //   imageUri: {imageUri},
  // } = props;
  // const navigation = useNavigation();

  // const goToPostPage = () => {
  //   navigation.navigate('Post', {postId: post.id});
  // }
  return (
    <Pressable onPress={onPress}>
      {imageUri !== null ? (
        <ProgressiveImage
          defaultImageSource={require('../../../../assets/default-img.jpg')}
          source={{uri: imageUri}}
          style={styles.image}
        />
      ) : (
        <View style={styles.imageV} />
        // <Image source={{uri: imageUri}} style={styles.image} />
      )}
    </Pressable>
  );
  // <Image source={imageUri} style={styles.image} />;
  // {uri: imageUri}
};

export default Body;
