import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  View,
  ImageBackground,
  Text,
  Pressable,
} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwsome from 'react-native-vector-icons/FontAwesome';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Feed from '../../components/Feed';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
// import {fetchClients} from './redux/actions/dataActions';
import {fetchClients} from '../../redux/actions/dataActions';
import axios from '../../util/axios';
import * as Animatable from 'react-native-animatable';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {logoutAction} from '../../redux/actions/authActions';

const HomeScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.data);
  const {
    account: {role},
    authenticated,
    firstName,
    lastName,
    pic,
    address,
    imageUrl,
  } = useSelector(state => state.auth);
  const clients = useSelector(state => state.data.clients);

  // let payload;

  const [data, setData] = useState();

  // const url = REACT_APP_SERVER_URL;

  // console.log(url);

  // console.log(loading);
  // const fetchClients = async () => {
  //   await axios.get('https://5e72e1b90f68.ngrok.io/clients').then(res => {
  //     payload = res.data;
  //     setData(payload);
  //   });
  // };

  const handleLogout = async () => {
    dispatch(logoutAction());
    // navigation.navigate('Login');
  };

  useEffect(() => {
    // fetchClients();
    dispatch(fetchClients());
    setData(clients);
  }, []);

  // console.log(data);
  // console.log(clients && clients);

  return (
    // <SafeAreaView>
    //   <Feed />
    // </SafeAreaView>
    <View
      // animation="fadeInDownBig"
      style={{
        backgroundColor: '#FDFDFD',
        // height: '100%',
        height: Dimensions.get('screen').height,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <View> */}
      {!authenticated ? (
        navigation.navigate('LoginPage')
      ) : (
        <>
          {/* <AView
            animation="flipInY"
            // delay={2000}
            style={{position: 'absolute', top: 20}}> */}
          <View
            style={{
              marginHorizontal: 10,
              width: Dimensions.get('screen').width - 20,
              display: 'flex',
              flexDirection: 'row',
              position: 'absolute',
              top: 0,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Pressable
                animation="flipInY"
                delay={2000}
                style={styles.searchButton}
                onPress={() => navigation.navigate('Destination Search')}>
                <Fontisto name="search" size={25} color={'#87c830'} />
                <Text style={styles.searchButtonText}>Destination</Text>
              </Pressable>
            </View>

            <View style={{top: 50, marginRight: 10, justifyContent: 'center'}}>
              <Pressable onPress={handleLogout} style={{zIndex: 100}}>
                <FontAwsome name="power-off" size={30} color={'white'} />
              </Pressable>
            </View>
          </View>

          {/* </AView> */}

          <View
            style={{
              top: -160,
              borderBottomLeftRadius: 15,
              height: 570,
              width: '100%',
              backgroundColor: '#87c830',
              marginBottom: -100,
            }}>
            <ImageBackground
              source={require('../../assets/images/travelgh.jpg')}
              style={styles.image}>
              <Animatable.Text
                animation="bounceInDown"
                delay={1000}
                style={styles.title3}>
                Travel gh
              </Animatable.Text>
              <Animatable.Text
                animation="bounceInLeft"
                delay={2000}
                style={styles.title}>
                Think Traveling.
              </Animatable.Text>
              <Animatable.Text
                animation="bounceInUp"
                delay={3000}
                style={styles.title2}>
                We Make it Easy.
              </Animatable.Text>

              {/*  */}
            </ImageBackground>
          </View>

          <Animatable.View
            animation="flipInY"
            delay={4000}
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              // marginTop: 10,
              bottom: 0,
            }}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate('CompanyResults')}>
              <Text style={styles.buttonText}>Select A Transport Company</Text>
            </Pressable>
            <View
              style={{
                marginTop: 10,
                // marginBottom: 10,
                display: 'flex',
                marginHorizontal: 10,
                justifyContent: 'space-between',
                // flex: 1,
              }}>
              <Text
                style={{
                  marginHorizontal: 10,
                  justifyContent: 'center',
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: 'gray',
                  bottom: 15,
                }}>
                Powered By Sesafrica
              </Text>
            </View>
          </Animatable.View>
        </>
      )}
    </View>
  );
};

export default HomeScreen;
