import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Alert,
  Dimensions,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FormButton from '../../components/FormButton';

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';

import {AuthContext} from '../../router/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {editUser} from '../../redux/actions/dataActions';
import FormButtonLogout from '../../components/FormButtonLogout';
import {logoutAction} from '../../redux/actions/authActions';

const EditProfileScreen = () => {
  const dispatch = useDispatch();
  const {user, logout} = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [password, setPassword] = useState('');
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [userData, setUserData] = useState(null);

  const navigation = useNavigation();
  // const {
  //   account: {role, email},
  //   authenticated,
  //   firstName,
  //   lastName,
  //   pic,
  //   phoneNumber
  // } = useSelector(state => state.auth);

  const deta = useSelector(state => state.auth);

  // console.log(deta);

  const getUser = async () => {
    // const currentUser = await firestore()
    //   .collection('users')
    //   .doc(user.uid)
    //   .get()
    //   .then(documentSnapshot => {
    //     if (documentSnapshot.exists) {
    //       console.log('User Data', documentSnapshot.data());
    //       setUserData(documentSnapshot.data());
    //     }
    //   });
    setUserData(deta);
  };

  const handleLogout = async () => {
    dispatch(logoutAction());
    // navigation.navigate('Login');
  };

  const handleUpdate = async () => {
    const userDatta = new FormData();

    if (password) {
      if (image) {
        userDatta.append('image', image);
      }
      userDatta.append('firstName', userData.firstName);
      userDatta.append('lastName', userData.lastName);
      userDatta.append('email', userData.account.email);
      userDatta.append('phoneNumber', userData.phoneNumber);
      userDatta.append('emergencyContactName', userData.emergencyContactName);
      userDatta.append(
        'emergencyContactNumber',
        userData.emergencyContactNumber,
      );
      userDatta.append('password', password);
      // employeeData.append("role", values.role);
      dispatch(editUser(userDatta, userData._id));
    } else {
      if (image) {
        userDatta.append('image', image);
      }
      userDatta.append('firstName', userData.firstName);
      userDatta.append('lastName', userData.lastName);
      userDatta.append('email', userData.account.email);
      userDatta.append('phoneNumber', userData.phoneNumber);
      userDatta.append('emergencyContactName', userData.emergencyContactName);
      userDatta.append(
        'emergencyContactNumber',
        userData.emergencyContactNumber,
      );

      // employeeData.append("role", values.role);
      dispatch(editUser(userDatta, userData._id));
    }
    // let imgUrl = await uploadImage();
    // if (imgUrl == null && userData.userImg) {
    //   imgUrl = userData.userImg;
    // }
    // firestore()
    //   .collection('users')
    //   .doc(user.uid)
    //   .update({
    //     fname: userData.fname,
    //     lname: userData.lname,
    //     about: userData.about,
    //     phone: userData.phone,
    //     country: userData.country,
    //     city: userData.city,
    //     userImg: imgUrl,
    //   })
    //   .then(() => {
    //     console.log('User Updated!');
    //     Alert.alert(
    //       'Profile Updated!',
    //       'Your profile has been updated successfully.',
    //     );
    //   });
  };

  // const uploadImage = async () => {
  //   if (image == null) {
  //     return null;
  //   }
  //   const uploadUri = image;
  //   let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

  //   // Add timestamp to File Name
  //   const extension = filename.split('.').pop();
  //   const name = filename.split('.').slice(0, -1).join('.');
  //   filename = name + Date.now() + '.' + extension;

  //   setUploading(true);
  //   setTransferred(0);

  //   const storageRef = storage().ref(`photos/${filename}`);
  //   const task = storageRef.putFile(uploadUri);

  //   // Set transferred state
  //   task.on('state_changed', taskSnapshot => {
  //     console.log(
  //       `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
  //     );

  //     setTransferred(
  //       Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
  //         100,
  //     );
  //   });

  //   try {
  //     await task;

  //     const url = await storageRef.getDownloadURL();

  //     setUploading(false);
  //     setImage(null);

  //     // Alert.alert(
  //     //   'Image uploaded!',
  //     //   'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
  //     // );
  //     return url;
  //   } catch (e) {
  //     console.log(e);
  //     return null;
  //   }
  // };

  useEffect(() => {
    getUser();
  }, []);

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      // console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
      this.bs.current.snapTo(1);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      // console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
      this.bs.current.snapTo(1);
    });
  };

  renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => this.bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  bs = React.createRef();
  fall = new Animated.Value(1);

  return (
    <ScrollView style={styles.container}>
      <BottomSheet
        ref={this.bs}
        snapPoints={[530, -5]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />
      <Animated.View
        style={{
          margin: 20,
          opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
        }}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: image
                    ? image
                    : userData
                    ? userData.pic ||
                      'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'
                    : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <MaterialCommunityIcons
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
            {userData ? userData.firstName : ''}{' '}
            {userData ? userData.lastName : ''}
          </Text>
          {/* <Text>{user.uid}</Text> */}
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" color="#87c830" size={20} />
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            value={userData ? userData.firstName : ''}
            onChangeText={txt => setUserData({...userData, firstName: txt})}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#87c830" size={20} />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#666666"
            value={userData ? userData.lastName : ''}
            onChangeText={txt => setUserData({...userData, lastName: txt})}
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>

        <View style={styles.action}>
          <Feather name="phone" color="#87c830" size={20} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            value={userData ? userData.phoneNumber.toString() : ''}
            onChangeText={txt => setUserData({...userData, phoneNumber: txt})}
            style={styles.textInput}
          />
        </View>

        {/* <View style={styles.action}>
          <FontAwesome name="globe" color="#87c830" size={20} />
          <TextInput
            placeholder="Country"
            placeholderTextColor="#666666"
            autoCorrect={false}
            value={userData ? userData.country : ''}
            onChangeText={txt => setUserData({...userData, country: txt})}
            style={styles.textInput}
          />
        </View> */}
        <View style={styles.action}>
          <MaterialCommunityIcons
            name="email-outline"
            color="#87c830"
            size={20}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            autoCorrect={false}
            value={userData ? userData.account.email : ''}
            onChangeText={txt => setUserData({...userData, email: txt})}
            style={styles.textInput}
          />
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" color="#87c830" size={20} />
          <TextInput
            placeholder="Emergency Contact Name"
            placeholderTextColor="#666666"
            value={userData ? userData.emergencyContactName : ''}
            onChangeText={txt =>
              setUserData({...userData, emergencyContactName: txt})
            }
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>

        <View style={styles.action}>
          <Feather name="phone" color="#87c830" size={20} />
          <TextInput
            placeholder="Emergency Contact Number"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            value={userData ? userData.emergencyContactNumber.toString() : ''}
            onChangeText={txt =>
              setUserData({...userData, emergencyContactNumber: txt})
            }
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <Feather name="lock" color="#87c830" size={20} />
          <TextInput
            placeholder="password"
            placeholderTextColor="#666666"
            value={password}
            onChangeText={e => setPassword(e.target.value)}
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>

        <FormButton buttonTitle="Update" onPress={handleUpdate} />
        {/* <FormButtonLogout buttonTitle="Logout" onPress={handleLogout} /> */}
      </Animated.View>
    </ScrollView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: Dimensions.get('screen').height,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    width: '100%',
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#87c830',
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
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#2e64e5',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#333333',
  },
});
