import React from 'react';
import {Text, View} from 'react-native';

const DiscoveryScreen = () => {
  return (
    <View style={{backgroundColor: 'blue', height: 1500}}>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 200,
          fontSize: 30,
          color: 'white',
        }}>
        Discovery Page
      </Text>
    </View>
  );
};

export default DiscoveryScreen;
