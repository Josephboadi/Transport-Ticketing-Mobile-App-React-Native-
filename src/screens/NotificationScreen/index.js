import React from 'react';
import {Text, View} from 'react-native';

const Notification = () => {
  return (
    <View style={{backgroundColor: 'blue', height: 1500}}>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 200,
          fontSize: 30,
          color: 'white',
        }}>
        Notification Page
      </Text>
    </View>
  );
};

export default Notification;
