import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Marker} from 'react-native-maps';

const CustomMarker = props => {
  const {coordinate, price, data} = props;
  // const [data, setData] = useState();
  // onPress, isSelected
  // isSelected ? "black" :
  // isSelected ? "white" :
  // onPress={onPress}
  // AsyncStorage.getItem('clients').then(value => {
  //   setData(value);
  // });

  // console.log(data);
  // console.log(coordinate);
  return (
    <Marker coordinate={coordinate}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 5,
          borderRadius: 20,
          borderColor: 'grey',
          borderWidth: 1,
        }}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>${price}</Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
