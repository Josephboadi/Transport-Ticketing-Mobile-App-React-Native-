import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState, useContext} from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Post from '../Post';
// import Stories from '../UserStoriesPreview';
// import data from '../../postdata/posts';
// import firestore from '@react-native-firebase/firestore';
// import storage from '@react-native-firebase/storage';
// import userImage3 from '../../assets/users/user-3.jpg';
// import {AuthContext} from '../../router/AuthProvider';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
// import Animated from 'react-native-reanimated';
// import BottomSheet from 'reanimated-bottom-sheet';
import Messages from '../Messages';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfilePicture from '../ProfilePicture';
// import posts from '../../assets/data/feed';
import {useDispatch, useSelector} from 'react-redux';
import {
  createCompanyReview,
  fetchAvailableFutureTrips,
  fetchClient,
  fetchClients,
  fetchReview,
} from '../../redux/actions/dataActions';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg',

const Feed = () => {
  const [data, setData] = useState(null);
  const [comment, setComment] = useState('');
  const [compayId, setCompayId] = useState('');
  const [compNum, setCompNum] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [show, setShow] = useState(false);
  // const [loading, setLoading] = useState(true);

  const {loading} = useSelector(state => state.data);
  const clients = useSelector(state => state.data.clients);
  const [clientD, setClientD] = useState([]);
  const datta = useSelector(state => state.data.review);
  const deta = useSelector(state => state.auth);

  // console.log(clients);
  // console.log(loading);
  if (clients !== null) {
    AsyncStorage.setItem('clients', JSON.stringify(clients));
  }

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onPress = compId => {
    // console.log(compId);
    dispatch(fetchAvailableFutureTrips(compId));
    dispatch(fetchClient(compId));

    if (!loading) {
      // console.log(clients);
      navigation.navigate('Trips', {compId: compId});
    }
  };

  // useEffect(() => {
  //   setOpaque(true);
  //   // setClientD(datta);
  // }, [comment, setComment]);

  // useEffect(() => {
  //   dispatch(fetchReview(compayId));
  //   setOpaque(true);
  // }, []);

  // useEffect(() => {
  //   // if (addReview === true) {

  //   // }
  //   setClientD(datta);
  //   // setOpaque(true);
  //   // return;
  // }, [datta]);

  const submitHandler = e => {
    e.preventDefault();

    if (comment !== '') {
      const review = {
        comment: comment,
        compId: compayId,
      };
      dispatch(createCompanyReview(review));
      // setRating(0);
      setComment('');
      let countDownDate = new Date().getTime();
      let countDownDateSeconds =
        Math.floor((countDownDate % (1000 * 60)) / 1000) + 4;

      // update every second
      let x = setInterval(function () {
        // Get todays date and time
        let now = new Date().getTime();

        let nowSeconds = Math.floor((now % (1000 * 60)) / 1000);

        // find the distance between now and count down date
        let distance = countDownDateSeconds - nowSeconds;

        if (distance < 0) {
          clearInterval(x);
          // setClient(data);
          // console.log(client);
          dispatch(fetchReview(compayId));
          // setOpaque(true);
        }
      }, 1000);
      setShow(false);
      // setLoadingR(false);
      // console.log(compId);
      // console.log(client._id);
    }
  };

  // useEffect(() => {
  //   setOpaque(false);
  // }, []);
  // const {user} = useContext(AuthContext);

  // const fetchPosts = async () => {
  //   try {
  //     const list = [];

  //     await firestore()
  //       .collection('posts')
  //       .orderBy('postTime', 'desc')
  //       .get()
  //       .then(querySnapshot => {
  //         // console.log('Total Posts: ', querySnapshot.size);
  //         querySnapshot.forEach(doc => {
  //           const {
  //             userId,
  //             post,
  //             postImg,
  //             postTime,
  //             liked,
  //             likes,
  //             comments,
  //           } = doc.data();
  //           list.push({
  //             id: doc.id,
  //             userId,
  //             user: {
  //               imageUri: require('../../assets/users/user-3.jpg'),
  //               name: 'Profile Name',
  //             },
  //             imageUri: postImg,
  //             caption: post,
  //             liked: liked,
  //             likesCount: 123,
  //             comments: comments,
  //             postedAt: postTime,
  //           });
  //         });
  //       });
  //     setPosts(list);
  //     if (loading) {
  //       setLoading(false);
  //     }
  //     // console.log('Posts: ', list);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   fetchPosts();
  //   navigation.addListener('focus', () => setLoading(!loading));
  // }, [navigation, loading]);

  // useEffect(() => {
  //   fetchPosts();
  //   navigation.addListener('focus', () => setLoading(!loading));
  // }, [navigation, loading]);

  // useEffect(() => {
  //   fetchPosts();
  //   setDeleted(false);
  // }, [deleted]);

  // const handleDelete = id => {
  //   Alert.alert(
  //     'Delete post',
  //     'Are you sure?',
  //     [
  //       {
  //         text: 'Cancel',
  //         onPress: () => console.log('Cancel Pressed!'),
  //         style: 'cancel',
  //       },
  //       {
  //         text: 'Confirm',
  //         onPress: () => deletePost(id),
  //       },
  //     ],
  //     {cancelable: false},
  //   );
  // };

  // const deletePost = id => {
  //   console.log(` new postId = ${id}`);
  //   firestore()
  //     .collection('posts')
  //     .doc(id)
  //     .get()
  //     .then(documentSnapshot => {
  //       if (documentSnapshot.exists) {
  //         const {postImg} = documentSnapshot.data();

  //         if (postImg != null) {
  //           const storageRef = storage().refFromURL(postImg);
  //           const imageRef = storage().ref(storageRef.fullPath);

  //           imageRef
  //             .delete()
  //             .then(() => {
  //               console.log(`${postImg} has been deleted successfully.`);
  //               deleteFirestoreData(id);
  //             })
  //             .catch(e => {
  //               console.log('Error while deleting the image. ', e);
  //             });
  //           // If the post image is not available
  //         } else {
  //           deleteFirestoreData(id);
  //         }
  //       }
  //     });
  // };

  // const deleteFirestoreData = id => {
  //   firestore()
  //     .collection('posts')
  //     .doc(id)
  //     .delete()
  //     .then(() => {
  //       Alert.alert(
  //         'Post deleted!',
  //         'Your post has been deleted successfully!',
  //       );
  //       setDeleted(true);
  //     })
  //     .catch(e => console.log('Error deleting posst.', e));
  // };

  // const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   setMessages([
  //     {
  //       _id: 1,
  //       text:
  //         'Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this',
  //       createdAt: 'a day ago',
  //       user: {
  //         _id: 2,
  //         name: 'React Native',
  //         avatar: require('../../assets/users/user-3.jpg'),
  //       },
  //     },
  //     {
  //       _id: 2,
  //       text: 'Im killing it',
  //       createdAt: 'two weeks ago',
  //       user: {
  //         _id: 1,
  //         name: 'React Native',
  //         avatar: require('../../assets/users/user-3.jpg'),
  //       },
  //     },
  //     {
  //       _id: 3,
  //       text:
  //         'Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this',
  //       createdAt: 'a day ago',
  //       user: {
  //         _id: 2,
  //         name: 'React Native',
  //         avatar: require('../../assets/users/user-3.jpg'),
  //       },
  //     },
  //     {
  //       _id: 4,
  //       text: 'Im killing it',
  //       createdAt: 'two weeks ago',
  //       user: {
  //         _id: 1,
  //         name: 'React Native',
  //         avatar: require('../../assets/users/user-3.jpg'),
  //       },
  //     },
  //     {
  //       _id: 5,
  //       text:
  //         'Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this',
  //       createdAt: 'a day ago',
  //       user: {
  //         _id: 2,
  //         name: 'React Native',
  //         avatar: require('../../assets/users/user-3.jpg'),
  //       },
  //     },
  //     {
  //       _id: 6,
  //       text: 'Im killing it',
  //       createdAt: 'two weeks ago',
  //       user: {
  //         _id: 1,
  //         name: 'React Native',
  //         avatar: require('../../assets/users/user-3.jpg'),
  //       },
  //     },
  //     {
  //       _id: 7,
  //       text:
  //         'Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this Im enjoying this',
  //       createdAt: 'a day ago',
  //       user: {
  //         _id: 2,
  //         name: 'React Native',
  //         avatar: require('../../assets/users/user-3.jpg'),
  //       },
  //     },
  //     {
  //       _id: 8,
  //       text: 'Im killing it',
  //       createdAt: 'two weeks ago',
  //       user: {
  //         _id: 1,
  //         name: 'React Native',
  //         avatar: require('../../assets/users/user-3.jpg'),
  //       },
  //     },
  //   ]);
  // }, []);
  // const onCapPressed = compyId => {
  //   // console.log(compyId);
  //   setCompayId(compyId);
  //   dispatch(fetchReview(compyId));

  //   bs.current.snapTo(0);
  // };

  // // console.log(clientD);

  // const bs = React.createRef(null);
  // const fall = new Animated.Value(1);

  // const createPopup = () => {
  //   bs.current.snapTo(1);
  //   setOpaque(false);
  // };

  // const openPopup = () => {
  //   // bs.current.snapTo(1);
  //   setOpaque(true);
  // };

  // AsyncStorage.getItem('clients').then(value => {
  //   setData(value);
  // });

  // console.log(data);

  // const renderInner = () => (
  <>
    {/* <View style={styles.bottomContainer}>
        <ProfilePicture
          uri={require('../../assets/users/user-3.jpg')}
          size={40}
        /> */}
    {/* <TouchableWithoutFeedback> */}
    {/* <View style={styles.textInputContainer}>
            <Text>Write your Comment</Text> */}
    {/* <TextInput
          style={styles.textInputContainer}
          editable
          multiline={true}
          placeholder="Write your Comment"
          placeholderTextColor={'gray'}
          labelValue={comment}
          color={comment ? 'black' : 'gray'}
          onChangeText={userComment => setComment(userComment)} */}
    {/* /> */}
    {/* </View> */}
    {/* </TouchableWithoutFeedback> */}
    {/* {comment ? (
          <TouchableWithoutFeedback onPress={() => submitHandler()}>
            <View style={styles.messageButton}>
              <Ionicons name="send" size={30} color={'#87c830'} />
            </View>
          </TouchableWithoutFeedback>
        ) : null}
      </View>
      {clientD?.map(item => (
        <Messages
          key={item._id}
          message={item}
          // onDelete={handleDelete}
          style={styles.commentBody}
        />
      ))} */}
    {/* <KeyboardAvoidingView behavior="padding">
        <View style={styles.bottomContainer1}>
          <ProfilePicture
            uri={require('../../assets/users/user-3.jpg')}
            size={40}
          />
          
          <TextInput
            style={styles.textInputContainer1}
            editable
            multiline={true}
            placeholder="Write your Comment"
            placeholderTextColor={'gray'}
            labelValue={comment}
            color={comment ? 'black' : 'gray'}
            onChangeText={userComment => setComment(userComment)}
          />
          
          {comment ? (
            <View style={styles.messageButton}>
              <Ionicons name="send" size={30} color={'#87c830'} />
            </View>
          ) : null}
        </View>
      </KeyboardAvoidingView> */}
    {/* <FlatList
        data={messages}
        keyExtractor={({_id}) => _id}
        renderItem={({item}) => <Messages message={item} />}
      /> */}
  </>;
  // );

  // const renderHeader = () => (
  // <View style={styles.header}>
  //   <View style={styles.panelHeader}>
  //     <View style={styles.panelHandle} />
  //   </View>
  // </View>

  //   <View style={styles.commentHeader}>
  //     <TouchableWithoutFeedback onPress={createPopup}>
  //       <Ionicons name="arrow-back" size={23} color={'#545454'} />
  //     </TouchableWithoutFeedback>
  //     <View style={{display: 'flex', flexDirection: 'row'}}>
  //       <Text
  //         style={{
  //           fontSize: 20,
  //           marginRight: 10,
  //           fontWeight: 'bold',
  //           color: '#545454',
  //         }}>
  //         {clientD?.length}
  //       </Text>
  //       <Text style={{fontSize: 20, fontWeight: 'bold', color: '#545454'}}>
  //         Comments
  //       </Text>
  //     </View>

  //     <TouchableWithoutFeedback onPress={createPopup}>
  //       <Ionicons name="close" size={23} color={'#545454'} />
  //     </TouchableWithoutFeedback>
  //   </View>
  // );

  // console.log(bs);
  // console.log(fall);

  // useEffect(() => {
  //   dispatch(fetchReview(compayId));
  //   // setOpaque(true);
  // }, []);

  useEffect(() => {
    // if (addReview === true) {

    // }
    setClientD(datta);
    // setOpaque(true);
    // return;
  }, [datta]);

  const onCapPressed = (compyId, e) => {
    e.preventDefault();
    // console.log(compyId);
    setCompayId(compyId);
    dispatch(fetchReview(compyId));

    // bs.current.snapTo(0);
    setShowMessage(true);
  };

  const createPopup = () => {
    // bs.current.snapTo(1);
    setShowMessage(false);
  };

  const createModal = () => {
    // messageTextInput.current(true);
    setShow(true);
    // messageTextInput.current.focus();
  };

  return (
    <>
      {/* <BottomSheet
        ref={bs}
        snapPoints={[430, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
        enabledContentGestureInteraction={true}
        enabledContentTapInteraction={false}
        enabledInnerScrolling={true}
        // enabledBottomClamp={true}
        onCloseEnd={createPopup}
        onOpenStart={openPopup}
        onOpenEnd={openPopup}

        // style={{position: 'absolute'}}
      /> */}

      <View
        style={{
          // position: 'absolute',
          marginBottom: 0,
          // opacity: Animated.add(0.01, Animated.multiply(fall, 0.01)),
        }}>
        {/* {loading || posts === null ? ( */}
        {loading ? (
          <View style={{height: 25000}}>
            <ScrollView
              style={{flex: 1}}
              contentContainerStyle={{alignItems: 'center'}}>
              <SkeletonPlaceholder>
                {/* <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 15,
                    marginLeft: 10,
                  }}>
                  <View style={{width: 60, height: 60, borderRadius: 50}} />
                  <View style={{marginLeft: 20}}>
                    <View style={{width: 120, height: 20, borderRadius: 4}} />
                  </View>
                </View> */}
                <View style={{marginTop: 10, marginBottom: 30}}>
                  <View
                    style={{
                      marginTop: 6,
                      width: Dimensions.get('window').width - 20,
                      height: Dimensions.get('window').width - 120,
                      borderRadius: 4,
                    }}
                  />
                  <View
                    style={{
                      marginTop: 6,
                      marginBottom: 6,
                      width: 250,
                      height: 20,
                      borderRadius: 4,
                      marginLeft: 10,
                    }}
                  />
                  <View
                    style={{
                      width: 300,
                      height: 20,
                      borderRadius: 4,
                      marginLeft: 10,
                    }}
                  />
                </View>
              </SkeletonPlaceholder>
              <SkeletonPlaceholder>
                <View style={{marginTop: 10, marginBottom: 30}}>
                  <View
                    style={{
                      marginTop: 6,
                      width: Dimensions.get('window').width - 20,
                      height: Dimensions.get('window').width - 120,
                      borderRadius: 4,
                    }}
                  />
                  <View
                    style={{
                      marginTop: 6,
                      marginBottom: 6,
                      width: 250,
                      height: 20,
                      borderRadius: 4,
                      marginLeft: 10,
                    }}
                  />
                  <View
                    style={{
                      width: 300,
                      height: 20,
                      borderRadius: 4,
                      marginLeft: 10,
                    }}
                  />
                </View>
              </SkeletonPlaceholder>
            </ScrollView>
          </View>
        ) : (
          <>
            <ScrollView
              // style={styles.container}
              contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              showsVerticalScrollIndicator={false}>
              {/* // <View style={{justifyContent: 'center', alignItems: 'center'}}> */}
              {clients.companies !== null
                ? clients.companies.map(item => (
                    <Post
                      key={item._id}
                      post={item}
                      // onDelete={handleDelete}
                      loading={loading}
                      onPress={() => onPress(item._id)}
                      onPreview={() =>
                        navigation.navigate('HomePreview', {postId: item.id})
                      }
                      msgLength={clientD?.length}
                      onCapPress={e => onCapPressed(item._id, e)}
                    />
                  ))
                : null}

              {/* //     <FlatList
          //       style={{zIndex: 1}}
          //       data={clients.companies}
          //       keyExtractor={() => clients.companies._id}
          //       renderItem={({item}) => (
          //         <Post
          //           post={item}
          //           // onDelete={handleDelete}
          //           loading={loading}
          //           onPress={() => onPress(item._id)}
          //           onPreview={() =>
          //             navigation.navigate('HomePreview', {postId: item.id})
          //           }
          //           onCapPress={() => bs.current.snapTo(0)}
          //           refreshing={loading}
          //           onRefresh={() => dispatch(fetchClients())}
          //         />
          //       )}

          //       // ListHeaderComponent={Stories}
          //     />
          //   ) : null}
          // </View> */}
            </ScrollView>
            {showMessage ? (
              <View
                style={{
                  backgroundColor: '#F8F8F8',
                  // borderColor: '#87c830',
                  // borderWidth: 2,
                  height: Dimensions.get('screen').height - 200,
                  width: Dimensions.get('screen').width,
                  // borderRadius: 30,
                  // marginHorizontal: 10,
                  // flexDirection: 'row',
                  // justifyContent: 'space-between',
                  flex: 1,
                  alignItems: 'center',
                  position: 'absolute',
                  paddingHorizontal: 10,
                  paddingBottom: 10,
                  bottom: 0,
                  zIndex: 100,
                }}>
                <View style={styles.commentHeader}>
                  <TouchableWithoutFeedback onPress={createPopup}>
                    <Ionicons name="arrow-back" size={23} color={'#545454'} />
                  </TouchableWithoutFeedback>
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontSize: 20,
                        marginRight: 10,
                        fontWeight: 'bold',
                        color: '#545454',
                      }}>
                      {clientD?.length}
                    </Text>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#545454',
                      }}>
                      Comments
                    </Text>
                  </View>

                  <TouchableWithoutFeedback onPress={createPopup}>
                    <Ionicons name="close" size={23} color={'#545454'} />
                  </TouchableWithoutFeedback>
                </View>
                {/* </View> */}

                <KeyboardAvoidingView
                  enabled
                  behavior={Platform.OS === 'ios' ? 'padding' : null}>
                  <ScrollView
                    // horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: Dimensions.get('window').width,
                    }}>
                    <ScrollView contentContainerStyle={styles.bottomContainer}>
                      <View>
                        <ProfilePicture uri={deta.pic} size={35} />
                      </View>

                      <TouchableWithoutFeedback onPress={createModal}>
                        <Text style={styles.textInputContainer}>
                          Add a comment
                        </Text>
                      </TouchableWithoutFeedback>
                    </ScrollView>

                    <View style={{width: Dimensions.get('window').width}}>
                      {clientD?.map(item => (
                        <Messages
                          key={item._id}
                          message={item}
                          // onDelete={handleDelete}
                          style={styles.commentBody}
                        />
                      ))}
                    </View>
                  </ScrollView>
                </KeyboardAvoidingView>
              </View>
            ) : null}
            <KeyboardAvoidingView
              enabled
              behavior={Platform.OS === 'ios' ? 'padding' : null}>
              <Modal
                style={{width: Dimensions.get('window').width}}
                transparent={true}
                visible={show}
                onRequestClose={() => setShow(false)}>
                <View
                  style={{
                    backgroundColor: '#000000aa',
                    flex: 1,
                    width: Dimensions.get('window').width,
                  }}>
                  <View style={styles.bottomContainer1}>
                    <View>
                      <ProfilePicture uri={deta.pic} size={35} />
                    </View>

                    <TextInput
                      autoFocus={true}
                      // ref={messageTextInput}
                      style={styles.textInputContainer}
                      editable
                      multiline={true}
                      placeholder="Add a comment"
                      placeholderTextColor={'black'}
                      labelValue={comment}
                      // numberOfLines={4}
                      // color={comment ? 'black' : 'gray'}
                      onChangeText={userComment => setComment(userComment)}
                    />

                    {comment ? (
                      <TouchableWithoutFeedback onPress={e => submitHandler(e)}>
                        <View style={styles.messageButton}>
                          <Ionicons name="send" size={30} color={'#87c830'} />
                        </View>
                      </TouchableWithoutFeedback>
                    ) : (
                      <TouchableWithoutFeedback onPress={() => setShow(false)}>
                        <Ionicons name="close" size={23} color={'#545454'} />
                      </TouchableWithoutFeedback>
                    )}
                  </View>
                </View>
              </Modal>
              {/* </ScrollView> */}
            </KeyboardAvoidingView>
          </>
        )}
      </View>
    </>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },

  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },

  leftItems: {
    flexDirection: 'row',
    width: 150,
    justifyContent: 'space-between',
  },

  rightItems: {
    flexDirection: 'row',
    width: 40,
    justifyContent: 'space-between',
  },
  bottomContainer: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    marginBottom: 5,
    paddingBottom: 10,
    paddingRight: 30,
    marginTop: 15,
    alignItems: 'center',
    // marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    // justifyContent: 'space-between',
  },

  bottomContainer1: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    // marginBottom: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    // marginHorizontal: 10,
    backgroundColor: '#fff',
    // borderBottomWidth: 1,
    // borderBottomColor: '#dddddd',
    // justifyContent: 'space-between',
  },

  textInputContainer: {
    // width: Dimensions.get('window').width,
    flex: 1,
    // borderBottomWidth: 1,
    // borderBottomColor: '#8c8c8c',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    // borderRadius: 50,
    // height: 50,
    fontSize: 16,
  },

  messageButton: {
    width: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  likes: {
    fontWeight: 'bold',
    margin: 3,
  },
  caption: {
    marginVertical: 3,
    marginHorizontal: 10,
  },
  postedAt: {
    color: '#8c8c8c',
    marginVertical: 3,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  commentHeader: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#C3CFDD',
  },
  commentBody: {
    width: Dimensions.get('window').width,
    bottom: 10,
    // height: Dimensions.get('window').width,
    // padding: 15,
  },
});
