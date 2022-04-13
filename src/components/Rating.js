import React from 'react';
// import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MatUiIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MatIcons from 'react-native-vector-icons/MaterialIcons';
import {Text, View} from 'react-native';

const Rating = ({value, text, color}) => {
  return (
    <View style={{span: '1rem', flexDirection: 'row'}}>
      <View>
        {value >= 1 ? (
          <Ionicons name="star" size={20} color="#f8e825" />
        ) : value >= 0.5 ? (
          <Ionicons name="star-half-outline" size={20} color="#f8e825" />
        ) : (
          <Ionicons name="star" size={20} color="#f8e825" />
        )}

        {/* <i
          style={{ color }}
          className={
            value >= 1
              ? "fas fa-star"
              : value >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }></i> */}
      </View>
      <View>
        {value >= 2 ? (
          <Ionicons name="star" size={20} color="#f8e825" />
        ) : value >= 1.5 ? (
          <Ionicons name="star-half-outline" size={20} color="#f8e825" />
        ) : (
          <Ionicons name="star" size={20} color="#f8e825" />
        )}
        {/* <i
          style={{ color }}
          className={
            value >= 2
              ? "fas fa-star"
              : value >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }></i> */}
      </View>
      <View>
        {value >= 3 ? (
          <Ionicons name="star" size={20} color="#f8e825" />
        ) : value >= 2.5 ? (
          <Ionicons name="star-half-outline" size={20} color="#f8e825" />
        ) : (
          <Ionicons name="star" size={20} color="#f8e825" />
        )}
        {/* <i
          style={{ color }}
          className={
            value >= 3
              ? "fas fa-star"
              : value >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }></i> */}
      </View>
      <View>
        {value >= 4 ? (
          <Ionicons name="star" size={20} color="#f8e825" />
        ) : value >= 3.5 ? (
          <Ionicons name="star-half-outline" size={20} color="#f8e825" />
        ) : (
          <Ionicons name="star" size={20} color="#f8e825" />
        )}
        {/* <i
          style={{ color }}
          className={
            value >= 4
              ? "fas fa-star"
              : value >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }></i> */}
      </View>
      <View>
        {value >= 5 ? (
          <Ionicons name="star" size={20} color="#f8e825" />
        ) : value >= 4.5 ? (
          <Ionicons name="star-half-outline" size={20} color="#f8e825" />
        ) : (
          <Ionicons name="star" size={20} color="#f8e825" />
        )}
        {/* <i
          style={{ color }}
          className={
            value >= 5
              ? "fas fa-star"
              : value >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }></i> */}
      </View>
      <Text style={{marginLeft: 10}}>{text && text}</Text>
    </View>
  );
};

// Rating.defaultProps = {
//   color: '#f8e825',
// };

// Rating.propTypes = {
//   value: PropTypes.number.isRequired,
//   text: PropTypes.string.isRequired,
//   color: PropTypes.string,
// };

export default Rating;
