import React from 'react';
import {Button, Dimensions, Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
  return (
    <View
      style={{
        width: 5,
        height: 5,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};
const Skip = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 8}} {...props}>
    <Text style={{fontSize: 16}}>Skip</Text>
  </TouchableOpacity>
);
const Next = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 8}} {...props}>
    <Text style={{fontSize: 16}}>Next</Text>
  </TouchableOpacity>
);
const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 8}} {...props}>
    <Text style={{fontSize: 16}}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.replace('Login')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: (
            <Image
              source={require('../../assets/homepage.png')}
              style={{
                width: Dimensions.get('screen').width - 50,
                height: Dimensions.get('screen').width + 50,
                resizeMode: 'center',
                borderRadius: 10,
                borderTopRightRadius: 80,
                borderBottomLeftRadius: 80,
              }}
            />
          ),
          title: 'Home Page',
          subtitle: '',
        },
        {
          backgroundColor: '#fdeb93',
          image: (
            <Image
              source={require('../../assets/searchdestination.png')}
              style={{
                width: Dimensions.get('screen').width - 50,
                height: Dimensions.get('screen').width + 50,
                resizeMode: 'center',
                borderRadius: 10,
                borderBottomLeftRadius: 80,
              }}
            />
          ),
          title: 'Bus Departure Location',
          subtitle: '',
        },
        {
          backgroundColor: '#e9bcbe',

          image: (
            <Image
              source={require('../../assets/searchdestination1.png')}
              imageContainerStyles={{paddingBottom: 0}}
              style={{
                width: Dimensions.get('screen').width - 50,
                height: Dimensions.get('screen').width + 50,
                resizeMode: 'center',
                borderRadius: 10,
                borderTopLeftRadius: 80,
                borderBottomRightRadius: 80,
                paddingBottom: 0,
              }}
            />
          ),
          title: 'Destination Lcation and Date',
          subtitle: '',
        },
        {
          backgroundColor: '#e9bcbe',

          image: (
            <Image
              source={require('../../assets/companylist.png')}
              imageContainerStyles={{paddingBottom: 0}}
              style={{
                width: Dimensions.get('screen').width - 50,
                height: Dimensions.get('screen').width + 50,
                resizeMode: 'center',
                borderRadius: 10,
                borderTopLeftRadius: 80,
                borderBottomRightRadius: 80,
                paddingBottom: 0,
              }}
            />
          ),
          title: 'Select Company/Comment',
          subtitle: '',
        },
        {
          backgroundColor: '#a6e4d0',
          image: (
            <Image
              source={require('../../assets/selecttrip.png')}
              style={{
                width: 350,
                height: 400,
                resizeMode: 'center',
                borderRadius: 10,
                borderTopLeftRadius: 80,
                borderBottomRightRadius: 80,
              }}
            />
          ),
          title: 'Select / Search Trip',
          subtitle: '',
        },
        {
          backgroundColor: '#fdeb93',
          paddingBottom: 0,
          image: (
            <Image
              source={require('../../assets/selectPay1.png')}
              style={{
                width: 450,
                height: 400,
                resizeMode: 'center',
                borderRadius: 10,
                borderBottomLeftRadius: 80,
                marginVertical: 0,
              }}
              imageContainerStyles={{marginHorizontal: 0, paddingBottom: 0}}
            />
          ),
          title: 'Select Quantity And Pay',
          subtitle: '',
        },
        {
          backgroundColor: '#e9bcbe',
          image: (
            <Image
              source={require('../../assets/selectSeat.png')}
              style={{
                width: 350,
                height: 400,
                resizeMode: 'center',
                borderRadius: 10,
                borderTopLeftRadius: 80,
                borderBottomRightRadius: 80,
              }}
            />
          ),
          title: 'Select Seat(s) of Choice',
          subtitle: '',
        },
        {
          backgroundColor: '#a6e4d0',
          image: (
            <Image
              source={require('../../assets/ticketLD.png')}
              style={{
                width: 350,
                height: 400,
                resizeMode: 'center',
                borderRadius: 10,
                borderTopLeftRadius: 80,
                borderBottomRightRadius: 80,
              }}
            />
          ),
          title: 'Your Tickets/Ticket Detail',
          subtitle: '',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
