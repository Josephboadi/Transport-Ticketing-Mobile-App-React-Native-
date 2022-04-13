import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Dimensions,
  View,
  TextInput,
  Image,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import postsData from '../../postdata/posts';
import styles from './styles';
import ProfilePicture from '../../components/ProfilePicture';
import firestore from '@react-native-firebase/firestore';
import ProgressiveImage from '../../components/ProgressiveImage';

const ImagePreviewScreen = () => {
  const [userImges, setUserImages] = useState(null);
  const [post, setPost] = useState({});
  // const [activeImageIndex, setActiveImageIndex] = useState(null);

  const route = useRoute();

  const navigation = useNavigation();
  const postId = route.params.postId;

  const fetchPost = async () => {
    try {
      const list = {};

      await firestore()
        .collection('posts')
        .doc(route.params ? route.params.postId : null)
        // .where('postId', '==', route.params ? route.params.postId : null)
        // .orderBy('postTime', 'desc')
        .get()
        .then(documentSnapshot => {
          if (documentSnapshot.exists) {
            // console.log('Post Data', documentSnapshot.data());

            setPost(documentSnapshot.data());
          }

          // querySnapshot.forEach(doc => {
          //   const {
          //     userId,
          //     post,
          //     postImg,
          //     postTime,
          //     likes,
          //     comments,
          //   } = doc.data();
          //   list.push({
          //     id: doc.id,
          //     userId,
          //     user: {
          //       imageUri:
          //         'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
          //       name: 'Profile Name',
          //     },
          //     postedAt: postTime,
          //     caption: post,
          //     imageUri: postImg,
          //     liked: false,
          //     likesCount: likes,
          //     comments: comments,

          //   });
          // });
        });

      // setPosts(list);

      // if (loading) {
      //   setLoading(false);
      // }

      // console.log('Posts: ', posts);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPost();
    // const userImages = postsData.find(imageData => imageData.id === postId);
    // setUserImages(userImages);
    // setActiveImageIndex(0);
  }, []);
  // console.log(post.postImg);
  // const navigatorToNextUser = () => {
  //   navigation.push('ImagePreview', {
  //     userId: (parseInt(userId) + 1).toString(),
  //   });
  // };

  // const navigateToPrevUser = () => {
  //   navigation.push('ImagePreview', {
  //     userId: (parseInt(userId) - 1).toString(),
  //   });
  // };

  // useEffect(() => {
  //   if (!userImges) {
  //     return;
  //   }
  //   if (activeImageIndex < 0) {
  //     setActiveImageIndex(0);
  //     return;
  //   }

  //   if (activeImageIndex >= userImges.images.length) {
  //     setActiveImageIndex(userImges.images.length - 1);
  //   }
  // }, [activeImageIndex]);

  // const handleNextImage = () => {
  //   if (activeImageIndex >= userImges.images.length - 1) {
  //     // navigatorToNextUser();
  //     return;
  //   }
  //   setActiveImageIndex(activeImageIndex + 1);
  // };

  // const handlePrevImage = () => {
  //   if (activeImageIndex <= 0) {
  //     // navigateToPrevUser();
  //     return;
  //   }
  //   setActiveImageIndex(activeImageIndex - 1);
  // };

  // const handlePress = evt => {
  //   const x = evt.nativeEvent.locationX;
  //   const screenWidth = Dimensions.get('window').width;

  //   if (x < screenWidth / 2) {
  //     handlePrevImage();
  //   } else {
  //     handleNextImage();
  //   }
  // };

  // if (!userImges) {
  //   return (
  //     <SafeAreaView>
  //       <ActivityIndicator />
  //     </SafeAreaView>
  //   );
  // }

  // const activeImage = userImges.images[activeImageIndex];

  // source={{uri: activeStory.imageUri}}

  return (
    <SafeAreaView style={styles.container}>
      {/* <TouchableWithoutFeedback onPress={() => {}}> */}

      <Image source={{uri: post.postImg}} style={styles.image} />
      {/* <View style={styles.userInfo}>
            <ProfilePicture uri={userImges.user.imageUri} size={50} />
            <Text style={styles.userName}>{userImges.user.name}</Text>
            <Text style={styles.postedTime}>{userImges.postedAt}</Text>
          </View> */}

      {/* <View style={styles.bottomContainer}> */}

      {/* <View style={styles.cameraButton}>
              <Feather name="camera" size={30} color={'#ffffff'} />
            </View> */}

      {/* <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                editable
                placeholder="Send message"
                placeholderTextColor={'white'}
              />
            </View>
            <View style={styles.messageButton}>
              <Ionicons
                name="paper-plane-outline"
                size={35}
                color={'#ffffff'}
              />
            </View> */}
      {/* </View> */}
      {/* </Image> */}

      {/* </TouchableWithoutFeedback> */}
    </SafeAreaView>
  );
};

export default ImagePreviewScreen;
