import React from 'react';
import {View, FlatList, Pressable, Text, Dimensions} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Trips from '../../components/Trips';
import posts from '../../assets/data/feed';
// import Feed from '../../components/Feed';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchAvailableFutureTrips,
  fetchAvailableTrips,
  fetchClient,
} from '../../redux/actions/dataActions';
import styles from './styles';
import TripsResult from '../../components/TripsResult';
import {ScrollView} from 'react-native-gesture-handler';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const TripsResultScreen = props => {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.data);
  const availableTrip = useSelector(state => state.data.availableTrip);

  const route = useRoute();
  const navigation = useNavigation();

  const onPress = () => {
    dispatch(fetchClient(route.params.compId));
    if (!loading) {
      navigation.navigate('SearchTrip');
    }
  };

  // dispatch(fetchAvailableFutureTrips(route.params.compId));
  // dispatch(fetchClient(compId));

  // const clients = useSelector(state => state.data.clients);
  // const {posts} = props;
  // console.log(availableTrip);
  // console.log(loading);
  // console.log(route);
  return (
    // <SafeAreaView>
    // <Feed />
    // </SafeAreaView>
    <View>
      {/* <Pressable style={styles.searchButton} onPress={() => onPress()}>
        <Fontisto name="search" size={25} color={'#6C63FF'} />
        <Text style={styles.searchButtonText}>Search Trip</Text>
      </Pressable> */}
      {!loading ? (
        availableTrip.length > 0 ? (
          <View style={{marginTop: 20, marginBottom: 5}}>
            <FlatList
              data={availableTrip}
              keyExtractor={availableTrip => availableTrip._id}
              renderItem={({item}) => <TripsResult post={item} />}
              refreshing={loading}
              onRefresh={() =>
                dispatch(
                  fetchAvailableTrips(
                    route.params.compId,
                    route.params.tripData,
                  ),
                )
              }
            />
          </View>
        ) : (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: Dimensions.get('screen').height,
            }}>
            <Text style={{color: 'gray', fontSize: 25}}>
              Trip Not Available
            </Text>
          </View>
        )
      ) : (
        <View style={{height: 250000}}>
          <ScrollView
            style={{flex: 1, height: 3500}}
            contentContainerStyle={{alignItems: 'center', height: 3500}}>
            <SkeletonPlaceholder>
              <View style={{marginTop: 10}}>
                <View
                  style={{
                    marginTop: 6,
                    width: Dimensions.get('window').width - 20,
                    height: 105,
                    borderRadius: 20,
                  }}
                />
              </View>
              <View style={{marginTop: 10}}>
                <View
                  style={{
                    marginTop: 6,
                    width: Dimensions.get('window').width - 20,
                    height: 105,
                    borderRadius: 20,
                  }}
                />
              </View>
              <View style={{marginTop: 10}}>
                <View
                  style={{
                    marginTop: 6,
                    width: Dimensions.get('window').width - 20,
                    height: 105,
                    borderRadius: 20,
                  }}
                />
              </View>
              <View style={{marginTop: 10}}>
                <View
                  style={{
                    marginTop: 6,
                    width: Dimensions.get('window').width - 20,
                    height: 105,
                    borderRadius: 20,
                  }}
                />
              </View>
              <View style={{marginTop: 10}}>
                <View
                  style={{
                    marginTop: 6,
                    width: Dimensions.get('window').width - 20,
                    height: 105,
                    borderRadius: 20,
                  }}
                />
              </View>
            </SkeletonPlaceholder>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default TripsResultScreen;
