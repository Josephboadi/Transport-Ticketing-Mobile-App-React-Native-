import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  FlatList,
  Pressable,
  Dimensions,
} from 'react-native';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';
import SuggestionRow from './SuggestionRow';
import PlaceRow from './PlaceRow';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SelectDropdown from 'react-native-select-dropdown';
import searchResults from '../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';

import {fetchClientsByAddress} from '../../redux/actions/dataActions.js';

const capitalItems = [
  {id: 'Bolgatanga', title: 'Bolgatanga'},
  {id: 'Wa', title: 'Wa'},
  {id: 'Nalerigu', title: 'Nalerigu'},
  {id: 'Damango', title: 'Damango'},
  {id: 'Tamale', title: 'Tamale'},
  {id: 'Sunyani', title: 'Sunyani'},
  {id: 'Techiman', title: 'Techiman'},
  {id: 'Ahafo Goaso', title: 'Ahafo Goaso'},
  {id: 'Kumasi', title: 'Kumasi'},
  {id: 'Dambai', title: 'Dambai'},
  {id: 'Ho', title: 'Ho'},
  {id: 'Sefwi Wiawso', title: 'Sefwi Wiawso'},
  {id: 'Sekondi Takoradi', title: 'Sekondi Takoradi'},
  {id: 'Cape Coast', title: 'Cape Coast'},
  {id: 'Koforidua', title: 'Koforidua'},
  {id: 'Accra', title: 'Accra'},
];

const DestinationSearchScreen = props => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);
  const [data, setData] = useState();
  const [to, setTo] = useState(null);
  const [show, setShow] = useState(false);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const {loading} = useSelector(state => state.data);
  const clients = useSelector(state => state.data.clients);

  const checkNavigation = () => {
    if (originPlace && to) {
      dispatch(
        fetchClientsByAddress(
          originPlace.details.geometry.location.lat,
          originPlace.details.geometry.location.lng,
        ),
      );

      if (clients) {
        setData(clients);
        navigation.navigate('Guests', {
          originPlace,
          to,
          // destinationPlace,
          data,
        });
      }
    }
  };

  useEffect(() => {
    checkNavigation();
  }, [originPlace, to]);

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Departure Branch Location?"
        onPress={(data, details = null) => {
          setOriginPlace({data, details});
        }}
        enablePoweredByContainer={false}
        suppressDefaultStyles
        currentLocation={true}
        currentLocationLabel="Current location"
        styles={{
          textInput: styles.textInput,
          container: styles.autocompleteContainer,
          listView: styles.listView,
          separator: styles.separator,
        }}
        fetchDetails
        query={{
          key: 'AIzaSyCknA5NqdEKOvy1kRV27nOdDpMfUULa2ZY',
          language: 'en',
          // types: '(cities)',
        }}
        renderRow={data => <PlaceRow data={data} />}
        renderDescription={data => data.description || data.vicinity}
        // predefinedPlaces={[homePlace, workPlace]}
      />

      {/* <GooglePlacesAutocomplete
        placeholder="Where to?"
        onPress={(data, details = null) => {
          setDestinationPlace({data, details});
        }}
        enablePoweredByContainer={false}
        suppressDefaultStyles
        styles={{
          textInput: styles.textInput,
          container: {
            ...styles.autocompleteContainer,
            top: 55,
          },
          separator: styles.separator,
        }}
        fetchDetails
        query={{
          key: 'AIzaSyCknA5NqdEKOvy1kRV27nOdDpMfUULa2ZY',
          language: 'en',
          types: '(cities)',
        }}
        renderRow={data => <PlaceRow data={data} />}
      /> */}

      <SelectDropdown
        data={capitalItems}
        buttonStyle={{
          width: Dimensions.get('window').width - 40,
          backgroundColor: '#eee',
          // marginLeft: 30,
          // justifyContent: 'space-between',
          // alignItems: 'flex-start',

          left: 20,
          top: 50,
        }}
        buttonTextStyle={{
          // left: 120,
          marginLeft: 5,
          textAlign: 'left',
          color: 'grey',
        }}
        onSelect={(selectedItem, index) => {
          // console.log(selectedItem.id, index);
          setTo(selectedItem.id);
        }}
        defaultButtonText="Destination?"
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem.title;
        }}
        renderDropdownIcon={() => (
          <FontAwesome name="caret-down" size={25} color="gray" />
        )}
        dropdownStyle={{
          height: 450,
        }}
        rowTextStyle={{
          // alignItems: 'flex-start',
          // right: 110,
          marginLeft: 20,
          textAlign: 'left',
          color: 'grey',
        }}
        dropdownIconPosition="right"
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item.title;
        }}
      />

      {/* Circle near Origin input */}
      <View style={styles.circle} />

      {/* Line between dots */}
      <View style={styles.line} />

      {/* Square near Destination input */}
      <View style={styles.square} />

      {/* <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests', {
            viewport: details.geometry.viewport,
          });
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: 'AIzaSyCknA5NqdEKOvy1kRV27nOdDpMfUULa2ZY',
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={item => <SuggestionRow item={item} />}
      /> */}

      {/* <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests', {
            viewport: details.geometry.viewport,
          });
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: 'AIzaSyCknA5NqdEKOvy1kRV27nOdDpMfUULa2ZY',
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={item => <SuggestionRow item={item} />}
      /> */}
    </View>
  );
};

export default DestinationSearchScreen;
