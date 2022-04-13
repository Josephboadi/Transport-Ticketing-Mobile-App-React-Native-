import React, {useEffect, useState} from 'react';
import {View, FlatList, Pressable, Text, Dimensions} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Trips from '../../components/Trips';
import posts from '../../assets/data/feed';
// import Feed from '../../components/Feed';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchClient, getBookings} from '../../redux/actions/dataActions';
import styles from './styles';
import Bookings from '../../components/Bookings';
import {ScrollView} from 'react-native-gesture-handler';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const BookingsScreen = props => {
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true);
  const {loading} = useSelector(state => state.data);
  const {
    account: {role},
    authenticated,
    firstName,
    lastName,
    pic,
    address,
    imageUrl,
  } = useSelector(state => state.auth);
  const getAllBookings = useSelector(state => state.data.bookings);

  const route = useRoute();
  const navigation = useNavigation();

  // const clients = useSelector(state => state.data.clients);
  // const {posts} = props;
  // console.log(availableFutureTrip);
  // console.log(loading);
  // console.log(route);
  useEffect(() => {
    if (!authenticated) {
      navigation.navigate('Login');
    } else {
      // setLoading(true);
      dispatch(getBookings());
      // setLoading(false);
    }
  }, [dispatch, authenticated]);

  return (
    // <SafeAreaView>
    // <Feed />
    // </SafeAreaView>

    <>
      {/* <Pressable style={styles.searchButton} onPress={() => onPress()}>
        <Fontisto name="search" size={25} color={'#6C63FF'} />
        <Text style={styles.searchButtonText}>Search Trip</Text>
      </Pressable> */}

      {!authenticated ? (
        navigation.navigate('Login')
      ) : !loading ? (
        getAllBookings.length > 0 ? (
          <View style={{marginTop: 20}}>
            <FlatList
              data={getAllBookings}
              keyExtractor={getAllBookings => getAllBookings._id}
              renderItem={({item}) => <Bookings bookings={item} />}
              refreshing={loading}
              onRefresh={() => dispatch(getBookings())}
            />
          </View>
        ) : (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: Dimensions.get('screen').height,
            }}>
            <Text style={{color: 'gray', fontSize: 25}}>
              No Bookings Available
            </Text>
          </View>
        )
      ) : (
        <View style={{height: 250000}}>
          <ScrollView
            style={{flex: 1, height: 3500}}
            contentContainerStyle={{alignItems: 'center', height: 3500}}>
            <SkeletonPlaceholder>
              <View style={{marginTop: 10}}>
                <View
                  style={{
                    marginTop: 6,
                    width: Dimensions.get('window').width - 20,
                    height: 105,
                    borderRadius: 20,
                  }}
                />
              </View>
              <View style={{marginTop: 10}}>
                <View
                  style={{
                    marginTop: 6,
                    width: Dimensions.get('window').width - 20,
                    height: 105,
                    borderRadius: 20,
                  }}
                />
              </View>
              <View style={{marginTop: 10}}>
                <View
                  style={{
                    marginTop: 6,
                    width: Dimensions.get('window').width - 20,
                    height: 105,
                    borderRadius: 20,
                  }}
                />
              </View>
              <View style={{marginTop: 10}}>
                <View
                  style={{
                    marginTop: 6,
                    width: Dimensions.get('window').width - 20,
                    height: 105,
                    borderRadius: 20,
                  }}
                />
              </View>
              <View style={{marginTop: 10}}>
                <View
                  style={{
                    marginTop: 6,
                    width: Dimensions.get('window').width - 20,
                    height: 105,
                    borderRadius: 20,
                  }}
                />
              </View>
            </SkeletonPlaceholder>
          </ScrollView>
        </View>
      )}
      {/* <Bookings /> */}
    </>
  );
};

export default BookingsScreen;
