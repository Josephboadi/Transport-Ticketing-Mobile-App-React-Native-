// // import {useNavigation} from '@react-navigation/native';
// import React, {useState, useEffect, useContext} from 'react';
// import {
//   Dimensions,
//   TextInput,
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   SafeAreaView,
//   FlatList,
//   Alert,
// } from 'react-native';
// import FormButton from '../../components/FormButton';
// import {AuthContext} from '../../router/AuthProvider';

// import firestore from '@react-native-firebase/firestore';
// import storage from '@react-native-firebase/storage';
// import PostCard from '../../components/PostCard';
// import Post from '../../components/Post';
// import Animated from 'react-native-reanimated';
// import BottomSheet from 'reanimated-bottom-sheet';

// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Messages from '../../components/Messages';
// import ProfilePicture from '../../components/ProfilePicture';

// const ProfileScreen = ({navigation, route}) => {
//   const {user, logout} = useContext(AuthContext);

//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [deleted, setDeleted] = useState(false);
//   const [userData, setUserData] = useState(null);

//   // const navigation = useNavigation();

//   const fetchPosts = async () => {
//     try {
//       const list = [];

//       await firestore()
//         .collection('posts')
//         .where('userId', '==', route.params ? route.params.userId : user.uid)
//         .orderBy('postTime', 'desc')
//         .get()
//         .then(querySnapshot => {
//           // console.log('Total Posts: ', querySnapshot.size);

//           querySnapshot.forEach(doc => {
//             const {
//               userId,
//               post,
//               postImg,
//               postTime,
//               likes,
//               comments,
//             } = doc.data();
//             list.push({
//               id: doc.id,
//               userId,
//               user: {
//                 imageUri:
//                   'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
//                 name: 'Profile Name',
//               },
//               // userName: 'Test Name',
//               // userImg:
//               //   'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
//               postedAt: postTime,
//               caption: post,
//               imageUri: postImg,
//               liked: false,
//               likesCount: likes,
//               comments: comments,

//               // id: doc.id,
//               // userId,
//               // user: {
//               //   imageUri: require('../../assets/users/user-3.jpg'),
//               //   name: 'Profile Name',
//               // },
//               // imageUri: postImg,
//               // caption: post,
//               // likesCount: 123,
//               // comments: comments,
//               // postedAt: postTime
//             });
//           });
//         });

//       setPosts(list);

//       if (loading) {
//         setLoading(false);
//       }

//       // console.log('Posts: ', posts);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const getUser = async () => {
//     await firestore()
//       .collection('users')
//       .doc(route.params ? route.params.userId : user.uid)
//       .get()
//       .then(documentSnapshot => {
//         if (documentSnapshot.exists) {
//           console.log('User Data', documentSnapshot.data());
//           setUserData(documentSnapshot.data());
//         }
//       });
//   };

//   useEffect(() => {
//     getUser();
//     fetchPosts();
//     navigation.addListener('focus', () => setLoading(!loading));
//   }, [navigation, loading]);

//   useEffect(() => {
//     fetchPosts();
//     setDeleted(false);
//   }, [deleted]);

//   const handleDelete = id => {
//     Alert.alert(
//       'Delete post',
//       'Are you sure?',
//       [
//         {
//           text: 'Cancel',
//           onPress: () => console.log('Cancel Pressed!'),
//           style: 'cancel',
//         },
//         {
//           text: 'Confirm',
//           onPress: () => deletePost(id),
//         },
//       ],
//       {cancelable: false},
//     );
//   };

//   const deletePost = id => {
//     // console.log(` new postId = ${id}`);
//     firestore()
//       .collection('posts')
//       .doc(id)
//       .get()
//       .then(documentSnapshot => {
//         if (documentSnapshot.exists) {
//           const {postImg} = documentSnapshot.data();

//           if (postImg != null) {
//             const storageRef = storage().refFromURL(postImg);
//             const imageRef = storage().ref(storageRef.fullPath);

//             imageRef
//               .delete()
//               .then(() => {
//                 // console.log(`${postImg} has been deleted successfully.`);
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
//       .collection('posts')
//       .doc(id)
//       .delete()
//       .then(() => {
//         Alert.alert(
//           'Post deleted!',
//           'Your post has been deleted successfully!',
//         );
//         setDeleted(true);
//       })
//       .catch(e => console.log('Error deleting posst.', e));
//   };

//   const [messages, setMessages] = useState([]);

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
//           avatar: require('../../assets/users/user-3.jpg'),
//         },
//       },
//       {
//         _id: 2,
//         text: 'Im killing it',
//         createdAt: 'two weeks ago',
//         user: {
//           _id: 1,
//           name: 'React Native',
//           avatar: require('../../assets/users/user-3.jpg'),
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
//           avatar: require('../../assets/users/user-3.jpg'),
//         },
//       },
//       {
//         _id: 4,
//         text: 'Im killing it',
//         createdAt: 'two weeks ago',
//         user: {
//           _id: 1,
//           name: 'React Native',
//           avatar: require('../../assets/users/user-3.jpg'),
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
//           avatar: require('../../assets/users/user-3.jpg'),
//         },
//       },
//       {
//         _id: 6,
//         text: 'Im killing it',
//         createdAt: 'two weeks ago',
//         user: {
//           _id: 1,
//           name: 'React Native',
//           avatar: require('../../assets/users/user-3.jpg'),
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
//           avatar: require('../../assets/users/user-3.jpg'),
//         },
//       },
//       {
//         _id: 8,
//         text: 'Im killing it',
//         createdAt: 'two weeks ago',
//         user: {
//           _id: 1,
//           name: 'React Native',
//           avatar: require('../../assets/users/user-3.jpg'),
//         },
//       },
//     ]);
//   }, []);

//   const renderInner = () => (
//     <>
//       <View style={styles.bottomContainer}>
//         <ProfilePicture
//           uri={require('../../assets/users/user-3.jpg')}
//           size={40}
//         />
//         <View style={styles.textInputContainer}>
//           <TextInput
//             style={styles.textInput}
//             editable
//             placeholder="Comment on Image"
//             placeholderTextColor={'black'}
//           />
//         </View>
//         <View style={styles.messageButton}>
//           <Ionicons
//             name="paper-plane-outline"
//             size={30}
//             // color={'#ffffff'}
//           />
//         </View>
//       </View>
//       {messages.map(item => (
//         <Messages
//           key={item._id}
//           message={item}
//           // onDelete={handleDelete}
//           style={styles.commentBody}
//         />
//       ))}
//       {/* <FlatList
//         data={messages}
//         keyExtractor={({_id}) => _id}
//         renderItem={({item}) => <Messages message={item} />}
//       /> */}
//     </>
//   );

//   const renderHeader = () => (
//     // <View style={styles.header}>
//     //   <View style={styles.panelHeader}>
//     //     <View style={styles.panelHandle} />
//     //   </View>
//     // </View>
//     <View style={styles.commentHeader}>
//       {/* <TouchableWithoutFeedback>
//         <Ionicons name="arrow-back" size={23} color={'#545454'} />
//       </TouchableWithoutFeedback> */}
//       {/* <View style={styles.panelHandle} /> */}
//       <Text style={{fontSize: 20, fontWeight: 'bold', color: '#545454'}}>
//         {/* <View style={styles.panelHandle} /> */}
//         Comments
//       </Text>
//       {/* <TouchableWithoutFeedback>
//         <Ionicons name="close" size={23} color={'#545454'} />
//       </TouchableWithoutFeedback> */}
//     </View>
//   );

//   const bs = React.createRef();
//   const fall = new Animated.Value(1);

//   return (
//     <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
//       {/* <View> */}
//       <BottomSheet
//         ref={bs}
//         snapPoints={[400, -5]}
//         renderContent={renderInner}
//         renderHeader={renderHeader}
//         initialSnap={1}
//         callbackNode={fall}
//         enabledGestureInteraction={true}
//       />
//       <Animated.View
//         style={{
//           marginBottom: 0,
//           opacity: Animated.add(0.09, Animated.multiply(fall, 1.0)),
//         }}>
//         <ScrollView
//           style={styles.container}
//           contentContainerStyle={{
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//           showsVerticalScrollIndicator={false}>
//           <Image
//             style={styles.userImg}
//             source={{
//               uri: userData
//                 ? userData.userImg ||
//                   'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'
//                 : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
//             }}
//           />
//           <Text style={styles.userName}>
//             {userData ? userData.fname || 'Test' : 'Test'}{' '}
//             {userData ? userData.lname || 'User' : 'User'}
//           </Text>
//           {/* <Text>{route.params ? route.params.userId : user.uid}</Text> */}
//           {/* <Text style={styles.aboutUser}>
//           {userData ? userData.about || 'No details added.' : ''}
//         </Text> */}
//           <View style={styles.userBtnWrapper}>
//             {route.params ? (
//               <>
//                 <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
//                   <Text style={styles.userBtnTxt}>Make Admin</Text>
//                 </TouchableOpacity>
//                 {/* <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
//                 <Text style={styles.userBtnTxt}>Follow</Text>
//               </TouchableOpacity> */}
//               </>
//             ) : (
//               <>
//                 <TouchableOpacity
//                   style={styles.userBtn}
//                   onPress={() => {
//                     navigation.navigate('EditProfile');
//                   }}>
//                   <Text style={styles.userBtnTxt}>Edit</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={styles.userBtn}
//                   onPress={() => logout()}>
//                   <Text style={styles.userBtnTxt}>Logout</Text>
//                 </TouchableOpacity>
//               </>
//             )}
//           </View>

//           <View style={styles.userInfoWrapper}>
//             {/* <View style={styles.userInfoItem}>
//             <Text style={styles.userInfoTitle}>{posts.length}</Text>
//             <Text style={styles.userInfoSubTitle}>Posts</Text>
//           </View>
//           <View style={styles.userInfoItem}>
//             <Text style={styles.userInfoTitle}>10,000</Text>
//             <Text style={styles.userInfoSubTitle}>Followers</Text>
//           </View>
//           <View style={styles.userInfoItem}>
//             <Text style={styles.userInfoTitle}>100</Text>
//             <Text style={styles.userInfoSubTitle}>Following</Text>
//           </View> */}
//           </View>

//           {posts.map(item => (
//             <Post
//               key={item.id}
//               post={item}
//               onDelete={handleDelete}
//               onCapPress={() => bs.current.snapTo(0)}
//               onPreview={() =>
//                 navigation.navigate('HomePreview', {postId: item.id})
//               }
//             />
//           ))}

//           {/* <View>
//           <FlatList
//             style={{zIndex: 1}}
//             data={posts}
//             keyExtractor={({id}) => id}
//             renderItem={({item}) => (
//               <Post post={item} onDelete={handleDelete} loading={loading} />
//             )}
//             // ListHeaderComponent={Stories}
//           />
//         </View> */}
//         </ScrollView>
//       </Animated.View>
//       {/* </View> */}
//     </SafeAreaView>
//   );
// };

// export default ProfileScreen;

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     backgroundColor: '#fff',
//     // padding: 20,
//     // height: 500,
//   },
//   userImg: {
//     height: 120,
//     width: 120,
//     marginTop: 10,
//     borderRadius: 75,
//   },
//   userName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   aboutUser: {
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   userBtnWrapper: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     width: '100%',
//     marginBottom: 10,
//   },
//   userBtn: {
//     borderColor: '#2e64e5',
//     borderWidth: 2,
//     borderRadius: 3,
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     marginHorizontal: 5,
//   },
//   userBtnTxt: {
//     color: '#2e64e5',
//   },
//   userInfoWrapper: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     marginVertical: 20,
//   },
//   userInfoItem: {
//     justifyContent: 'center',
//   },
//   userInfoTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     textAlign: 'center',
//   },
//   userInfoSubTitle: {
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'center',
//   },
//   header: {
//     backgroundColor: '#FFFFFF',
//     shadowColor: '#333333',
//     shadowOffset: {width: -1, height: -3},
//     shadowRadius: 2,
//     shadowOpacity: 0.4,
//     paddingTop: 20,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//   },
//   panelHeader: {
//     alignItems: 'center',
//   },
//   panelHandle: {
//     width: 40,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#00000040',
//     marginBottom: 10,
//   },

//   leftItems: {
//     flexDirection: 'row',
//     width: 150,
//     justifyContent: 'space-between',
//   },

//   rightItems: {
//     flexDirection: 'row',
//     width: 40,
//     justifyContent: 'space-between',
//   },
//   bottomContainer: {
//     flexDirection: 'row',
//     marginBottom: 5,
//     marginTop: 15,
//     marginHorizontal: 5,
//     borderBottomWidth: 1,
//     borderBottomColor: '#dddddd',
//   },

//   textInputContainer: {
//     flex: 1,
//     borderBottomWidth: 1,
//     borderBottomColor: '#8c8c8c',
//     marginHorizontal: 10,
//     paddingHorizontal: 10,
//     // borderRadius: 50,
//     height: 50,
//   },

//   messageButton: {
//     width: 40,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   likes: {
//     fontWeight: 'bold',
//     margin: 3,
//   },
//   caption: {
//     marginVertical: 3,
//     marginHorizontal: 10,
//   },
//   postedAt: {
//     color: '#8c8c8c',
//     marginVertical: 3,
//     marginHorizontal: 10,
//     marginBottom: 10,
//   },
//   commentHeader: {
//     width: '100%',
//     flexDirection: 'row',
//     padding: 10,
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: '#fff',
//   },
//   commentBody: {
//     width: '100%',
//     height: Dimensions.get('window').width,
//     // padding: 15,
//   },
// });
