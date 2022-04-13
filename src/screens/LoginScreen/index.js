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
import FormInputPass from '../../components/FormInputPass';
import FormButton from '../../components/FormButton';
import SocialButton from '../../components/SocialButton';
import {AuthContext} from '../../router/AuthProvider';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {loginAction} from '../../redux/actions/authActions';
import {getBookings} from '../../redux/actions/dataActions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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

  const onReset = () => {
    navigation.navigate('Reset');
  };

  const {loading, serverError, errors, signUpSuccess} = useSelector(
    state => state.UI,
  );
  const dispatch = useDispatch();
  // const history = useHistory();

  const loginHandle = props => {
    // console.log(loading);
    // setLoading(true);
    const userData = {
      email: email,
      password: password,
    };
    dispatch(loginAction(userData));

    // setLoading(false);

    // console.log(userData, authenticated);
  };

  //   const { inputs, handleInputChange, handleSubmit } = useForm(
  //     {
  //       email: "",
  //       password: "",
  //     },
  //     loginHandle
  //   );

  const onDetails = () => {
    setEmail('customer1@gmail.com');
    setPassword('1234567');
  };

  const handleSubmit = event => {
    if (event) event.preventDefault();
    loginHandle();
    if (!loading && authenticated) {
      // console.log(authenticated);
      dispatch(getBookings());
      navigation.navigate('Home');
    }
  };

  let incorrectCredentialsError = null;
  let verifyEmailError = null;
  if (errors) {
    if (errors.includes('Invalid email/password'))
      incorrectCredentialsError = errors;
    if (errors.includes('Verify your email')) verifyEmailError = errors;
  }

  return (
    <>
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
            paddingTop: 20,
            alignItems: 'center',
            borderTopLeftRadius: 70,
            // justifyContent: 'center',
            width: '100%',
          }}>
          <TouchableOpacity
            onPress={onDetails}
            style={{
              padding: 5,
              fontSize: 18,
              // alignItems: 'center',
              marginBottom: 20,
              borderWidth: 1,
              borderColor: '#87c830',
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontSize: 18,
                alignItems: 'center',
                // marginBottom: 20,
                color: '#87c830',
              }}>
              {`Email:    customer1@gmail.com`}
            </Text>
            <Text
              style={{
                fontSize: 18,
                alignItems: 'center',
                // marginBottom: 20,
                color: '#87c830',
              }}>
              {`Password:  1234567`}
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 30,
              alignItems: 'center',
              marginBottom: 20,
              color: '#87c830',
            }}>
            Signin
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

          <FormInputPass
            // styles={marginTop: 50}
            labelValue={password}
            onChangeText={userPassword => setPassword(userPassword)}
            placeholderText="Password"
            iconType="lock"
            // iconType1="md-eye"
            // secureTextEntry={true}
          />

          {serverError && (
            <Text style={styles.navButtonText}>
              {'server error, please try again'}
            </Text>
          )}

          {verifyEmailError && (
            <Text style={styles.navButtonText}>{verifyEmailError}</Text>
          )}

          {incorrectCredentialsError && (
            <Text style={styles.navButtonText}>
              {incorrectCredentialsError}
            </Text>
          )}

          <FormButton
            // style={{width: '100%'}}
            buttonTitle={loading ? 'Loading...' : 'Sign In'}
            disabled={loading}
            // loader={loading}
            onPress={() => handleSubmit()}
            // onPress={() => login(email, password)}
          />

          <TouchableOpacity style={styles.forgotButton} onPress={onReset}>
            <Text style={styles.navButtonText}>Forgot Password?</Text>
          </TouchableOpacity>

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

          <TouchableOpacity onPress={onPress}>
            <Text style={styles.navButtonText}>
              Don't have an acount? Create here
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              color: 'gray',
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 50,
            }}>
            Powered by Sesafrica
          </Text>
        </Animatable.View>
      </ScrollView>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  containerloader: {
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 20,
    // paddingTop: 50,
    // backgroundColor: 'transparent',
    // opacity: 0.1,
    backgroundColor: 'transparent',
    backfaceVisibility: 'visible',
    height: Dimensions.get('screen').height,
    zIndex: 10000,
  },
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
});
