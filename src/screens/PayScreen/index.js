import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {Button, View} from 'react-native';
// import PaystackWebView from 'react-native-paystack-webview';
import PaystackWebView from 'react-native-paystack-popup';
import {useDispatch} from 'react-redux';
import {
  changeTicketsCount,
  getBookings,
  placeBooking,
} from '../../redux/actions/dataActions';

const PayScreen = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const [ready, setReady] = useState(true);

  const navigation = useNavigation();

  const route = useRoute();
  // console.log(route);
  // console.log(route.params.taxPrice);
  // console.log(route.params.totalPrice);
  const [showPayment, setShowPayment] = React.useState(false);

  let seatNumber;

  //   const successPayPaymentHandler = () => {
  //     const bookingData = {
  //       taxPrice: taxPrice,
  //       totalPrice: tripPrice,
  //     };

  //     if (route.availableTripDetail) {
  //       const tripId = route.availableTripDetail._id;
  //       const ticketsCount = route.availableTripDetail.ticketsCount - quantity;
  //       const body = {
  //         ticketsCount: ticketsCount,
  //       };
  //       if (ticketsCount) {
  //         // console.log(body);
  //         dispatch(changeTicketsCount(tripId, body));
  //         dispatch(placeBooking(bookingData));
  //       }
  //     }
  //     // }
  //     // }
  //   }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 10,
        zIndex: 100,
      }}>
      {!showPayment && (
        <Button
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
          metadata={{custom_fields: [{display_name: 'Demo Checkout'}]}}
          onDismissed={() => {
            ref.current.reload(); //reload if dismissed.
          }}
          onSuccess={response => {
            if (route.params.availableTripDetail) {
              const tripId = route.params.availableTripDetail._id;
              const ticketsCount =
                route.params.availableTripDetail.ticketsCount -
                route.params.quantity;

              // console.log(ticketsCount);

              if (route.params.quantity > 1) {
                seatNumber = `${
                  route.params.availableTripDetail.vehicle.capacity -
                  route.params.availableTripDetail.ticketsCount -
                  1
                } - ${
                  route.params.availableTripDetail.vehicle.capacity -
                  ticketsCount -
                  1
                }`;
              } else {
                seatNumber =
                  route.params.availableTripDetail.vehicle.capacity -
                  ticketsCount;
              }

              const body = {
                ticketsCount: ticketsCount,
              };
              // if (ticketsCount) {
              // console.log(route.params.taxPrice);
              // console.log(route.params.totalPrice);
              // console.log(seatNumber);

              const bookingData = {
                taxPrice: route.params.taxPrice,
                totalPrice: route.params.totalPrice,
                seatNumber: seatNumber,
              };
              dispatch(changeTicketsCount(tripId, body));
              dispatch(placeBooking(bookingData));

              dispatch(getBookings());
              setReady(false);
              // if (!ready) {
              //   navigation.navigate('Bookings');
              // }
              // }
            }
            setShowPayment(false);

            alert(`Transaction successful: ${response.reference}`);
            // if (!ready) {
            navigation.navigate('Home');
            // }
          }}
          paystackKey={'pk_test_91b294844f270b67032fe56747f367cdd70ba8f2'}
          customerEmail={'boadijoseph151@gmail.com'}
          currency="GHS"
          amount={route.params.totalPrice * 100}
        />
      )}
      {/* <PaystackWebView
        buttonText="Pay Now"
        showPayButton={false}
        paystackKey="pk_test_91b294844f270b67032fe56747f367cdd70ba8f2"
        amount={1200}
        currency="GHS"
        billingEmail="boadijoseph151@gmail.com"
        billingMobile="0542754476"
        billingName="Joseph Boadi"
        ActivityIndicatorColor="green"
        SafeAreaViewContainer={{marginTop: 200}}
        SafeAreaViewContainerModal={{marginTop: 200}}
        onCancel={e => {
          // handle response here
        }}
        onSuccess={res => {
          // handle response here
        }}
        // textStyles={{color: 'black'}}
        // btnStyles={{backgroundColor: 'blue'}}
        autoStart={false}
        // renderButton={onPress => {
        //   <Button onPress={onPress}>Pay Now</Button>;
        // }}
      /> */}
    </View>
  );
};

export default PayScreen;
