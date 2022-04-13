import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Feather from 'react-native-vector-icons/Feather';

import SearchScreen from '../screens/SearchScreen';
import {Image} from 'react-native';
import ProfileScreen from '../screens/ProfileScreen';

const SearchUsersRoutesStack = createStackNavigator();

const SearchUsersRoutes = () => {
  return (
    <SearchUsersRoutesStack.Navigator>
      <SearchUsersRoutesStack.Screen
        name="SearchUsers"
        component={SearchScreen}
        options={{
          title: '',
          headerTitleAlign: 'center',
          headerLeftContainerStyle: {
            paddingLeft: 15,
          },
          headerRightContainerStyle: {
            paddingRight: 15,
          },
          // headerLeft: () => <Feather name="camera" size={25} color={'#000'} />,
          headerTitle: () => (
            <Image
              source={require('../assets/logo.png')}
              resizeMode="contain"
              style={{width: 135, height: 50}}
            />
          ),
          // headerRight: () => <Feather name="plus" size={30} color={'#000'} />,
        }}
      />
      <SearchUsersRoutesStack.Screen
        name="SearchProfile"
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
      />
    </SearchUsersRoutesStack.Navigator>
  );
};

export default SearchUsersRoutes;
