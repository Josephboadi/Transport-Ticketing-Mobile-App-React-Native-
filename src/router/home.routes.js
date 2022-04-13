import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
// import StoryScreen from '../screens/StoryScreen';
// import logo from '../assets/images/logo.png';
// import ProfileScreen from '../screens/ProfileScreen';
import ImagePreviewScreen from '../screens/ImagePreviewScreen';
import CompanyResultsScreen from '../screens/CompanyResults';
// import SearchResults from '../screens/SearchResults';
import SearchResultsScreen from '../screens/SearchResults';
// import SearchResultsMap from '../screens/ProfileScreen/SearchResultsMap';
// import SearchResultsTabNavigator from './SearchResultsTabNavigator';
// import CompanyResultsTabNavigator from './CompanyResultsTabNavigator';

const HomeStack = createStackNavigator();

const HomeRoutes = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          // title: '',
          // headerTitleAlign: 'center',
          // headerLeftContainerStyle: {
          //   paddingLeft: 15,
          // },
          // headerRightContainerStyle: {
          //   paddingRight: 15,
          // },

          // headerLeft: () => <Feather name="camera" size={25} color={'#000'} />,

          // headerTitle: () => (
          //   <Image
          //     source={require('../assets/logo.png')}
          //     resizeMode="contain"
          //     style={{width: 135, height: 50}}
          //   />
          // ),

          // headerRight: () => <Feather name="plus" size={30} color={'#000'} />,
        }}
      />
      <HomeStack.Screen
        name={'CompanyResults'}
        // component={CompanyResultsTabNavigator}
        component={CompanyResultsScreen}
        options={{
          title: 'Select company of choice',
        }}
      />
      <HomeStack.Screen
        name={'SearchResults'}
        // component={SearchResultsTabNavigator}
        component={SearchResultsScreen}
        options={{
          title: 'Select company of choice',
        }}
      />
      {/* <HomeStack.Screen
        name="HomeProfile"
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
          headerBackTitleVisible: false,
        }}
      /> */}
      <HomeStack.Screen
        name="HomePreview"
        component={ImagePreviewScreen}
        options={{
          title: '',
          headerTitleAlign: 'center',
          headerLeftContainerStyle: {
            paddingLeft: 15,
          },
          headerRightContainerStyle: {
            paddingRight: 15,
          },
          headerBackTitleVisible: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeRoutes;
