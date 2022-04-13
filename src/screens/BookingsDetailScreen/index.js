import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {InputField, InputWrapper} from '../../styles/AddPost';
import BookPaymentTicket from '../../components/BookPaymentTicket';
import {useRoute} from '@react-navigation/native';

// import places from '../../assets/data/feed';
import posts from '../../assets/data/feed';
import Post from '../../components/Post/posts';
import {useDispatch, useSelector} from 'react-redux';
import Booking from '../../components/Booking';
import {getBooking} from '../../redux/actions/dataActions';

const BookingsDetailScreen = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const [loading, setLoading] = useState(true);

  // const {loading} = useSelector(state => state.data);
  // const availableTrip = useSelector(state => state.data.availableTrip);

  // const post = posts.find(place => place.id === route.params.postId);
  // const { posts } = props;
  useEffect(() => {
    // setAuthenticated1(authenticated);
    // if (authenticated1) {
    setLoading(true);
    dispatch(getBooking(route.params.id));
    setLoading(false);
    // }
    // console.log(getSingleBooking);
  }, []);

  return (
    <View style={{backgroundColor: 'white'}}>
      {!loading ? (
        <Booking
        // post={availableTrip}
        />
      ) : null}
    </View>
    // <View>
    //   <FlatList data={posts} renderItem={({item}) => <Post post={item} />} />
    // </View>
  );
};

export default BookingsDetailScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
