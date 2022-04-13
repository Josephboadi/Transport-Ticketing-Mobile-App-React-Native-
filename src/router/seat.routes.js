import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import StoryScreen from '../screens/StoryScreen';
import logo from '../assets/images/logo.png';
import BookingPaymentScreen from '../screens/BookingPaymentScreen';

const SeatStack = createStackNavigator();

const SeatRoutes = () => {
  return (
    <SeatStack.Navigator>
      <SeatStack.Screen
        name="BookPayment"
        component={BookingPaymentScreen}
        options={{
          headerTitle: 'Select Seat',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#fff',
            shadowColor: '#fff',
            elevation: 0,
          },
        }}
      />
      {/* <SeatStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: '',
          headerTitleAlign: 'center',
          headerLeftContainerStyle: {
            paddingLeft: 15,
          },
          headerRightContainerStyle: {
            paddingRight: 15,
          },
          headerTitle: () => (
            <Image
              source={require('../assets/logo.png')}
              resizeMode="contain"
              style={{width: 135, height: 50}}
            />
          ),
        }}
      /> */}
    </SeatStack.Navigator>
  );
};

export default SeatRoutes;
