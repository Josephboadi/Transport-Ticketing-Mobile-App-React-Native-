import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {InputField, InputWrapper} from '../../styles/AddPost';
import DetailedPost from '../../components/DetailedPost';
import {useRoute} from '@react-navigation/native';

// import places from '../../assets/data/feed';
import posts from '../../assets/data/feed';
import Post from '../../components/Post/posts';

const PostScreen = () => {
  const route = useRoute();

  const post = posts.find(place => place.id === route.params.postId);
  // const { posts } = props;

  return (
    <View style={{backgroundColor: 'white'}}>
      <DetailedPost post={post} />
    </View>
    // <View>
    //   <FlatList data={posts} renderItem={({item}) => <Post post={item} />} />
    // </View>
  );
};

export default PostScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
