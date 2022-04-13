// import {useNavigation} from '@react-navigation/native';
// import React, {useEffect, useState, useContext} from 'react';
// import {
//   Alert,
//   Dimensions,
//   FlatList,
//   ScrollView,
//   StyleSheet,
//   TextInput,
//   View,
// } from 'react-native';
// import Users from '../UserPostSearch';
// // import Stories from '../UserStoriesPreview';
// // import data from '../../postdata/posts';
// import firestore from '@react-native-firebase/firestore';
// import storage from '@react-native-firebase/storage';
// // import userImage3 from '../../assets/users/user-3.jpg';
// // import {AuthContext} from '../../router/AuthProvider';
// // import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
// // import Icon from 'react-native-vector-icons/Ionicons';
// import FormInput from '../FormInput';

// // 'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg',

// const Search = () => {
//   const [search, setSearch] = useState();
//   const [loading, setLoading] = useState(true);
//   const [userData, setUserData] = useState([]);

//   const navigation = useNavigation();

//   const getUser = async () => {
//     try {
//       const list = [];

//       await firestore()
//         .collection('users')
//         .get()
//         .then(querySnapshot => {
//           // console.log('Total Posts: ', querySnapshot.size);
//           querySnapshot.forEach(doc => {
//             const {
//               // userId,
//               fname,
//               lname,
//               userImg,
//             } = doc.data();
//             list.push({
//               id: doc.id,

//               fname,
//               lname,
//               userImg: require('../../assets/users/user-3.jpg'),
//             });
//           });
//         });
//       setUserData(list);
//       if (loading) {
//         setLoading(false);
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   // console.log('UserData: ', userData);

//   useEffect(() => {
//     getUser();
//   }, []);

//   const handleDelete = id => {
//     Alert.alert(
//       'Delete user',
//       'Are you sure?',
//       [
//         {
//           text: 'Cancel',
//           onPress: () => console.log('Cancel Pressed!'),
//           style: 'cancel',
//         },
//         {
//           text: 'Confirm',
//           onPress: () => deleteUser(id),
//         },
//       ],
//       {cancelable: false},
//     );
//   };

//   const deleteUser = id => {
//     // console.log(` new UserId = ${id}`);
//     firestore()
//       .collection('users')
//       .doc(id)
//       .get()
//       .then(documentSnapshot => {
//         if (documentSnapshot.exists) {
//           const {userImg} = documentSnapshot.data();

//           if (userImg != null) {
//             const storageRef = storage().refFromURL(userImg);
//             const imageRef = storage().ref(storageRef.fullPath);

//             imageRef
//               .delete()
//               .then(() => {
//                 console.log(`${userImg} has been deleted successfully.`);
//                 deleteFirestoreData(id);
//               })
//               .catch(e => {
//                 console.log('Error while deleting the image. ', e);
//               });
//             // If the post image is not available
//           } else {
//             deleteFirestoreData(id);
//           }
//         }
//       });
//   };

//   const deleteFirestoreData = id => {
//     firestore()
//       .collection('users')
//       .doc(id)
//       .delete()
//       .then(() => {
//         Alert.alert('User deleted!', 'User has been deleted successfully!');
//         setDeleted(true);
//       })
//       .catch(e => console.log('Error deleting user.', e));
//   };

//   return (
//     <>
//       <View style={styles.bottomContainer}>
//         {/* <View style={styles.textInputContainer}>
//           <TextInput
//             style={styles.textInput}
//             editable
//             placeholder="Search user name"
//             placeholderTextColor={'black'}
//           />
//         </View>
//         <View style={styles.messageButton}>
//           <Icon
//             name="search"
//             size={35}
//             // color={'#ffffff'}
//           />
//         </View> */}
//         <FormInput
//           labelValue={search}
//           onChangeText={userSearch => setSearch(userSearch)}
//           placeholderText="Search by name"
//           iconType="search1"
//           // keyboardType="text"
//           autoCapitalize="none"
//           autoCorrect={false}
//         />
//       </View>
//       <FlatList
//         data={userData}
//         keyExtractor={({id}) => id}
//         renderItem={({item}) => (
//           <Users
//             users={item}
//             loading={loading}
//             onDelete={handleDelete}
//             onPress={() =>
//               navigation.navigate('SearchProfile', {userId: item.id})
//             }
//           />
//         )}
//       />
//       {/* // )} */}
//     </>
//   );
// };

// export default Search;

// const styles = StyleSheet.create({
//   bottomContainer: {
//     flexDirection: 'row',
//     // marginBottom: 10,
//     marginTop: 5,
//     marginHorizontal: 5,
//     // borderBottomWidth: 1,
//     // borderBottomColor: '#dddddd',
//   },

//   textInputContainer: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#8c8c8c',
//     marginHorizontal: 10,
//     paddingHorizontal: 10,
//     borderRadius: 50,
//     height: 50,
//   },
// });
