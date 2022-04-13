import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import auth from '@react-native-firebase/auth';
// import {AuthContext} from './AuthProvider';

import Auth1Stack from './Auth1Stack';
import Router from './AppStack';
import {useSelector} from 'react-redux';

const Routes = () => {
  // const dispatch = useDispatch();
  // const {user, setUser} = useContext(AuthContext);
  // const [initializing, setInitializing] = useState(true);

  // const [loading, setLoading] = useState(true);
  // const {loading} = useSelector(state => state.data);
  const {
    account: {role},
    authenticated,
    firstName,
    lastName,
    pic,
    address,
    imageUrl,
  } = useSelector(state => state.auth);

  // const onAuthStateChanged = user => {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // };

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // if (initializing) return null;

  return (
    <NavigationContainer>
      {authenticated && role === 'ROLE_USER' ? <Router /> : <Auth1Stack />}
      {/* <Router /> */}
    </NavigationContainer>
  );
};

export default Routes;
