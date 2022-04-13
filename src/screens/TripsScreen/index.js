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
  fetchClient,
} from '../../redux/actions/dataActions';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const TripsScreen = props => {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.data);
  const availableFutureTrip = useSelector(
    state => state.data.availableFutureTrip,
  );

  const route = useRoute();
  const navigation = useNavigation();

  const onPress = () => {
    if (route.params.compId) {
      dispatch(fetchClient(route.params.compId));
      if (!loading) {
        navigation.navigate('SearchTrip');
      }
    }
  };
  //  ;
  // dispatch(fetchClient(compId));
  // const clients = useSelector(state => state.data.clients);
  // const {posts} = props;
  // console.log(availableFutureTrip);
  // console.log(loading);
  // console.log(route);
  return (
    // <SafeAreaView>
    // <Feed />
    // </SafeAreaView>
    <View>
      <Pressable style={styles.searchButton} onPress={() => onPress()}>
        <Fontisto name="search" size={25} color={'#87c830'} />
        <Text style={styles.searchButtonText}>Search Trip</Text>
      </Pressable>
      {!loading ? (
        availableFutureTrip.length > 0 ? (
          <View style={{marginTop: 76, marginBottom: 5}}>
            <FlatList
              data={availableFutureTrip}
              keyExtractor={availableFutureTrip => availableFutureTrip._id}
              renderItem={({item}) => <Trips post={item} />}
              refreshing={loading}
              onRefresh={() =>
                dispatch(fetchAvailableFutureTrips(route.params.compId))
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
              No Trips Available
            </Text>
          </View>
        )
      ) : (
        <View style={{height: 250000}}>
          <ScrollView
            style={{flex: 1, height: 3500, top: 76}}
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
            </SkeletonPlaceholder>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default TripsScreen;
