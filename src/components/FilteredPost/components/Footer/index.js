// import React, {useState, useEffect} from 'react';
// import {
//   FlatList,
//   Text,
//   TextInput,
//   TouchableWithoutFeedback,
//   View,
// } from 'react-native';
// import ADIcon from 'react-native-vector-icons/AntDesign';
// import FontistoIcon from 'react-native-vector-icons/Fontisto';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Entypo from 'react-native-vector-icons/Entypo';
// import MatIcons from 'react-native-vector-icons/MaterialIcons';
// import styles from './styles';
// import {useNavigation} from '@react-navigation/core';
// import ProfilePicture from '../../../ProfilePicture';
// import Messages from '../../../Messages';

// const Footer = ({likesCount: likesCountProp, caption, postedAt, id}) => {
//   const [isLiked, setIsLiked] = useState(false);
//   const [likesCount, setLikesCount] = useState(0);
//   const [openComment, setOpenComment] = useState(false);
//   const [messages, setMessages] = useState([]);

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

//   const onCommentPressed = () => {
//     // const amount = isLiked ? -1 : 1;
//     // setLikesCount(likesCount + amount);
//     setOpenComment(true);
//   };

//   const onCloseCommentPressed = () => {
//     // const amount = isLiked ? -1 : 1;
//     // setLikesCount(likesCount + amount);
//     setOpenComment(false);
//   };

//   useEffect(() => {
//     setLikesCount(likesCountProp);
//   }, []);

//   useEffect(() => {
//     setMessages([
//       {
//         _id: 1,
//         text:
//           'Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this',
//         createdAt: 'a day ago',
//         user: {
//           _id: 2,
//           name: 'React Native',
//           avatar: require('../../../../assets/users/user-3.jpg'),
//         },
//       },
//       {
//         _id: 2,
//         text: 'Im killing it',
//         createdAt: 'two weeks ago',
//         user: {
//           _id: 1,
//           name: 'React Native',
//           avatar: require('../../../../assets/users/user-3.jpg'),
//         },
//       },
//       {
//         _id: 3,
//         text:
//           'Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this',
//         createdAt: 'a day ago',
//         user: {
//           _id: 2,
//           name: 'React Native',
//           avatar: require('../../../../assets/users/user-3.jpg'),
//         },
//       },
//       {
//         _id: 4,
//         text: 'Im killing it',
//         createdAt: 'two weeks ago',
//         user: {
//           _id: 1,
//           name: 'React Native',
//           avatar: require('../../../../assets/users/user-3.jpg'),
//         },
//       },
//       {
//         _id: 5,
//         text:
//           'Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this',
//         createdAt: 'a day ago',
//         user: {
//           _id: 2,
//           name: 'React Native',
//           avatar: require('../../../../assets/users/user-3.jpg'),
//         },
//       },
//       {
//         _id: 6,
//         text: 'Im killing it',
//         createdAt: 'two weeks ago',
//         user: {
//           _id: 1,
//           name: 'React Native',
//           avatar: require('../../../../assets/users/user-3.jpg'),
//         },
//       },
//       {
//         _id: 7,
//         text:
//           'Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this',
//         createdAt: 'a day ago',
//         user: {
//           _id: 2,
//           name: 'React Native',
//           avatar: require('../../../../assets/users/user-3.jpg'),
//         },
//       },
//       {
//         _id: 8,
//         text: 'Im killing it',
//         createdAt: 'two weeks ago',
//         user: {
//           _id: 1,
//           name: 'React Native',
//           avatar: require('../../../../assets/users/user-3.jpg'),
//         },
//       },
//     ]);
//   }, []);

//   const navigation = useNavigation();
//   const onPress = () => {
//     navigation.navigate('ImagePreview', {userId: id});
//   };

//   return (
//     <View>
//       {openComment ? (
//         <View>
//           <View style={styles.commentHeader}>
//             <TouchableWithoutFeedback onPress={onCloseCommentPressed}>
//               <Ionicons name="arrow-back" size={23} color={'#545454'} />
//             </TouchableWithoutFeedback>
//             <Text>Comments</Text>
//             <TouchableWithoutFeedback onPress={onCloseCommentPressed}>
//               <Ionicons name="close" size={23} color={'#545454'} />
//             </TouchableWithoutFeedback>
//           </View>
//           <View style={styles.bottomContainer}>
//             <ProfilePicture
//               uri={require('../../../../assets/users/user-3.jpg')}
//               size={40}
//             />
//             <View style={styles.textInputContainer}>
//               <TextInput
//                 style={styles.textInput}
//                 editable
//                 placeholder="Comment on Image"
//                 placeholderTextColor={'black'}
//               />
//             </View>
//             <View style={styles.messageButton}>
//               <Ionicons
//                 name="paper-plane-outline"
//                 size={30}
//                 // color={'#ffffff'}
//               />
//             </View>
//           </View>
//           <View style={(styles.commentBody, {flex: 1})}>
//             <FlatList
//               contentContainerStyle={{flexGrow: 1}}
//               style={{flex: 1}}
//               data={messages}
//               keyExtractor={({_id}) => _id}
//               renderItem={({item}) => <Messages message={item} />}
//             />
//           </View>
//         </View>
//       ) : (
//         <View>
//           <View style={styles.iconsContainer}>
//             <View style={styles.leftItems}>
//               <TouchableWithoutFeedback onPress={onLikePressed}>
//                 {isLiked ? (
//                   <ADIcon name="heart" size={25} color={'#c30000'} />
//                 ) : (
//                   <ADIcon name="hearto" size={25} color={'#545454'} />
//                 )}
//               </TouchableWithoutFeedback>
//               <TouchableWithoutFeedback onPress={onCommentPressed}>
//                 <View style={{flexDirection: 'row'}}>
//                   <Text style={{marginRight: 5}}>10</Text>
//                   <FontistoIcon name="comment" size={23} color={'#545454'} />
//                 </View>
//               </TouchableWithoutFeedback>
//               {/* <IonIcon name="paper-plane-outline" size={23} color={'#545454'} /> */}
//             </View>
//             <View style={styles.rightItems}>
//               <TouchableWithoutFeedback onPress={onPress}>
//                 <MatIcons name="preview" size={25} color={'#545454'} />
//               </TouchableWithoutFeedback>
//               <TouchableWithoutFeedback onPress={onTagPressed}>
//                 <Entypo name="tag" size={25} color={'#545454'} />
//               </TouchableWithoutFeedback>
//             </View>
//           </View>

//           <Text style={styles.likes}>{likesCount} Likes</Text>
//           <Text style={styles.caption}>{caption}</Text>
//           <Text style={styles.postedAt}>{postedAt}</Text>
//           {/* <Text style={styles.postedAt}>{postedAt.toString()}</Text> */}
//         </View>
//       )}
//     </View>
//   );
// };

// export default Footer;
