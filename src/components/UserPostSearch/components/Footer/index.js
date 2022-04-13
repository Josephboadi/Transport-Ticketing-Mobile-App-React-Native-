// import React, {useState, useEffect} from 'react';
// import {Text, TouchableWithoutFeedback, View} from 'react-native';
// import ADIcon from 'react-native-vector-icons/AntDesign';
// import FontistoIcon from 'react-native-vector-icons/Fontisto';
// import IonIcon from 'react-native-vector-icons/Ionicons';
// import Entypo from 'react-native-vector-icons/Entypo';
// import MatIcons from 'react-native-vector-icons/MaterialIcons';
// import styles from './styles';
// import {useNavigation} from '@react-navigation/core';

// const Footer = ({likesCount: likesCountProp, caption, postedAt, id}) => {
//   const [isLiked, setIsLiked] = useState(false);
//   const [likesCount, setLikesCount] = useState(0);

//   const [isTaged, setIsUntaged] = useState(false);
//   // const [likesCount, setLikesCount] = useState(0);

//   const onLikePressed = () => {
//     const amount = isLiked ? -1 : 1;
//     setLikesCount(likesCount + amount);
//     setIsLiked(!isLiked);
//   };

//   const onTagPressed = () => {
//     // const amount = isLiked ? -1 : 1;
//     // setLikesCount(likesCount + amount);
//     setIsUntaged(!isTaged);
//   };

//   useEffect(() => {
//     setLikesCount(likesCountProp);
//   }, []);

//   const navigation = useNavigation();
//   const onPress = () => {
//     navigation.navigate('ImagePreview', {userId: id});
//   };

//   return (
//     <View>
//       <View style={styles.iconsContainer}>
//         <View style={styles.leftItems}>
//           <TouchableWithoutFeedback onPress={onLikePressed}>
//             {isLiked ? (
//               <ADIcon name="heart" size={25} color={'#c30000'} />
//             ) : (
//               <ADIcon name="hearto" size={25} color={'#545454'} />
//             )}
//           </TouchableWithoutFeedback>

//           <FontistoIcon name="comment" size={23} color={'#545454'} />
//           {/* <IonIcon name="paper-plane-outline" size={23} color={'#545454'} /> */}
//         </View>
//         <View style={styles.rightItems}>
//           <TouchableWithoutFeedback onPress={onPress}>
//             <MatIcons name="preview" size={25} color={'#545454'} />
//           </TouchableWithoutFeedback>
//           <TouchableWithoutFeedback onPress={onTagPressed}>
//             <Entypo name="tag" size={25} color={'#545454'} />
//           </TouchableWithoutFeedback>
//         </View>
//       </View>

//       <Text style={styles.likes}>{likesCount} Likes</Text>
//       <Text style={styles.caption}>{caption}</Text>
//       <Text style={styles.postedAt}>{postedAt}</Text>
//     </View>
//   );
// };

// export default Footer;
