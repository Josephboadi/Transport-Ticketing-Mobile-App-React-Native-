import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Feather from 'react-native-vector-icons/Feather';

// import AddPostScreen from '../screens/AddPostScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import {Image} from 'react-native';

const AddPostsRoutesStack = createStackNavigator();

const AddPostRoutes = () => {
  return (
    <AddPostsRoutesStack.Navigator>
      <AddPostsRoutesStack.Screen
        name="CreatePost"
        component={CreatePostScreen}
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
    </AddPostsRoutesStack.Navigator>
  );
};

export default AddPostRoutes;
