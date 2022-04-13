import React, {useEffect, useState} from 'react';
import SplashScreen from '../screens/SplashScreen';
import {AuthProvider} from './AuthProvider';
import Routes from './Routes';

const Providers = () => {
  // const [white, setWhite] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     // SplashScreen.hide();
  //     setWhite(false);
  //   }, 2000);
  // }, []);
  return (
    <>
      {/* {white == true ? (
        <SplashScreen />
      ) : ( */}
      <AuthProvider>
        <Routes />
      </AuthProvider>
      {/* )} */}
    </>
  );
};

export default Providers;

// import React, {useEffect, useContext} from 'react';
// import {createStackNavigator} from '@react-navigation/stack';

// import BottomHomeNavigator from './bottomHomeNavigator.routes';
// import StoryScreen from '../screens/StoryScreen';
// import auth from '@react-native-firebase/auth';
// import LoginScreen from '../screens/LoginScreen';
// import OnboardingScreen from '../screens/OnboardingScreen';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import SignupScreen from '../screens/SignupScreen';
// import {AuthContext} from './AuthProvider.android.js';

// const RootStack = createStackNavigator();

// // const navigation = useNavigation();
// // const onPress = () => {
// //   navigation.navigate('Login');
// // };

// const Router = () => {
//   const [isFirstLaunch, setFirstLaunch] = React.useState(null);

//   const {user, setUser} = useContext(AuthContext);
//   const [initializing, setInitializing] = useState(true);

//   const onAuthStateChanged = user => {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   };

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   if (initializing) return null;

//   useEffect(() => {
//     AsyncStorage.getItem('alreadyLaunched').then(value => {
//       if (value == null) {
//         AsyncStorage.setItem('alreadyLaunched', 'true');
//         setFirstLaunch(true);
//       } else {
//         setFirstLaunch(false);
//       }
//     });
//   }, []);

//   if (isFirstLaunch === null) {
//     return null;
//   } else if (isFirstLaunch === true) {
//     return (
//       <RootStack.Navigator>
//         <RootStack.Screen
//           name={'Onboarding'}
//           component={OnboardingScreen}
//           options={{
//             headerShown: false,
//           }}
//         />
//         {!user ? (
//           <>
//             <RootStack.Screen
//               name={'Login'}
//               component={LoginScreen}
//               options={{
//                 headerShown: false,
//               }}
//             />
//             <RootStack.Screen
//               name={'Signup'}
//               component={SignupScreen}
//               options={{
//                 title: '',
//                 headerStyle: {
//                   backgroundColor: '#f9fafd',
//                   shadowColor: '#f9fafd',
//                   elevation: 0,
//                 },
//                 // headerLeft: () => (
//                 //   <View style={{marginLeft: 10}}>
//                 //     <FontAwesome.Button
//                 //       name="long-arrow-left"
//                 //       size={25}
//                 //       backgroundColor="#f9fafd"
//                 //       color="#333"
//                 //       onPress={onPress}
//                 //     />
//                 //   </View>
//                 // ),
//               }}
//             />{' '}
//           </>
//         ) : (
//           <>
//             <RootStack.Screen
//               name={'Home'}
//               component={BottomHomeNavigator}
//               options={{
//                 headerShown: false,
//               }}
//             />
//             <RootStack.Screen
//               name="Story"
//               component={StoryScreen}
//               options={{
//                 headerShown: false,
//               }}
//             />
//           </>
//         )}
//       </RootStack.Navigator>
//     );
//   } else {
//     return (
//       <RootStack.Navigator>
//         {/* <RootStack.Screen
//           name={'Onboarding'}
//           component={OnboardingScreen}
//           options={{
//             headerShown: false,
//           }}
//         /> */}
//         {!user ? (
//           <>
//             <RootStack.Screen
//               name={'Login'}
//               component={LoginScreen}
//               options={{
//                 headerShown: false,
//               }}
//             />
//             <RootStack.Screen
//               name={'Signup'}
//               component={SignupScreen}
//               options={{
//                 title: '',
//                 headerStyle: {
//                   backgroundColor: '#f9fafd',
//                   shadowColor: '#f9fafd',
//                   elevation: 0,
//                 },
//                 // headerLeft: () => (
//                 //   <View style={{marginLeft: 10}}>
//                 //     <FontAwesome.Button
//                 //       name="long-arrow-left"
//                 //       size={25}
//                 //       backgroundColor="#f9fafd"
//                 //       color="#333"
//                 //     />
//                 //   </View>
//                 // ),
//               }}
//             />
//           </>
//         ) : (
//           <>
//             <RootStack.Screen
//               name={'Home'}
//               component={BottomHomeNavigator}
//               options={{
//                 headerShown: false,
//               }}
//             />
//             <RootStack.Screen
//               name="Story"
//               component={StoryScreen}
//               options={{
//                 headerShown: false,
//               }}
//             />
//           </>
//         )}
//       </RootStack.Navigator>
//     );
//   }
// };

// export default Router;
