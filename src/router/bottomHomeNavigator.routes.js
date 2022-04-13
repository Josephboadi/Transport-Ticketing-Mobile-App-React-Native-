import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MatUiIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeStackScreen from './home.routes';
// import DiscoveryScreen from '../screens/DiscoveryScreen';
import CreatePostScreen from './addposts.routes';
// import UsersPostsScreen from './usersposts.routes';
import UsersPostsScreen from '../screens/UsersPostsScreen';

import ProfileStack from './profile.routes';
import BookingsStack from './bookings.routes';
import SeatStack from './seat.routes';
// importSeatStack {TouchableOpacity} from 'react-native';
import {AuthContext} from './AuthProvider';
// import AddPostScreen from '../screens/AddPostScreen';
// import SearchUsersRoutes from './searchusers.routes';

const Tab = createBottomTabNavigator();

const BottomHomeNavigator = () => {
  const {logout} = useContext(AuthContext);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return <Fontisto name="home" size={size} color={color} />;
          }

          if (route.name === 'BookPayment') {
            return (
              <MaterialCommunityIcons name="seat" size={size} color={color} />
            );
          }

          if (route.name === 'Bookings') {
            return <Fontisto name="bus-ticket" size={size} color={color} />;
          }

          // if (route.name === 'CreatePost') {
          //   return <Feather name="plus-square" size={size} color={color} />;
          // }

          // if (route.name === 'UsersPosts') {
          // return (
          // <TouchableOpacity onPress={() => logout()}>
          // <MatUiIcons name="post-outline" size={size} color={color} />
          // </TouchableOpacity>
          // );
          // }

          if (route.name === 'EditProfile') {
            return <Ionicons name="person" size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#87c830',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="BookPayment" component={SeatStack} />
      <Tab.Screen name="Bookings" component={BookingsStack} />
      {/* <Tab.Screen name="CreatePost" component={CreatePostScreen} /> */}
      {/* <Tab.Screen name="UsersPosts" component={UsersPostsScreen} /> */}
      <Tab.Screen name="EditProfile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default BottomHomeNavigator;
