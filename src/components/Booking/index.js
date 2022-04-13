import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  Dimensions,
  PermissionsAndroid,
  Button,
  Share,
  Alert,
  Platform,
  ImageBackground,
} from 'react-native';
import moment from 'moment';
import styles from './styles.js';
import SelectDropdown from 'react-native-select-dropdown';
import {useNavigation, useRoute} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {useDispatch, useSelector} from 'react-redux';
// import PaystackWebView from 'react-native-paystack-webview';
import PaystackWebView from 'react-native-paystack-popup';
import {
  cancelBooking,
  changeTicketsCount,
  fetchAvailableTrip,
  fetchReAvailableTrips,
  getBooking,
  getCart,
  placeBooking,
  reBooking,
  socketStatusUpdate,
} from '../../redux/actions/dataActions.js';
import img from '../../assets/driver.jpg';
import FormButtonRe from '../FormButtonRe/index.js';
import FormButtonCan from '../FormButtonCan/index.js';
import ViewShot from 'react-native-view-shot';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
// import Viewshot,{captureRef} from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';

const Booking = props => {
  const dispatch = useDispatch();
  const [authenticated1, setAuthenticated1] = useState(false);
  // const [loading, setLoading] = useState(true);
  const [uri, setUri] = useState({});
  // const post = props.post;
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
  const getSingleBooking = useSelector(state => state.data.booking);
  const [tdate, setTdate] = useState({});

  const availableTrip = useSelector(state => state.data.reavailableTrip);

  const viewshot = useRef();

  // console.log(getSingleBooking);

  let today = new Date();
  // today.setDate(today.getDate() - 1);
  // console.log(today);
  let tripday;

  // console.log(actual);
  // setTdate(getSingleBooking);
  if (getSingleBooking?.trips) {
    tripday = new Date(getSingleBooking?.trips[0]?.trip.date);
    tripday.setDate(tripday.getDate() - 1);
  }

  // console.log(tripday);

  // let actual = new Date(getSingleBooking?.trips[0]?.trip.date);

  // useEffect(() => {
  // if (tdate !== '') {
  // setTdate(getSingleBooking);
  // } else {

  // }
  // }, [getSingleBooking]);

  // console.log(today - tripday);
  // console.log(tripday - today);
  // console.log(tripday - tripday);
  // console.log(actual - actual);

  const route = useRoute();

  // console.log(availableTrip);
  // console.log(route);

  const navigation = useNavigation();

  const handleCancelBooking = () => {
    const body = {
      seatId: getSingleBooking?.seatId,
    };

    const body1 = {
      ticketsCount: getSingleBooking?.trips[0].trip.ticketsCount + 1,
    };

    const tripId = getSingleBooking?.trips[0].trip._id;

    const bookingId = getSingleBooking?._id;

    const refundData = {
      bookingId: getSingleBooking?._id,
      ticketId: getSingleBooking?.ticketId,
      companyId: getSingleBooking?.company.companyId._id,
      trip: `${getSingleBooking?.trips[0].trip.from.name} - ${
        getSingleBooking?.trips[0].trip.to.name
      }${' '}${moment(getSingleBooking?.trips[0].trip.date).format(
        'DD MMM, YYYY',
      )} -${' '}
      ${getSingleBooking?.trips[0].trip.time}`,
      amount: getSingleBooking?.totalPrice,
    };

    // console.log(refundData, tripId, body1);

    dispatch(cancelBooking(refundData, bookingId, tripId, body, body1));

    // navigation.navigate('Bookings');
  };

  // const onPress = () => {
  //   const tripData = {
  //     from: from,
  //     to: to,
  //     date: date,
  //   };
  //   if (client) {
  //     const compId = client._id;
  //     // console.log(compId);
  //     if (!loading) {
  //       dispatch(fetchAvailableTrips(compId, tripData));

  //       // console.log(availableTrip);
  //     }
  //   }
  //   if (!loading) {
  //     navigation.navigate('TripsResult');
  //   }
  // };

  const handleReBooking = () => {
    const body = {
      seatId: getSingleBooking?.seatId,
    };

    // console.log(body);

    const body1 = {
      ticketsCount: getSingleBooking?.trips[0].trip.ticketsCount + 1,
    };

    const tripId = getSingleBooking?.trips[0].trip._id;

    const bookingId = getSingleBooking?._id;

    const rebookingData = {
      bookingId: getSingleBooking?._id,
    };

    // dispatch(reBooking(rebookingData, tripId, body, body1));

    const tripData = {
      from: getSingleBooking?.trips[0].trip.from._id,
      to: getSingleBooking?.trips[0].trip.to._id,
    };

    const compId = getSingleBooking?.company.companyId._id;

    // console.log(tripData, compId);

    dispatch(fetchReAvailableTrips(compId, tripData));

    // if (!loading) {
    //   console.log(availableTrip);
    // }
    if (!loading) {
      navigation.navigate('TripsReResult', {
        rebookingData: rebookingData,
        body: body,
        body1: body1,
        tripId: tripId,
        compId,
        tripData,
      });
    }
  };

  // console.log(uri);

  // };

  // useEffect(() => {
  //   setAuthenticated1(authenticated);
  //   if (authenticated1) {
  //     dispatch(getBooking(route.params.id));
  //     setLoading(false);
  //   }
  //   console.log(getSingleBooking);
  // }, [authenticated1]);

  // get permission on android
  const getPermissionAndroid = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Ticket Download Permission',
          message: 'Your permission is required to save ticket to your device',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }
      Alert.alert(
        '',
        'Your permission is required to save images to your device',
        [{text: 'OK', onPress: () => {}}],
        {cancelable: false},
      );
    } catch (err) {
      // handle error as you please
      console.log('err', err);
    }
  };

  // download image
  const downloadImage = async () => {
    try {
      // react-native-view-shot caputures component
      const uri = await viewshot.current.capture();

      // console.log(uri);

      if (Platform.OS === 'android') {
        const granted = await getPermissionAndroid();
        if (!granted) {
          return;
        }
      }

      // cameraroll saves image
      const image = CameraRoll.save(uri, 'photo');
      if (image) {
        Alert.alert(
          '',
          'Ticket saved successfully in your Gallery.',
          [{text: 'OK', onPress: () => {}}],
          {cancelable: false},
        );
      }
    } catch (error) {
      console.log('error', error);
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
                    marginTop: 16,
                    width: Dimensions.get('window').width - 180,
                    height: 25,
                    borderRadius: 4,
                  }}
                />
                <View
                  style={{
                    marginTop: 15,
                    marginBottom: 10,
                    width: Dimensions.get('window').width - 20,
                    height: 2,
                    borderRadius: 4,
                    // marginLeft: 10,
                  }}
                />
                <View
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    width: Dimensions.get('window').width - 20,
                    height: 50,
                    borderRadius: 4,
                    // marginLeft: 10,
                  }}
                />
                <View
                  style={{
                    marginTop: 15,
                    marginBottom: 10,
                    width: Dimensions.get('window').width - 20,
                    height: 2,
                    borderRadius: 4,
                    // marginLeft: 10,
                  }}
                />
                <View
                  style={{
                    marginTop: 6,
                    width: Dimensions.get('window').width - 180,
                    height: 25,
                    borderRadius: 4,
                  }}
                />
                <View
                  style={{
                    marginTop: 15,
                    marginBottom: 10,
                    width: Dimensions.get('window').width - 20,
                    height: 2,
                    borderRadius: 4,
                    // marginLeft: 10,
                  }}
                />
                <View
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    width: Dimensions.get('window').width - 20,
                    height: 80,
                    borderRadius: 4,
                    // marginLeft: 10,
                  }}
                />
                <View
                  style={{
                    marginTop: 15,
                    marginBottom: 10,
                    width: Dimensions.get('window').width - 20,
                    height: 2,
                    borderRadius: 4,
                    // marginLeft: 10,
                  }}
                />
                <View
                  style={{
                    marginTop: 6,
                    width: Dimensions.get('window').width - 180,
                    height: 25,
                    borderRadius: 4,
                  }}
                />
                <View
                  style={{
                    marginTop: 15,
                    marginBottom: 10,
                    width: Dimensions.get('window').width - 20,
                    height: 2,
                    borderRadius: 4,
                    // marginLeft: 10,
                  }}
                />
                <View
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    width: Dimensions.get('window').width - 20,
                    height: 80,
                    borderRadius: 4,
                    // marginLeft: 10,
                  }}
                />
                {/* <View
                  style={{
                    marginTop: 15,
                    marginBottom: 10,
                    width: Dimensions.get('window').width - 20,
                    height: 2,
                    borderRadius: 4,
                    // marginLeft: 10,
                  }}
                />
                <View
                  style={{
                    marginTop: 6,
                    width: Dimensions.get('window').width - 180,
                    height: 25,
                    borderRadius: 4,
                  }}
                />
                <View
                  style={{
                    marginTop: 15,
                    marginBottom: 10,
                    width: Dimensions.get('window').width - 20,
                    height: 2,
                    borderRadius: 4,
                    // marginLeft: 10,
                  }}
                />
                <View
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    width: Dimensions.get('window').width - 20,
                    height: 80,
                    borderRadius: 4,
                    // marginLeft: 10,
                  }}
                /> */}
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
        <View
        // ref={viewshot}
        // options={{
        //   format: 'jpg',
        //   quality: 0.9,
        //   // backgroundColor: 'gray',
        // }}
        >
          <ScrollView
            collapsable={false}
            contentContainerStyle={{backgroundColor: '#fff'}}>
            {/* {!authenticated ? (
            navigation.navigate('LoginPage')
          ) : ( */}
            <View style={styles.container}>
              {/* Image  */}

              <View
                style={{
                  alignItems: 'flex-start',
                  marginBottom: 5,
                  marginHorizontal: 5,
                }}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: '#D40F1C'}}>
                  VERY IMPORTANT:
                </Text>
                <Text style={{fontSize: 13, marginTop: 2, color: '#B00000'}}>
                  A Trip can only be CANCELLED or RESCHEDULED 24hrs before
                  Departure Time. Be at the station, 30 minutes before departure
                  time for your CHECK-IN. REFUND is automatically requested when
                  a trip is CANCELLED.
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    marginTop: 2,
                    color: '#B00000',
                  }}>
                  Most importantly, ensure that you carry your ticket along to
                  the station either PRINTED after saving your ticket or in this
                  DIGITAL FORM.
                </Text>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                  alignItems: 'center',
                }}>
                {getSingleBooking?.status === 'Cancelled' ||
                getSingleBooking?.status === 'Rescheduled' ||
                today - tripday > 0 ? null : (
                  <View
                    style={{
                      flex: 1,
                      marginRight: 30,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <FormButtonRe
                      buttonTitle="Reschedule Trip"
                      onPress={handleReBooking}
                      // style={{marginRight: 10}}
                    />
                    <FormButtonCan
                      buttonTitle="Cancel Trip"
                      onPress={handleCancelBooking}
                      // style={{marginRight: 10}}
                    />
                  </View>
                )}
                <TouchableWithoutFeedback onPress={downloadImage}>
                  <Ionicons name="save-outline" size={35} />
                </TouchableWithoutFeedback>
              </View>

              <ViewShot
                ref={viewshot}
                options={{
                  format: 'jpg',
                  quality: 0.9,
                  backgroundColor: 'gray',
                }}>
                <ScrollView
                  collapsable={false}
                  contentContainerStyle={{backgroundColor: '#fff'}}>
                  <View
                    style={{
                      width: '100%',
                      height: 1,
                      borderColor: 'gray',
                      backgroundColor: 'gray',
                      marginTop: 10,
                    }}
                  />

                  <View
                    style={{
                      width: '100%',
                      height: 1,
                      borderColor: 'gray',
                      backgroundColor: 'gray',
                      marginTop: 3,
                    }}
                  />
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: 18,
                        marginBottom: 0,
                        marginTop: 10,

                        // marginRight: 20,
                        color: '#87c830',
                        fontWeight: 'bold',
                        // alignSelf: 'center',
                      }}>
                      Ticket id
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        // marginBottom: 10,
                        // alignSelf: 'center',
                        marginTop: 12,
                      }}>
                      {getSingleBooking?.ticketId}{' '}
                    </Text>
                  </View>

                  <View
                    style={{
                      width: '100%',
                      height: 1,
                      borderColor: 'gray',
                      backgroundColor: 'gray',
                      marginTop: 10,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      marginBottom: 0,
                      marginTop: 5,
                      color: '#87c830',
                      fontWeight: 'bold',
                    }}>
                    Company
                  </Text>
                  <View
                    style={{
                      width: '100%',
                      height: 1,
                      borderColor: 'gray',
                      backgroundColor: 'gray',
                      marginTop: 10,
                    }}
                  />
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}>
                    {/* <View>
                  <Text style={{fontSize: 18}}>Name: </Text>
                </View> */}
                    <View>
                      <Text style={{fontSize: 18}}>
                        {getSingleBooking?.company.name}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 12,
                    }}>
                    <View>
                      <Text style={{fontSize: 18}}>Contact: </Text>
                    </View>
                    <View>
                      <Text style={{fontSize: 18}}>
                        {getSingleBooking?.company.phone}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    {/* <View>
                  <Text style={{fontSize: 18, marginTop: 10}}>Email: </Text>
                </View>
                <View>
                  <Text style={{fontSize: 18}}>boadijoseph151@gmail.com</Text>
                </View> */}
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: 1,
                      borderColor: 'gray',
                      backgroundColor: 'gray',
                      marginTop: 10,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      marginBottom: 0,
                      marginTop: 5,
                      color: '#87c830',
                      fontWeight: 'bold',
                    }}>
                    Trip
                  </Text>
                  <View
                    style={{
                      width: '100%',
                      height: 1,
                      borderColor: 'gray',
                      backgroundColor: 'gray',
                      marginTop: 10,
                    }}
                  />
                  {getSingleBooking?.trips.map(trip => (
                    <View key={trip._id}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginTop: 10,
                        }}>
                        <Image
                          style={styles.image}
                          source={{uri: getSingleBooking.company.imageUrl}}
                          //  source={img}
                        />
                        <View>
                          {/* Type & Description */}
                          <Text style={styles.description}>
                            {trip.trip.from.name} - {trip.trip.to.name}
                          </Text>
                        </View>
                        <View>
                          {/* Type & Description */}
                          <Text style={styles.description}>
                            {moment(trip.trip.date).format('DD MMM, YYYY')} -{' '}
                            {moment(trip.trip.time).format('hh:mm A')}
                          </Text>
                        </View>
                        {/*  Old price & new price */}
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                        }}>
                        {/*  Old price & new price */}
                        <View
                          style={
                            (styles.prices,
                            {
                              justifyContent: 'space-evenly',
                              alignItems: 'center',
                              // width: '95%',
                              display: 'flex',
                              flexDirection: 'row',
                              marginTop: 10,
                              marginBottom: 5,
                            })
                          }>
                          <Text
                            style={{
                              fontSize: 15,
                              color: 'black',
                              fontWeight: 'bold',
                            }}>
                            {getSingleBooking?.trips[0].trip.vehicle.regNumber}
                          </Text>
                          {getSingleBooking?.status === 'Booked' ? (
                            <Text style={styles.pricee}>
                              {getSingleBooking?.status}
                            </Text>
                          ) : getSingleBooking?.status === 'Rescheduled' ? (
                            <Text style={styles.pricee2}>
                              {getSingleBooking?.status}
                            </Text>
                          ) : (
                            <Text style={styles.pricee1}>
                              {getSingleBooking?.status}
                            </Text>
                          )}

                          <Text style={styles.price}>
                            {/* {trip.quantity} ticket
                        {trip.quantity > 1 ? 's' : ''} -  */}
                            Seat No.
                            {trip.quantity > 1 ? 's' : ''}:{` `}
                            {getSingleBooking?.seatNumber}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginTop: 5,
                          marginBottom: 10,
                        }}>
                        <Text style={{fontSize: 15, color: 'gray'}}>
                          Boarding Point:
                        </Text>
                        <Text style={{fontWeight: 'bold'}}>
                          {getSingleBooking?.trips[0].trip.branch.branchName}
                        </Text>
                      </View>
                    </View>
                  ))}

                  {getSingleBooking?.refundRequested.toString() === 'true' ? (
                    <>
                      <View
                        style={{
                          width: '100%',
                          height: 1,
                          borderColor: 'gray',
                          backgroundColor: 'gray',
                          // marginTop: 10,
                        }}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          marginBottom: 0,
                          marginTop: 5,
                          color: '#87c830',
                          fontWeight: 'bold',
                        }}>
                        Refund
                      </Text>
                      <View
                        style={{
                          width: '100%',
                          height: 1,
                          borderColor: 'gray',
                          backgroundColor: 'gray',
                          marginTop: 10,
                        }}
                      />
                      <View
                        style={{
                          alignItems: 'center',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View>
                          <Text style={{fontSize: 18, marginTop: 5}}>
                            Requested
                          </Text>
                        </View>
                        <View>
                          <Text style={{fontSize: 18, marginTop: 5}}>
                            {getSingleBooking?.refundRequested.toString() ===
                            'true'
                              ? 'YES'
                              : 'NO'}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          alignItems: 'center',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View style={{marginBottom: 5}}>
                          <Text style={{fontSize: 18, marginTop: 10}}>
                            Paid
                          </Text>
                        </View>
                        <View style={{marginBottom: 0}}>
                          <Text style={{fontSize: 18}}>
                            {getSingleBooking?.refundPaid.toString() === 'true'
                              ? 'YES'
                              : 'NO'}
                          </Text>
                        </View>
                      </View>
                    </>
                  ) : null}

                  <View
                    style={{
                      width: '100%',
                      height: 1,
                      borderColor: 'gray',
                      backgroundColor: 'gray',
                      // marginTop: 10,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      marginBottom: 0,
                      marginTop: 5,
                      color: '#87c830',
                      fontWeight: 'bold',
                    }}>
                    Cost Summary
                  </Text>
                  <View
                    style={{
                      width: '100%',
                      height: 1,
                      borderColor: 'gray',
                      backgroundColor: 'gray',
                      marginTop: 10,
                    }}
                  />
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <Text style={{fontSize: 18, marginTop: 10}}>
                        Ticket(s) Cost
                      </Text>
                    </View>
                    <View>
                      <Text style={{fontSize: 18}}>
                        Ghc
                        {getSingleBooking?.totalPrice -
                          getSingleBooking?.taxPrice}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <Text style={{fontSize: 18, marginTop: 10}}>Tax</Text>
                    </View>
                    <View>
                      <Text style={{fontSize: 18}}>
                        Ghc{getSingleBooking?.taxPrice}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <Text style={{fontSize: 18, marginTop: 10}}>Total</Text>
                    </View>
                    <View>
                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        Ghc{getSingleBooking?.totalPrice}
                      </Text>
                    </View>
                  </View>
                </ScrollView>
              </ViewShot>
              {/* <TouchableOpacity
                // onPress={() => {
                //   viewshot.current.capture().then(uri => {
                //     setUri({uri});
                //     alert(uri);

                //     // Share.share({title: 'ticket', url: uri});
                //   });
                // }}
                onPress={downloadImage}
                style={{
                  marginTop: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    padding: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: Dimensions.get('screen').width - 80,
                    backgroundColor: '#87c830',
                    borderRadius: 30,
                  }}>
                  <Text
                    style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
                    Print Receipt
                  </Text>
                </View>
              </TouchableOpacity> */}
              {/* {uri && (
                <ImageBackground
                  style={{
                    position: 'absolute',
                    // opacity: 0.5,
                    // zIndex: 2000,
                    width: Dimensions.get('screen').width,
                    height: Dimensions.get('screen').width + 130,
                    top: 50,
                    // justifyContent: 'center',
                    alignSelf: 'center',
                    marginHorizontal: 20,
                    backgroundColor: '#fff',
                    background: 'transparent',
                    color: '#fff',
                    // backfaceVisibility: '',
                    // bac,
                  }}
                  source={uri}
                />
              )} */}

              {/* <View
                style={{
                  marginTop: 200,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                  zIndex: 1000,
                }}>
               

                <Pressable
                  onPress={() =>
                    navigation.navigate('Pay', {
                      totalPrice: tripPrice,
                      taxPrice: taxPrice,
                      quantity: quantity,
                      availableTripDetail: route.params.availableTripDetail,
                    })
                  }
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
                    Confirm Booking
                  </Text>
                </Pressable>
              </View> */}

              {/* <Text style={styles.longDescription}>{post.description}</Text> */}
            </View>
            {/* )} */}
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default Booking;
