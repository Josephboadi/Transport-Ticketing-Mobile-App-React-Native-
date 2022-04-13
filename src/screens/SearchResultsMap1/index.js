import React, {useState, useEffect, useRef} from 'react';
import {View, FlatList, useWindowDimensions, Text} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker1';
// import PostCarouselItem from '../../components/PostCarouselItem';

import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../../graphql/queries';
import places from '../../assets/data/feed';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute} from '@react-navigation/native';

const SearchResultsMaps = props => {
  // const { posts } = props;
  const {loading} = useSelector(state => state.data);
  const clients = useSelector(state => state.data.clientsSearch);

  const route = useRoute();

  const [data, setData] = useState(null);

  // const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  // useEffectt(() => {

  // }, [data]);
  // AsyncStorage.getItem('clients').then(value => {
  //   setData(value);
  // });

  // console.log(data);

  // const flatlist = useRef();
  // const map = useRef();

  // const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  // const onViewChanged = useRef(({viewableItems}) => {
  //   if (viewableItems.length > 0) {
  //     const selectedPlace = viewableItems[0].item;
  //     setSelectedPlaceId(selectedPlace.id);
  //   }
  // });

  // const width = useWindowDimensions().width;

  // useEffect(() => {
  // if (!selectedPlaceId || !flatlist) {
  //   return;
  // }
  // const index = places.findIndex(place => place.id === selectedPlaceId);
  // flatlist.current.scrollToIndex({index});

  // const selectedPlace = places[index];
  // const region = {
  //   latitude: selectedPlace.latitude,
  //   longitude: selectedPlace.longitude,
  //   latitudeDelta: 0.0222,
  //   longitudeDelta: 0.0121,
  //   // latitudeDelta: 0.8,
  //   // longitudeDelta: 0.8,
  // };
  // map.current.animateToRegion(region);
  // }, [selectedPlaceId]);

  {
    /* {data.companies.map(place =>
          place.branches.map(loc => ( */
  }
  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        // ref={map}
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {places.map(place => (
          <CustomMarker
            coordinate={place.coordinate}
            price={place.price}
            data={clients}
            // isSelected={place.id === selectedPlaceId}
            // onPress={() => setSelectedPlaceId(place.id)}
          />
          // )
        ))}
      </MapView>

      {/* <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          // ref={flatlist}
          data={places}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          // snapToInterval={width - 60}
          // snapToAlignment={'center'}
          // decelerationRate={'fast'}
          // viewabilityConfig={viewConfig.current}
          // onViewableItemsChanged={onViewChanged.current}
        />
      </View> */}

      {/* <MapView
        ref={map}
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {posts.map(place => (
          <CustomMarker
            coordinate={{ latitude: place.latitude, longitude: place.longitude }}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />)
        )}
      </MapView>

      <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          ref={flatlist}
          data={posts}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View> */}
    </View>
  );
};

export default SearchResultsMaps;
