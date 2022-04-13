import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
// import userImage3 from '../../assets/users/user-3.jpg';
// import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
// import Animated from 'react-native-reanimated';
// import BottomSheet from 'reanimated-bottom-sheet';
// import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
// import Messages from '../Messages';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import ProfilePicture from '../ProfilePicture';

const Post = ({
  post,
  onDelete,
  loading,
  onPress,
  onPreview,
  onCapPress,
  msgLength,
  onIdPress,
  // key,
}) => {
  // console.log(post);
  return (
    <View style={{borderTopColor: '#C3CFDD', borderTopWidth: 1, padding: 15}}>
      <>
        {/* <Header
          imageUri={userImage3}
          name={post.user.name}
          userId={post.userId}
          onDelete={() => onDelete(post.id)}
          onPress={onPress}
        /> */}

        <Body imageUri={post.imageUrl[0].img} onPress={onPress} />
        <Footer
          title={post.motto}
          type={post.name}
          msgLength={msgLength}
          // likesCount={post.likesCount}
          // postedAt={post.postedAt}
          // caption={post.caption}
          // onIdPress={post._id}
          // onPreview={onPreview}
          // msg={post.length}
          onCapPress={onCapPress}
        />
      </>
    </View>
  );
};

export default Post;
