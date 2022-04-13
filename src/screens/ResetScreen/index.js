import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import SocialButton from '../../components/SocialButton';
import {AuthContext} from '../../router/AuthProvider';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {loginAction, resetAction} from '../../redux/actions/authActions';
import {getBookings} from '../../redux/actions/dataActions';
import * as Animatable from 'react-native-animatable';

const ResetScreen = () => {
  const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  // const [loading, setLoading] = useState(true);

  const {
    account: {role},
    authenticated,
    firstName,
    lastName,
    pic,
    address,
    imageUrl,
  } = useSelector(state => state.auth);

  // const {login, googleLogin, fbLogin} = useContext(AuthContext);
  const route = useRoute();

  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Signup');
  };

  const {loading, serverError, errors, signUpSuccess} = useSelector(
    state => state.UI,
  );
  const dispatch = useDispatch();
  // const history = useHistory();

  const resetHandle = props => {
    // console.log(loading);
    // setLoading(true);
    const userData = {
      email: email,
    };
    dispatch(resetAction(userData));

    // dispatch(loginAction(userData));

    // setLoading(false);

    // console.log(userData, authenticated);
    setEmail('');
  };

  //   const { inputs, handleInputChange, handleSubmit } = useForm(
  //     {
  //       email: "",
  //       password: "",
  //     },
  //     loginHandle
  //   );

  const handleSubmit = event => {
    if (event) event.preventDefault();
    resetHandle();
    // if (!loading && authenticated) {
    //   // console.log(authenticated);
    //   dispatch(getBookings());
    //   navigation.navigate('Home');
    // }
  };

  let incorrectCredentialsError = null;
  if (errors) {
    if (errors.includes('Email does not exist.'))
      incorrectCredentialsError = errors;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Image source={require('../../assets/upload.jpg')} style={styles.logo} /> */}
      <Animatable.Text animation="flipInY" style={styles.text}>
        Travel Gh
      </Animatable.Text>
      <Animatable.View
        animation="fadeInUpBig"
        style={{
          marginTop: 50,
          backgroundColor: '#f8f8f8',
          flex: 1,
          padding: 20,
          paddingTop: 30,
          alignItems: 'center',
          borderTopLeftRadius: 70,
          // justifyContent: 'center',
          width: '100%',
        }}>
        <Text
          style={{
            fontSize: 30,
            alignItems: 'center',
            marginBottom: 5,
            color: '#87c830',
          }}>
          Reset Password
        </Text>
        <Text style={styles.navButtonText1}>
          Enter your email and click on Submit. Afterwards, Check Your Email for
          a link to reset your Password
        </Text>
        <FormInput
          labelValue={email}
          onChangeText={userEmail => setEmail(userEmail)}
          placeholderText="Email"
          iconType="mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        {/* <FormInput
          // styles={marginTop: 50}
          labelValue={password}
          onChangeText={userPassword => setPassword(userPassword)}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
        /> */}

        {serverError && (
          <Text style={styles.navButtonText}>
            {'server error, please try again'}
          </Text>
        )}

        {/* {verifyEmailError && (
          <Text style={styles.navButtonText}>{verifyEmailError}</Text>
        )} */}

        {incorrectCredentialsError && (
          <Text style={styles.navButtonText}>{incorrectCredentialsError}</Text>
        )}

        <FormButton
          // style={{width: '100%'}}
          buttonTitle="Submit"
          disabled={loading}
          onPress={() => handleSubmit()}
          // onPress={() => login(email, password)}
        />

        {/* <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
          <Text style={styles.navButtonText}>Forgot Password?</Text>
        </TouchableOpacity> */}

        {/* {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => fbLogin()}
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => googleLogin()}
          />
        </View>
      ) : null} */}

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.navButtonText}>
            Done Changing Password? Sign In
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            color: 'gray',
            fontSize: 18,
            fontWeight: 'bold',
            // bottom: 10,
            marginTop: 80,
          }}>
          Powered by Sesafrica
        </Text>
      </Animatable.View>
    </ScrollView>
  );
};

export default ResetScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: 20,
    // paddingTop: 50,
    backgroundColor: '#87c830',
    height: Dimensions.get('screen').height,
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    marginTop: 60,
    fontSize: 38,
    fontWeight: 'bold',
    // marginBottom: 10,
    color: '#fff',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 15,
    marginTop: 55,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#87c830',
    fontFamily: 'Lato-Regular',
  },
  navButtonText1: {
    fontSize: 13,
    marginBottom: 5,
    // fontWeight: '500',
    color: '#87c830',
    fontFamily: 'Lato-Regular',
  },
});
