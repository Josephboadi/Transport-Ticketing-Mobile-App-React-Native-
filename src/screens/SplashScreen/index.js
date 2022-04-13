import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  View,
  ImageBackground,
  Text,
  Pressable,
  Image,
} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
// import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
// import Feed from '../../components/Feed';
// import {useNavigation} from '@react-navigation/native';
// import {useDispatch, useSelector} from 'react-redux';
// import {fetchClients} from './redux/actions/dataActions';
// import {fetchClients} from '../../redux/actions/dataActions';
// import axios from '../../util/axios';

const SplashScreen = () => {
  // const navigation = useNavigation();

  // const dispatch = useDispatch();
  // const {loading} = useSelector(state => state.data);
  // const {
  //   account: {role},
  //   authenticated,
  //   firstName,
  //   lastName,
  //   pic,
  //   address,
  //   imageUrl,
  // } = useSelector(state => state.auth);
  // const clients = useSelector(state => state.data.clients);

  // let payload;

  // const [data, setData] = useState();

  // const url = REACT_APP_SERVER_URL;

  // console.log(url);

  // console.log(loading);
  // const fetchClients = async () => {
  //   await axios.get('https://5e72e1b90f68.ngrok.io/clients').then(res => {
  //     payload = res.data;
  //     setData(payload);
  //   });
  // };

  // useEffect(() => {
  //   // fetchClients();
  //   dispatch(fetchClients());
  //   setData(clients);
  // }, []);

  // console.log(data);
  // console.log(clients && clients);

  return (
    // <SafeAreaView>
    //   <Feed />
    // </SafeAreaView>
    <View
      style={{
        backgroundColor: '#FDFDFD',
        // height: '100%',
        height: Dimensions.get('screen').height,
        justifyContent: 'center',
      }}>
      {/* <View> */}
      {/* {!authenticated ? (
        navigation.navigate('LoginPage')
      ) : ( */}
      <>
        <Image style={styles.logo} source={require('../../assets/bus.png')} />
        <Text style={styles.title3}>Travel Gh</Text>
        {/* <Pressable
          style={styles.searchButton}
          onPress={() => navigation.navigate('Destination Search')}>
          <Fontisto name="search" size={25} color={'#6C63FF'} />
          <Text style={styles.searchButtonText}>Destination</Text>
        </Pressable> */}

        <ImageBackground
          source={require('../../assets/images/relax1.png')}
          style={styles.image}>
          {/* <Text style={styles.title3}>Travel Gh</Text> */}
          <Text style={styles.title}>Think Traveling.</Text>
          <Text style={styles.title2}>We Make it Easy.</Text>

          {/*  */}
        </ImageBackground>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            // marginTop: 10,
            bottom: -30,
          }}>
          {/* <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('CompanyResults')}>
            <Text style={styles.buttonText}>Select A Travel Company</Text>
          </Pressable> */}
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
                bottom: 45,
              }}>
              Powered By Sesafrica
            </Text>
          </View>
        </View>
      </>
      {/* )} */}
    </View>
  );
};

export default SplashScreen;
