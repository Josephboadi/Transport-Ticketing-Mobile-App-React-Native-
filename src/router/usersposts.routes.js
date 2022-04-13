import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Feather from 'react-native-vector-icons/Feather';

import UsersPostsScreen from '../screens/UsersPostsScreen';

const UsersPostsStack = createStackNavigator();

const UsersPostsRoutes = () => {
  return (
    <UsersPostsStack.Navigator>
      <UsersPostsStack.Screen
        name="UsersPosts"
        component={UsersPostsScreen}
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
    </UsersPostsStack.Navigator>
  );
};

export default UsersPostsRoutes;
