import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
  ScrollView,
  Dimensions,
} from 'react-native';
import moment from 'moment';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';
import {
  fetchAvailableTrip,
  fetchClient,
} from '../../redux/actions/dataActions.js';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {useDispatch, useSelector} from 'react-redux';
// import post from '../../assets/data/feed'

const TripsResult = props => {
  const dispatch = useDispatch;
  const post = props.post;
  const [pod, setPod] = useState('');
  const width = useWindowDimensions().width;
  const {loading} = useSelector(state => state.data);

  const navigation = useNavigation();

  useEffect(() => {
    setPod(post);
  }, []);

  const goToPostPage = data => {
    // dispatch(fetchAvailableTrip(post._id));
    if (!loading) {
      // navigation.navigate('BookTicket', {postId: post.id});
      navigation.navigate('BookTicket', {id: data.id, compId: data.compId});
    }
  };

  return (
    <>
      {!pod ? (
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
            </SkeletonPlaceholder>
          </ScrollView>
        </View>
      ) : (
        <ScrollView>
          <Pressable
            onPress={() => goToPostPage({id: post._id, compId: post.creator})}
            style={[styles.container, {width: width, marginVertical: 5}]}>
            <View style={styles.innerContainer}>
              {/* Image  */}
              {/* <Image style={styles.image} source={{uri: post.image}} /> */}
              <View
                style={{
                  height: '100%',
                  width: 80,
                  backgroundColor: '#87c830',
                  justifyContent: 'center',
                  alignItems: 'center',
                  // color: 'white',
                }}>
                <Text
                  style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>
                  Book Now
                </Text>
              </View>

              <View style={{flex: 1, marginHorizontal: 10}}>
                {/* Bed & Bedroom  */}
                <Text style={styles.bedrooms}>
                  Date: {moment(post.date).format('DD MMM, YYYY')} Time:{' '}
                  {/* {post.time} */}
                  {moment(post.time).format('hh:mm A')}
                  {/* {post.bed} bed {post.bedroom} bedroom */}
                </Text>

                {/* Type & Description */}
                <Text style={styles.description} numberOfLines={2}>
                  {post.from.name} - {post.to.name}
                  {/* {post.type}. {post.title} */}
                </Text>

                {/*  Old price & new price */}
                <Text style={styles.prices}>
                  <Text style={styles.price}>
                    Tickets Av. {post.ticketsCount}
                    {/* ${post.newPrice} */}
                  </Text>
                  {/* / night */}
                </Text>
              </View>
            </View>
          </Pressable>
        </ScrollView>
      )}
    </>
  );
};

export default TripsResult;
