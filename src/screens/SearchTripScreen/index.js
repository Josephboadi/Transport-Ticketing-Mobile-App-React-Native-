
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {View, Button, SafeAreaView} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useNavigation, useRoute} from '@react-navigation/native';
import SearchTrip from "../../components/SearchTrip"

import styles from './styles.js';
import {useDispatch, useSelector} from 'react-redux';

const SearchTripScreen = () => {
  
  return (
    <SafeAreaView>
      <SearchTrip />
    </SafeAreaView>
  );
};

export default SearchTripScreen;
