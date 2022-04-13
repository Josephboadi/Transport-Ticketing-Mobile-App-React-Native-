import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
// import Icon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfilePicture from '../../../ProfilePicture';
import styles from './styles';
import moment from 'moment';
// import {} from '../../../../router'

const Header = ({text, name, imageUri, createdAt}) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Posts', {userId: id});
  };

  // console.log(imageUri);

  return (
    <>
      <View style={styles.container}>
        {/* <View> */}
        <View style={styles.left}>
          <ProfilePicture uri={imageUri} size={35} />
          <View
            style={{
              flexDirection: 'column',
              marginTop: 10,

              marginBottom: 5,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.createdAt}>
                {' '}
                {moment(createdAt).fromNow()}
                {/* {createdAt} */}
              </Text>
            </View>
            <View style={{marginRight: 50, marginTop: 5, marginBottom: 8}}>
              <Text style={styles.text}>{text}</Text>
            </View>
          </View>
        </View>

        {/* <View style={styles.right}> */}
        {/* <Icon name="md-trash-bin" size={16} /> */}
        {/* <Icon name="dots-three-vertical" size={16} /> */}
        {/* </View> */}
        {/* <View
            style={{
              height: 2,
              width: '100%',
              backgroundColor: '#C3CFDD',
            }}></View>
        </View> */}
      </View>
    </>
  );
};

export default Header;
