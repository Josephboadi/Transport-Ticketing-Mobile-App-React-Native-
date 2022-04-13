import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import styles from './styles.js';
// import {} from './style.css';
import SelectDropdown from 'react-native-select-dropdown';
import {useNavigation, useRoute} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {useDispatch, useSelector} from 'react-redux';
// import PaystackWebView from 'react-native-paystack-webview';
import PaystackWebView from 'react-native-paystack-popup';
import {
  changeTicketsCount,
  fetchAvailableTrip,
  getCart,
  placeBooking,
} from '../../redux/actions/dataActions.js';
import img from '../../assets/seat.png';
import {FlatList} from 'react-native-gesture-handler';

const BookPaymentTicket = props => {
  const dispatch = useDispatch();
  const seats = props.seats;
  const cart = props.cart;
  const [pod, setPod] = useState('');

  const [authenticated1, setAuthenticated1] = useState(false);
  // const post = props.post;
  // const [pod, setPod] = useState([]);
  // const {loading, cart, price} = useSelector(state => state.data);
  const {
    account: {role},
    authenticated,
    firstName,
    lastName,
    pic,
    address,
    imageUrl,
  } = useSelector(state => state.auth);

  const route = useRoute();

  const navigation = useNavigation();

  useEffect(() => {
    setPod(seats);
  }, []);

  // useEffect(() => {
  //   setAuthenticated1(authenticated);
  //   if (authenticated1) {
  //     dispatch(getCart());
  //   }
  // }, [authenticated1]);

  // useEffect(() => {
  //   setPod(cart);
  // }, [cart]);

  // console.log(cart);

  //   calculate prices
  const addDecimals = num => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  let tripPrice;
  let taxPrice;
  let tripCost;
  let quantity;

  // if (!loading) {
  tripPrice = addDecimals(
    cart?.reduce((acc, trip) => acc + trip.tripId.fare * 1, 0),
  );

  quantity = 1;

  taxPrice = addDecimals(Number((0.15 * tripPrice).toFixed(2)));
  tripCost = (Number(tripPrice) - Number(taxPrice)).toFixed(2);
  // }

  const handleSubmitBooking = data => {
    const body1 = {
      seatId: data?.id,
    };
    const body = {
      seatId: data?.id,
    };

    const bookingData = {
      taxPrice: taxPrice,
      totalPrice: tripPrice,
      ticketId: `${cart[0].tripId._id.substring(0, 8)}-${data?.seatNumber}`,
      seatNumber: data.seatNumber,
      seatId: data?.id,
    };

    if (cart[0].quantity > 1) {
      const tripId = cart[0].tripId._id;
      dispatch(placeBooking(bookingData, tripId, body));
    } else {
      const tripId = cart[0].tripId._id;
      dispatch(placeBooking(bookingData, tripId, body));

      navigation.navigate('Bookings');
    }
  };

  return (
    <>
      {!pod ? (
        <View style={{height: 25000}}>
          <ScrollView
            style={{flex: 1}}
            contentContainerStyle={{alignItems: 'center'}}>
            <SkeletonPlaceholder>
              <View style={{marginTop: 10, marginBottom: 30}}>
                <View
                  style={{
                    marginTop: 6,
                    width: Dimensions.get('window').width,
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      margin: 4,
                      height: 100,
                      width: 80,
                      borderTopLeftRadius: 20,
                      borderBottomRightRadius: 20,
                    }}
                  />

                  <View
                    style={{
                      flex: 1,
                      margin: 4,
                      height: 100,
                      width: 80,
                      borderTopLeftRadius: 20,
                      borderBottomRightRadius: 20,
                    }}
                  />

                  <View
                    style={{
                      flex: 1,
                      margin: 4,
                      height: 100,
                      width: 80,
                      borderTopLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      // padding: 8,
                    }}
                  />

                  <View
                    style={{
                      flex: 1,
                      margin: 4,
                      height: 100,
                      width: 80,
                      borderTopLeftRadius: 20,
                      borderBottomRightRadius: 20,
                    }}
                  />
                </View>

                <View
                  style={{
                    marginTop: 6,
                    width: Dimensions.get('window').width,
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      margin: 4,
                      height: 100,
                      width: 80,
                      borderTopLeftRadius: 20,
                      borderBottomRightRadius: 20,
                    }}
                  />

                  <View
                    style={{
                      flex: 1,
                      margin: 4,
                      height: 100,
                      width: 80,
                      borderTopLeftRadius: 20,
                      borderBottomRightRadius: 20,
                    }}
                  />

                  <View
                    style={{
                      flex: 1,
                      margin: 4,
                      height: 100,
                      width: 80,
                      borderTopLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      // padding: 8,
                    }}
                  />

                  <View
                    style={{
                      flex: 1,
                      margin: 4,
                      height: 100,
                      width: 80,
                      borderTopLeftRadius: 20,
                      borderBottomRightRadius: 20,
                    }}
                  />
                </View>

                <View
                  style={{
                    marginTop: 6,
                    width: Dimensions.get('window').width,
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      margin: 4,
                      height: 100,
                      width: 80,
                      borderTopLeftRadius: 20,
                      borderBottomRightRadius: 20,
                    }}
                  />

                  <View
                    style={{
                      flex: 1,
                      margin: 4,
                      height: 100,
                      width: 80,
                      borderTopLeftRadius: 20,
                      borderBottomRightRadius: 20,
                    }}
                  />

                  <View
                    style={{
                      flex: 1,
                      margin: 4,
                      height: 100,
                      width: 80,
                      borderTopLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      // padding: 8,
                    }}
                  />

                  <View
                    style={{
                      flex: 1,
                      margin: 4,
                      height: 100,
                      width: 80,
                      borderTopLeftRadius: 20,
                      borderBottomRightRadius: 20,
                    }}
                  />
                </View>

                <View
                  style={{
                    marginTop: 6,
                    width: Dimensions.get('window').width,
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      margin: 4,
                      height: 100,
                      width: 80,
                      borderTopLeftRadius: 20,
                      borderBottomRightRadius: 20,
                    }}
                  />

                  <View
                    style={{
                      flex: 1,
                      margin: 4,
                      height: 100,
                      width: 80,
                      borderTopLeftRadius: 20,
                      borderBottomRightRadius: 20,
                    }}
                  />

                  <View
                    style={{
                      flex: 1,
                      margin: 4,
                      height: 100,
                      width: 80,
                      borderTopLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      // padding: 8,
                    }}
                  />

                  <View
                    style={{
                      flex: 1,
                      margin: 4,
                      height: 100,
                      width: 80,
                      borderTopLeftRadius: 20,
                      borderBottomRightRadius: 20,
                    }}
                  />
                </View>

                <View
                  style={{
                    marginTop: 6,
                    width: Dimensions.get('window').width,
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      margin: 4,
                      height: 100,
                      width: 80,
                      borderTopLeftRadius: 20,
                      borderBottomRightRadius: 20,
                    }}
                  />

                  <View
                    style={{
                      flex: 1,
                      margin: 4,
                      height: 100,
                      width: 80,
                      borderTopLeftRadius: 20,
                      borderBottomRightRadius: 20,
                    }}
                  />

                  <View
                    style={{
                      flex: 1,
                      margin: 4,
                      height: 100,
                      width: 80,
                      borderTopLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      // padding: 8,
                    }}
                  />

                  <View
                    style={{
                      flex: 1,
                      margin: 4,
                      height: 100,
                      width: 80,
                      borderTopLeftRadius: 20,
                      borderBottomRightRadius: 20,
                    }}
                  />
                </View>

                <View
                  style={{
                    marginTop: 6,
                    width: Dimensions.get('window').width,
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      margin: 4,
                      height: 100,
                      width: 80,
                      borderTopLeftRadius: 20,
                      borderBottomRightRadius: 20,
                    }}
                  />

                  <View
                    style={{
                      flex: 1,
                      margin: 4,
                      height: 100,
                      width: 80,
                      borderTopLeftRadius: 20,
                      borderBottomRightRadius: 20,
                    }}
                  />

                  <View
                    style={{
                      flex: 1,
                      margin: 4,
                      height: 100,
                      width: 80,
                      borderTopLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      // padding: 8,
                    }}
                  />

                  <View
                    style={{
                      flex: 1,
                      margin: 4,
                      height: 100,
                      width: 80,
                      borderTopLeftRadius: 20,
                      borderBottomRightRadius: 20,
                    }}
                  />
                </View>
              </View>
            </SkeletonPlaceholder>
          </ScrollView>
        </View>
      ) : (
        <ScrollView>
          <TouchableOpacity
            disabled={`${seats.status}` === 'Booked'}
            onPress={() =>
              handleSubmitBooking({
                id: seats._id,
                seatNumber: seats.seatNumber,
              })
            }>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                margin: 4,
                backgroundColor:
                  `${seats.status}` == 'Booked' ? 'gray' : 'white',

                borderTopLeftRadius: 20,
                borderBottomRightRadius: 20,
                padding: 8,
              }}>
              <Text
                style={{
                  color: `${seats.status}` == 'Booked' ? 'white' : '#87c830',
                  fontWeight: 'bold',
                  fontSize: 12,
                }}>
                {seats.seatNumber}
              </Text>
              <Image style={styles.image} source={img} />
              <Text
                style={{
                  color: `${seats.status}` == 'Booked' ? 'white' : '#87c830',
                  fontSize: 10,
                  fontWeight: 'bold',
                }}>
                {seats.status}
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      )}
    </>
  );
};

export default BookPaymentTicket;
