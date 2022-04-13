import React, {useEffect, useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomHomeNavigator from './bottomHomeNavigator.routes';
import StoryScreen from '../screens/StoryScreen';
import GuestsScreen from '../screens/Guests';
import ImagePreviewScreen from '../screens/ImagePreviewScreen';
import UsersPostsScreen from '../screens/UsersPostsScreen';
import PostScreen from '../screens/PostScreen';
import DestinationSearchScreen from '../screens/DestinationSearch';
import SearchTripScreen from '../screens/SearchTripScreen';
import TripsResultScreen from '../screens/TripsResultScreen';
import TripsReResultScreen from '../screens/TripsReResultScreen';
import TripsScreen from '../screens/TripsScreen';
import BookingScreen from '../screens/BookingScreen';
import BookingPaymentScreen from '../screens/BookingPaymentScreen';
import LoginScreen from '../screens/LoginScreen';
import PayScreen from '../screens/PayScreen';
import SignupScreen from '../screens/SignupScreen';
import ReBookingScreen from '../screens/ReBookingScreen';

// import LoginScreen from '../screens/LoginScreen';
// import OnboardingScreen from '../screens/OnboardingScreen';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import SignupScreen from '../screens/SignupScreen';

const RootStack = createStackNavigator();

// const navigation = useNavigation();
// const onPress = () => {
//   navigation.navigate('Login');
// };

const Router = () => {
  return (
    <RootStack.Navigator>
      {/*  */}
      <RootStack.Screen
        name={'Home'}
        component={BottomHomeNavigator}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name={'Guests'}
        component={GuestsScreen}
        options={{
          title: 'Departure Date',
        }}
      />
      <RootStack.Screen
        name="BookDetail"
        component={PostScreen}
        options={{
          title: 'Booking Detail',
          // headerShown: false,
        }}
      />
      <RootStack.Screen
        name="SearchTrip"
        component={SearchTripScreen}
        options={{
          title: 'Search Trip',
          // headerShown: false,
        }}
      />
      <RootStack.Screen
        name="Trips"
        component={TripsScreen}
        options={{
          title: 'Select Trip',
          // headerShown: false,
        }}
      />
      <RootStack.Screen
        name="TripsResult"
        component={TripsResultScreen}
        options={{
          title: 'Select Trip',
          // headerShown: false,
        }}
      />
      <RootStack.Screen
        name="TripsReResult"
        component={TripsReResultScreen}
        options={{
          title: 'Select Trip',
          // headerShown: false,
        }}
      />
      <RootStack.Screen
        name="ReBookTicket"
        component={ReBookingScreen}
        options={{
          title: 'Re-Book Ticket',
          // headerShown: false,
        }}
      />
      <RootStack.Screen
        name="BookTicket"
        component={BookingScreen}
        options={{
          title: 'Book Ticket',
          // headerShown: false,
        }}
      />
      {/* <RootStack.Screen
        name="LoginPage"
        component={LoginScreen}
        options={{
          // title: 'Login',
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          // title: 'SignUp',
          headerShown: false,
        }}
      /> */}
      {/* <RootStack.Screen
        name="BookPayment"
        component={BookingPaymentScreen}
        options={{
          title: 'Booking Summary',
          // headerShown: false,
        }}
      /> */}
      <RootStack.Screen
        name="Pay"
        component={PayScreen}
        options={{
          title: 'Make Payment',
          // headerShown: false,
        }}
      />
      <RootStack.Screen
        name="Destination Search"
        component={DestinationSearchScreen}
        options={{
          title: 'Search your destination',
          headerTitleAlign: 'center',
          // headerShown: false,
        }}
      />
      {/* <RootStack.Screen
        name="UsersPosts"
        component={BottomHomeNavigator}
        options={{
          headerShown: false,
        }}
      /> */}
      <RootStack.Screen
        name="Posts"
        component={UsersPostsScreen}
        options={
          {
            // headerShown: false,
          }
        }
      />
      {/* <RootStack.Screen
        name="Bookings"
        component={BottomHomeNavigator}
        options={
          {
            // headerShown: false,
          }
        }
      /> */}
      <RootStack.Screen
        name="CreatePost"
        component={BottomHomeNavigator}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="Story"
        component={StoryScreen}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="ImagePreview"
        component={ImagePreviewScreen}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

export default Router;
