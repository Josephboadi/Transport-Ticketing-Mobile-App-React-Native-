import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
  ScrollView,
  Dimensions,
} from 'react-native';
import moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';
import {
  fetchAvailableTrip,
  fetchClient,
  getBooking,
  getBookings,
} from '../../redux/actions/dataActions.js';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {useDispatch, useSelector} from 'react-redux';
// import post from '../../assets/data/feed'

const Bookings = props => {
  const dispatch = useDispatch;
  const bookings = props.bookings;
  const [pod, setPod] = useState('');
  const width = useWindowDimensions().width;
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

  const navigation = useNavigation();

  useEffect(() => {
    setPod(bookings);
  }, []);

  // console.log(bookings.trips[0]);

  // console.log(getAllBookings);

  // const getBookingsFx = () => {
  //   dispatch(getBookings());
  // };

  // useEffect(() => {
  //   if (!authenticated) {
  //     navigation.navigate('LoginPage');
  //   } else {
  //     getBookingsFx;
  //     // dispatch(getBookings());
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [getAllBookings]);

  // console.log(bookings);
  // console.log(authenticated);

  const handleSubmitBook = id => {
    // dispatch(getBooking(id));
    if (!loading) {
      // navigation.navigate('BookTicket', {postId: post.id});
      navigation.navigate('BookingsDetail', {id: id});
    }
  };

  return (
    <>
      {!pod ? (
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
      ) : (
        <ScrollView>
          {/* {getAllBookings.map(bookings => { */}
          <Pressable
            key={bookings._id}
            onPress={() => handleSubmitBook(bookings._id)}
            style={[styles.container, {width: width, marginVertical: 5}]}>
            <View style={styles.innerContainer}>
              {/* Image  */}
              {/* <Image style={styles.image} source={{uri: post.image}} /> */}
              <View
                style={{
                  height: '100%',
                  width: 80,
                  // backgroundColor: '#6C63FF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRightColor: '#87c830',
                  borderRightWidth: 1,
                  borderTopRightRadius: 4,
                  borderBottomRightRadius: 4,
                  // color: 'white',
                }}>
                <FontAwesome name="ticket" size={30} color={`#87c830`} />
                <Text
                  style={{
                    fontSize: 15,
                    color: '#87c830',
                    fontWeight: 'bold',
                    marginTop: 8,
                  }}>
                  Detail
                </Text>
              </View>

              <View style={{flex: 1, marginHorizontal: 10}}>
                {/* Bed & trip  */}
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.trips}>{bookings.ticketId}</Text>
                  {bookings?.status === 'Booked' ? (
                    <Text style={styles.pricee}>{bookings?.status}</Text>
                  ) : bookings?.status === 'Rescheduled' ? (
                    <Text style={styles.pricee2}>{bookings?.status}</Text>
                  ) : (
                    <Text style={styles.pricee1}>{bookings?.status}</Text>
                  )}
                </View>

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.trip}>
                    {bookings.trips[0].trip.from.name}
                    {`-`}
                    {''}
                    {bookings.trips[0].trip.to.name}
                    {/* {` `} {` `} {` `} {` `}
                    {`Seat No. ${bookings.seatNumber}`} */}
                  </Text>
                  <Text style={styles.trip}>
                    {moment(bookings.trips[0].trip.date).format('DD MMM, YYYY')}
                    {','}
                    {` `}{' '}
                    {`${moment(bookings.trips[0].trip.time).format('hh:mm A')}`}
                    {/* {` `} {` `}{' '}
                    {`Seat No. ${bookings.seatNumber}`} */}
                  </Text>
                </View>
                {/* <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    // justifyContent: 'space-between',
                  }}>
                  
                </View> */}
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Text style={styles.trip}>
                    {`BNo. ${`:`}${``} ${
                      bookings.trips[0].trip.vehicle.regNumber
                    }`}
                  </Text>
                  <Text style={styles.trip}>
                    {/* {bookings.trips[0].trip.from.name} {` - `}{' '}
                    {bookings.trips[0].trip.to.name} {` `} {` `} {` `} {` `} */}
                    {`Seat No. ${bookings.seatNumber}`}
                  </Text>
                </View>

                {/*  Old price & new price */}
                {/* <Text style={styles.prices}>
                  <Text style={styles.price}>
                    Ghc{bookings.totalPrice}
                  </Text>
                </Text> */}
                {/* <Text style={styles.trips}>
                 
                  {bookings.isPaid ? (
                    moment(bookings.paidAt).format('DD MMM, YYYY')
                  ) : (
                    <FontAwesome name="times" size={20} color="#f8e825" />
                  )}
                 
                </Text> */}
              </View>
            </View>
          </Pressable>
          {/* })} */}
        </ScrollView>
      )}
    </>
  );
};

export default Bookings;
