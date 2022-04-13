import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  Dimensions,
  Button,
} from 'react-native';
import styles from './styles.js';
// import './styles.css';
import SelectDropdown from 'react-native-select-dropdown';
import {useNavigation, useRoute} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  fetchAvailableTrip,
  fetchPaymentAccounts,
  getCart,
} from '../../redux/actions/dataActions.js';
import ProgressiveImage from '../ProgressiveImage.js';
import PaystackWebView from 'react-native-paystack-popup';
import SvgUri from 'react-native-svg-uri';

const BookTicket = props => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  // const post = props.post;
  const route = useRoute();

  const [ready, setReady] = useState(true);

  const [showPayment, setShowPayment] = React.useState(false);

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
  const availableTrip = useSelector(state => state.data.availableTripDetail);
  const pay = useSelector(state => state.data.paymentAccounts);
  const [qty, setQty] = useState(1);
  const [payt, setPayt] = useState(null);

  // console.log(availableTrip);

  const navigation = useNavigation();

  // const goToPostPage = () => {
  //   navigation.navigate('Post', {postId: post.id});
  // };
  useEffect(() => {
    dispatch(fetchPaymentAccounts(route.params.compId));
  }, []);

  // console.log(route.params.compId);
  // console.log(route);

  useEffect(() => {
    dispatch(fetchAvailableTrip(route.params.id));
  }, []);

  // useEffect(() => {
  //   if (availableTrip !== null) {
  //     setData(availableTrip);
  //   }
  // }, [availableTrip]);

  // useEffect(() => {
  //   if (pay != null) {
  //     setPayt(pay);
  //   }
  // }, [pay]);
  // console.log(pay);
  // console.log(payt);

  const handleSubmitCart = id => {
    const ticketsCount = availableTrip.ticketsCount - qty;
    const tripdata = {
      tripId: availableTrip._id,
      quantity: qty,
      ticketsCount: ticketsCount,
    };
    dispatch(addToCart(tripdata));
    if (!loading) {
      if (authenticated) {
        navigation.navigate('BookPayment', {
          availableTripDetail: availableTrip,
        });
      } else {
        navigation.navigate('Login', {
          availableTripDetail: availableTrip,
        });
      }
    }
  };

  return (
    <>
      {loading ? (
        <View style={{height: 25000}}>
          <ScrollView
            style={{flex: 1}}
            contentContainerStyle={{alignItems: 'center'}}>
            <SkeletonPlaceholder>
              {/* <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                marginLeft: 10,
              }}>
              <View style={{width: 60, height: 60, borderRadius: 50}} />
              <View style={{marginLeft: 20}}>
                <View style={{width: 120, height: 20, borderRadius: 4}} />
              </View>
            </View> */}
              <View style={{marginTop: 10, marginBottom: 30}}>
                <View
                  style={{
                    marginTop: 6,
                    width: Dimensions.get('window').width - 20,
                    height: Dimensions.get('window').width - 130,
                    borderRadius: 10,
                  }}
                />
                <View
                  style={{
                    marginTop: 15,
                    marginBottom: 10,
                    width: 300,
                    height: 30,
                    borderRadius: 4,
                    marginLeft: 10,
                  }}
                />
                <View
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    width: 200,
                    height: 30,
                    borderRadius: 4,
                    marginLeft: 10,
                  }}
                />
                <View
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    width: 300,
                    height: 30,
                    borderRadius: 4,
                    marginLeft: 10,
                  }}
                />
                <View
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    width: 300,
                    height: 30,
                    borderRadius: 4,
                    marginLeft: 10,
                  }}
                />
                <View
                  style={{
                    marginTop: 20,
                    marginBottom: 10,
                    width: 300,
                    height: 45,
                    borderRadius: 20,
                    marginLeft: 30,
                  }}
                />
              </View>
            </SkeletonPlaceholder>
            {/* <SkeletonPlaceholder>
              <View style={{marginTop: 10, marginBottom: 30}}>
                <View
                  style={{
                    marginTop: 6,
                    width: Dimensions.get('window').width - 20,
                    height: Dimensions.get('window').width - 120,
                    borderRadius: 4,
                  }}
                />
                <View
                  style={{
                    marginTop: 6,
                    marginBottom: 6,
                    width: 250,
                    height: 20,
                    borderRadius: 4,
                    marginLeft: 10,
                  }}
                />
                <View
                  style={{
                    width: 300,
                    height: 20,
                    borderRadius: 4,
                    marginLeft: 10,
                  }}
                />
              </View>
            </SkeletonPlaceholder> */}
          </ScrollView>
        </View>
      ) : (
        <ScrollView>
          <View style={styles.container}>
            {/* Image  */}
            {/* {availableTrip.vehicle ? (
              <ProgressiveImage
                defaultImageSource={require('../../assets/default-img.jpg')}
                // source={{uri: imageUri}}
                source={{uri: availableTrip.vehicle.imageUrl[0].img}}
                style={styles.image}
              />
            ) : (
              <View style={styles.imageV} />
              // <Image source={{uri: imageUri}} style={styles.image} />
            )} */}
            {availableTrip.vehicle ? (
              <Image
                style={styles.image}
                // source={{uri: post.image}}
                source={{
                  uri: `https://res.cloudinary.com/dblprzex8/image/upload/v1633031800/bus4_ii3zui.jpg`,
                }}
              />
            ) : // <SvgUri
            //   width="100"
            //   height="100"
            //   svgXmlData={
            //     'https://res.cloudinary.com/dblprzex8/image/upload/v1633007045/bus_zeokac.svg'
            //   }
            // />
            null}

            <View>
              {availableTrip.vehicle ? (
                <>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '85%',
                    }}>
                    <Text style={styles.description}>
                      {availableTrip && availableTrip.from.name} -{' '}
                      {availableTrip && availableTrip.to.name} Trip
                    </Text>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <Text style={styles.oldPrice}>Fare: {'Ghc '}</Text>
                      <Text style={styles.price}>
                        {availableTrip && availableTrip.fare}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.prices}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <Text style={styles.oldPrice1}>Amount: {'Ghc '}</Text>
                      <Text style={styles.priced}>
                        {availableTrip && availableTrip.fare * qty}
                      </Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <Text style={styles.oldPrice1}>
                        Available Tickets: {` `}
                      </Text>
                      <Text style={styles.priced}>
                        {availableTrip && availableTrip.ticketsCount}
                      </Text>
                    </View>
                  </View>

                  {/* <View style={styles.prices1}>
                    
                  </View> */}

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                    }}>
                    <Text
                      style={{
                        marginRight: 10,
                        marginTop: 10,
                        fontSize: 18,
                        fontWeight: 'bold',
                      }}>
                      Select Qty
                    </Text>
                    {availableTrip.ticketsCount > 0 && (
                      <SelectDropdown
                        data={[...Array(availableTrip.ticketsCount).keys()]}
                        buttonTextStyle={{
                          // alignItems: 'flex-start',
                          // justifyContent: 'flex-start',
                          textAlign: 'left',
                          // marginLeft: 20,
                        }}
                        rowTextStyle={{
                          textAlign: 'left',
                          // justifyContent: 'flex-start',
                        }}
                        defaultButtonText={1}
                        defaultValueByIndex={0}
                        buttonStyle={{
                          // width: Dimensions.get('window').width - 40,
                          width: 160,
                          backgroundColor: '#F1F1F1',
                          borderRadius: 6,
                          borderColor: '#87c830',
                          borderWidth: 1,
                          marginTop: 10,
                          // alignItems: 'flex-start',
                          justifyContent: 'center',
                        }}
                        onSelect={(selectedItem, index) => {
                          // console.log(selectedItem + 1, index);
                          setQty(selectedItem + 1);
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          // text represented after item is selected
                          // if data array is an array of objects then return selectedItem.property to render after item is selected
                          return selectedItem + 1;
                        }}
                        renderDropdownIcon={() => (
                          <FontAwesome
                            name="caret-down"
                            size={18}
                            color="#87c830"
                          />
                        )}
                        dropdownIconPosition="right"
                        rowTextForSelection={(item, index) => {
                          // text represented for each item in dropdown
                          // if data array is an array of objects then return item.property to represent item in dropdown
                          return item + 1;
                        }}
                      />
                    )}
                  </View>
                </>
              ) : null}
            </View>
            {pay.paymentAccounts ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  marginHorizontal: 10,
                  zIndex: 100,
                  marginTop: 10,
                }}>
                {!showPayment && (
                  <Button
                    style={{backgroundColor: 'grey'}}
                    onPress={() => {
                      setShowPayment(true);
                    }}
                    title="Pay Now"
                  />
                )}

                {showPayment && (
                  <PaystackWebView
                    ref={ref}
                    onError={() => {
                      setShowPayment(false);

                      alert('Failed...');
                    }}
                    metadata={{
                      custom_fields: [{display_name: 'Demo Checkout'}],
                    }}
                    onDismissed={() => {
                      ref.current.reload(); //reload if dismissed.
                    }}
                    onSuccess={response => {
                      // if (route.params.availableTripDetail) {
                      //   const tripId = route.params.availableTripDetail._id;
                      //   const ticketsCount =
                      //     route.params.availableTripDetail.ticketsCount -
                      //     route.params.quantity;

                      //   if (route.params.quantity > 1) {
                      //     seatNumber = `${
                      //       route.params.availableTripDetail.vehicle.capacity -
                      //       route.params.availableTripDetail.ticketsCount -
                      //       1
                      //     } - ${
                      //       route.params.availableTripDetail.vehicle.capacity -
                      //       ticketsCount -
                      //       1
                      //     }`;
                      //   } else {
                      //     seatNumber =
                      //       route.params.availableTripDetail.vehicle.capacity -
                      //       ticketsCount;
                      //   }

                      //   const body = {
                      //     ticketsCount: ticketsCount,
                      //   };

                      //   const bookingData = {
                      //     taxPrice: route.params.taxPrice,
                      //     totalPrice: route.params.totalPrice,
                      //     seatNumber: seatNumber,
                      //   };
                      //   dispatch(changeTicketsCount(tripId, body));
                      //   dispatch(placeBooking(bookingData));

                      //   dispatch(getBookings());
                      //   setReady(false);

                      // }

                      const ticketsCount = availableTrip.ticketsCount - qty;
                      const tripdata = {
                        tripId: availableTrip._id,
                        quantity: qty,
                        ticketsCount: ticketsCount,
                      };
                      dispatch(addToCart(tripdata));

                      setShowPayment(false);
                      // console.log(response);
                      alert(`Transaction successful: ${response.reference}`);
                      // if (!ready) {
                      // if (!loading) {
                      //   if (authenticated) {
                      // navigation.navigate('BookPayment', {
                      //   availableTripDetail: availableTrip,
                      // });
                      //   } else {
                      //     navigation.navigate('Login', {
                      //       availableTripDetail: availableTrip,
                      //     });
                      //   }
                      // }
                      navigation.navigate('BookPayment', {
                        availableTripDetail: availableTrip,
                      });
                      // }
                    }}
                    paystackKey={
                      pay.paymentAccounts?.paymentaccounts[0].publicId
                    }
                    customerEmail={'travel-gh@gmail.com'}
                    currency="GHS"
                    amount={availableTrip.fare * qty * 100}
                  />
                )}
              </View>
            ) : null}
            {/* <View style={{marginTop: 40}}>
              <Pressable
                onPress={() => handleSubmitCart(availableTrip._id)}
                style={{
                  // marginTop: 20,
                  backgroundColor: '#6C63FF',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 50,
                  marginHorizontal: 20,
                  borderRadius: 20,
                  width: 300,
                  bottom: 0,
                }}>
                <Text
                  style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
                  Book Now
                </Text>
              </Pressable>
            </View> */}
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default BookTicket;
