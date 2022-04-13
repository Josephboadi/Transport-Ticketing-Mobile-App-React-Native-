import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {InputField, InputWrapper} from '../../styles/AddPost';
import ReBookTicket from '../../components/ReBookTicket';
import {useRoute} from '@react-navigation/native';

// import places from '../../assets/data/feed';
import posts from '../../assets/data/feed';
import Post from '../../components/Post/posts';
import {useSelector} from 'react-redux';

const ReBookingScreen = () => {
  // const route = useRoute();
  // const {loading} = useSelector(state => state.data);
  // const availableTrip = useSelector(state => state.data.availableTrip);

  // const post = posts.find(place => place.id === route.params.postId);
  // const { posts } = props;

  return (
    <View style={{backgroundColor: 'white'}}>
      <ReBookTicket
      // post={availableTrip}
      />
    </View>
    // <View>
    //   <FlatList data={posts} renderItem={({item}) => <Post post={item} />} />
    // </View>
  );
};

export default ReBookingScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
