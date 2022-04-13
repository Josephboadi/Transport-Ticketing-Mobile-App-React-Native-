import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import styles from './styles.js';
import {useDispatch, useSelector} from 'react-redux';
import {fetchClientsByAddress} from '../../redux/actions/dataActions.js';

const GuestsScreen = props => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [date, setDate] = useState(new Date());

  // console.log(date);

  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.data);
  const clientsSearch = useSelector(state => state.data.clientsSearch);
  // const clients = useSelector(state => state.data.clients);

  const navigation = useNavigation();
  const route = useRoute();

  // console.log(route);
  // console.log(clientsSearch);

  const onPress = () => {
    dispatch(
      fetchClientsByAddress(
        route.params.originPlace.details.geometry.location.lat,
        route.params.originPlace.details.geometry.location.lng,
        route.params.to,
        date,
      ),
    );

    let countDownDate = new Date().getTime();
    let countDownDateSeconds =
      Math.floor((countDownDate % (1000 * 60)) / 1000) + 10;

    // update every second
    let x = setInterval(function () {
      // Get todays date and time
      let now = new Date().getTime();

      let nowSeconds = Math.floor((now % (1000 * 60)) / 1000);

      // find the distance between now and count down date
      let distance = countDownDateSeconds - nowSeconds;

      if (distance < 0) {
        clearInterval(x);
        if (!loading) {
          // console.log(clientsSearch.clients.branches);
          navigation.navigate('Home', {
            screen: 'Home',
            params: {
              screen: 'SearchResults',
              // params: {
              //   guests: adults + children,
              //   viewport: route.params.viewport,
              // },
            },
          });
        }
      }
    }, 1000);
  };

  // console.log(route.params.originPlace.details.geometry.location.lat);
  // console.log(route.params.originPlace.details.geometry.location.lng);
  // console.log(route.params.destinationPlace[0].location);

  return (
    <View
      style={{
        alignItems: 'center',
        height: '100%',
      }}>
      <Text
        style={{
          fontSize: 20,
          marginTop: 15,
          fontWeight: 'bold',
          // marginLeft: 25,
        }}>
        Select Departure Date
      </Text>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flex: 1,
          height: '100%',
        }}>
        <View style={{marginTop: 15}}>
          <DatePicker mode="date" date={date} onDateChange={setDate} />
        </View>

        {/* <View>
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Adults</Text>
            <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
            </Pressable>

            <Text style={{marginHorizontal: 20, fontSize: 16}}>{adults}</Text>

            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Children</Text>
            <Text style={{color: '#8d8d8d'}}>Ages 2-12</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
            </Pressable>

            <Text style={{marginHorizontal: 20, fontSize: 16}}>{children}</Text>

            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Infants</Text>
            <Text style={{color: '#8d8d8d'}}>Under 2</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
            </Pressable>

            <Text style={{marginHorizontal: 20, fontSize: 16}}>{infants}</Text>

            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
            </Pressable>
          </View>
        </View>
      </View> */}

        <TouchableOpacity
          onPress={() => onPress()}
          style={{
            marginBottom: 20,
            backgroundColor: '#87c830',
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            marginHorizontal: 20,
            borderRadius: 20,
            width: 300,
          }}>
          {loading ? (
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
              Loading
            </Text>
          ) : (
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
              Search
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GuestsScreen;
