/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
// import {NavigationContainer} from '@react-navigation/native';
import Providers from './router';
import {Provider} from 'react-redux';
import store from './redux/store';
// import SplashScreen from './screens/SplashScreen';
// import { useState } from 'react';

navigator.geolocation = require('@react-native-community/geolocation');

const App = () => {
  // const { loading } = useSelector((state) => state.data);
  const [white, setWhite] = useState(true);

  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Transport App Location Permission',
          message:
            'Transport App needs access to your location ' +
            'so you can take awesome rides.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    // setTimeout(() => {
    SplashScreen.hide();
    // setWhite(false);
    // }, 2000);
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      // IOS
      Geolocation.requestAuthorization();
    }
  }, []);
  return (
    <>
      {/* {white == true ? (
        <SplashScreen />
      ) : ( */}
      <Provider store={store}>
        {/* <NavigationContainer>
        <StatusBar /> */}

        <Providers />
        {/* </NavigationContainer> */}
      </Provider>
      {/* )} */}
    </>
  );
};

export default App;
