import React, {useState} from 'react';
import {
  Dimensions,
  Pressable,
  Text,
  View,
  Button,
  Platform,
} from 'react-native';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import SelectDropdown from 'react-native-select-dropdown';
import {Dropdown} from 'react-native-material-dropdown';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAvailableTrips} from '../../redux/actions/dataActions';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SearchTrip = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const {loading} = useSelector(state => state.data);
  const client = useSelector(state => state.data.client);

  // console.log(date);
  // console.log(client);

  const onPress = () => {
    const tripData = {
      from: from,
      to: to,
      date: date,
    };
    if (client) {
      const compId = client._id;
      // console.log(compId);
      if (!loading) {
        dispatch(fetchAvailableTrips(compId, tripData));

        // console.log(availableTrip);
      }
    }
    if (!loading) {
      const tripData1 = {
        from: from,
        to: to,
        date: date,
      };
      navigation.navigate('TripsResult', {
        compId: client._id,
        tripData: tripData1,
      });
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const navigation = useNavigation();

  // const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  return (
    <View style={{alignItems: 'center', marginTop: 40}}>
      {/* <Text>Trips</Text> */}
      {client ? (
        <View>
          <SelectDropdown
            defaultButtonText="Departure"
            data={client?.locations}
            buttonStyle={{
              width: Dimensions.get('window').width - 40,
              backgroundColor: 'white',
              marginTop: 15,
            }}
            onSelect={(selectedItem, index) => {
              // console.log(selectedItem._id, index);
              setFrom(selectedItem._id);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem.name;
            }}
            renderDropdownIcon={() => (
              <FontAwesome name="caret-down" size={25} color="gray" />
            )}
            dropdownIconPosition="right"
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item.name;
            }}
          />
          <SelectDropdown
            defaultButtonText="Destination"
            data={client?.locations}
            buttonStyle={{
              width: Dimensions.get('window').width - 40,
              backgroundColor: 'white',
              marginTop: 15,
            }}
            onSelect={(selectedItem, index) => {
              // console.log(selectedItem._id, index);
              setTo(selectedItem._id);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem.name;
            }}
            renderDropdownIcon={() => (
              <FontAwesome name="caret-down" size={25} color="gray" />
            )}
            dropdownIconPosition="right"
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item.name;
            }}
          />
        </View>
      ) : null}

      {/* <View style={{marginTop: 15}}> */}
      {/* <DatePicker mode="date" date={date} onDateChange={setDate} /> */}
      {/* </View> */}
      <View style={{marginTop: 25}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 5,
          }}>
          <View style={{borderRadius: 10, backgroundColor: 'black'}}>
            <Button
              onPress={showDatepicker}
              title="Select Date"
              style={{backgroundColor: 'black'}}
            />
          </View>

          <View
            style={{
              marginLeft: 15,
              width: 200,
              backgroundColor: 'white',
              height: 40,
              alignItems: 'flex-start',
              padding: 5,
            }}>
            <Text style={{fontSize: 20}}>
              {moment(date).format('DD MMM, YYYY')}
            </Text>
          </View>
        </View>
        {/* <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View> */}
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
      <TouchableOpacity
        onPress={() => onPress()}
        style={{
          marginTop: 50,
          backgroundColor: '#87c830',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          marginHorizontal: 20,
          borderRadius: 20,
          width: 300,
        }}>
        <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
          Search
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchTrip;
