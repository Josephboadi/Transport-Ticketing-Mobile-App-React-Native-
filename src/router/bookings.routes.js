import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import BookingsScreen from '../screens/BookingsScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import StoryScreen from '../screens/StoryScreen';
import logo from '../assets/images/logo.png';
import BookingsDetailScreen from '../screens/BookingsDetailScreen';

const BookingsStack = createStackNavigator();

const BookingsRoutes = () => {
  return (
    <BookingsStack.Navigator>
      <BookingsStack.Screen
        name="Bookings"
        component={BookingsScreen}
        options={{
          title: 'Tickets',
          headerTitleAlign: 'center',
          //   headerLeftContainerStyle: {
          //     paddingLeft: 15,
          //   },
          //   headerRightContainerStyle: {
          //     paddingRight: 15,
          //   },
          //   headerTitle: () => (
          //     <Image
          //       source={require('../assets/logo.png')}
          //       resizeMode="contain"
          //       style={{width: 135, height: 50}}
          //     />
          //   ),
        }}
      />
      <BookingsStack.Screen
        name="BookingsDetail"
        component={BookingsDetailScreen}
        options={{
          headerTitle: 'Ticket Detail',
          //   headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#fff',
            shadowColor: '#fff',
            elevation: 0,
          },
        }}
      />
    </BookingsStack.Navigator>
  );
};

export default BookingsRoutes;
