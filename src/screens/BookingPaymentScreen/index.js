import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';
import {InputField, InputWrapper} from '../../styles/AddPost';
import BookPaymentTicket from '../../components/BookPaymentTicket';
import {useNavigation, useRoute} from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';
// import places from '../../assets/data/feed';
import posts from '../../assets/data/feed';
import Post from '../../components/Post/posts';
import {useDispatch, useSelector} from 'react-redux';
import {getCart} from '../../redux/actions/dataActions';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const BookingPaymentScreen = () => {
  const dispatch = useDispatch();

  const [authenticated1, setAuthenticated1] = useState(false);
  // const post = props.post;
  // const [pod, setPod] = useState([]);
  const {loading, cart, price} = useSelector(state => state.data);
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
    if (!authenticated) {
      navigation.navigate('Login');
    } else {
      // setLoading(true);
      dispatch(getCart());
      // setLoading(false);
    }
  }, [dispatch, authenticated]);

  // console.log(cart);

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

  if (!loading) {
    tripPrice = addDecimals(
      cart?.reduce((acc, trip) => acc + trip.tripId.fare * 1, 0),
    );

    quantity = 1;

    taxPrice = addDecimals(Number((0.15 * tripPrice).toFixed(2)));
    tripCost = (Number(tripPrice) - Number(taxPrice)).toFixed(2);
  }

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
      seatNumber: data.seatNumber,
      seatId: data?.id,
    };

    if (!loading && cart[0].quantity > 1) {
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
      {!authenticated ? (
        navigation.navigate('Login')
      ) : !loading ? (
        cart.length > 0 ? (
          <>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  marginBottom: 10,
                  marginTop: 10,
                  marginHorizontal: 10,
                  color: 'gray',
                  fontWeight: 'bold',
                }}>
                Choose
                {`${' '} ${cart[0].quantity} ${' '}`}
                Seat
                {cart[0].quantity > 1 ? 's' : ''}.
              </Text>
            </View>

            <FlatList
              style={{
                marginBottom: 10,
                bottom: 0,
                margin: 10,
                paddingHorizontal: 5,
              }}
              data={cart[0].tripId.seat}
              renderItem={({item}) => (
                <BookPaymentTicket seats={item} cart={cart} />
              )}
              numColumns={5}
              keyExtractor={(item, index) => index}
              refreshing={loading}
              onRefresh={() => dispatch(getCart())}
            />
          </>
        ) : (
          <View
            style={{
              margin: 15,
              height: Dimensions.get('window').height,
              width: Dimensions.get('window').width,
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 250,
                marginHorizontal: 10,
                marginRight: 30,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  marginBottom: 10,
                  marginTop: 5,
                  color: 'gray',
                  alignSelf: 'center',
                  // fontWeight: 'bold',
                }}>
                Wait a while for Seats to load if you have successfully booked a
                ticket or tickets. Otherwise go back to{' '}
                <Fontisto name="home" size={18} color={'gray'} /> to book a
                ticket.
              </Text>
            </View>
          </View>
        )
      ) : (
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
      )}
    </>
  );
};

export default BookingPaymentScreen;
