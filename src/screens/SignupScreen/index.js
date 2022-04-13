import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  ScrollView,
  Alert,
  Dimensions,
} from 'react-native';
import FormInput from '../../components/FormInput';
import FormInputPass from '../../components/FormInputPass';
import FormButton from '../../components/FormButton';
import SocialButton from '../../components/SocialButton';
import {AuthContext} from '../../router/AuthProvider';
import {signupUser} from '../../redux/actions/authActions';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

const SignupScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [emergencyContactNumber, setEmergencyContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const validateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  // const {register} = useContext(AuthContext);
  const {loading, serverError, errors} = useSelector(state => state.UI);
  const dispatch = useDispatch();
  // const history = useHistory();
  const navigation = useNavigation();

  const signupHandle = props => {
    const newUserData = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      emergencyContactName: emergencyContactName,
      emergencyContactNumber: emergencyContactNumber,
      role: 'ROLE_USER',
      password: password,
      confirmPassword: confirmPassword,
    };
    dispatch(signupUser(newUserData));
    navigation.navigate('Login');
  };

  // const { inputs, handleInputChange, handleSubmit } = useForm(
  //   {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   },
  //   signupHandle
  // );
  // if (this.state.name.trim().length < 8) {
  //   Alert.alert('Alert', 'Password must be minimum 8 characters');
  //   return;
  // }

  const handleSubmit = event => {
    if (event) event.preventDefault();
    signupHandle();
    // if (!errors && serverError) {
    //   navigation.navigate('LoginPage');
    // }
    if (!firstName.trim()) {
      Alert.alert('Alert', 'Provide First Name');
    } else if (!lastName.trim()) {
      Alert.alert('Alert', 'Provide Last Name');
    } else if (!emergencyContactName.trim()) {
      Alert.alert('Alert', 'Provide Emergengy Contact Name');
    } else if (!phoneNumber.trim()) {
      Alert.alert('Alert', 'Provide Phone Number');
    } else if (phoneNumber.trim().length < 10) {
      Alert.alert('Alert', 'Phone Number Cannot be less than 10 digit');
    } else if (!emergencyContactNumber.trim()) {
      Alert.alert('Alert', 'Provide Emergency Contact Number');
    } else if (emergencyContactNumber.trim().length < 10) {
      Alert.alert('Alert', 'Phone Number Cannot be less than 10 digit');
    } else if (!email.trim()) {
      Alert.alert('Alert', 'Provide Email');
    } else if (!validateEmail(email)) {
      Alert.alert('Alert', 'Provide a valid email');
    } else if (!password.trim()) {
      Alert.alert('Alert', 'Provide a Password');
    } else if (password.trim().length < 6) {
      Alert.alert('Alert', 'Password should not be less than 6 digits');
    } else if (!confirmPassword.trim()) {
      Alert.alert('Alert', 'Confirm Password');
    } else if (password !== confirmPassword) {
      Alert.alert('Alert', 'Password Mismatch');
    } else if (errors) {
      if (typeof errors !== 'string') {
        for (let i = 0; i < errors.length; i++) {
          if (errors[i].msg.includes('valid email')) emailError = errors[i].msg;
          if (errors[i].msg.includes('Email address already exist'))
            Alert.alert('Alert', `${errors[i].msg}`);
          // emailError = errors[i].msg;
        }
      }
    } else if (!errors && !serverError) {
      navigation.navigate('Login');
    }
  };

  // console.log(errors);
  let emailError = null;
  let passwordError = null;
  let confirmPasswordError = null;
  let firstNameEmptyError = null;
  let phoneNumberEmptyError = null;
  let emergencyContactNameEmptyError = null;
  let emergencyContactNumberEmptyError = null;
  let lastNameEmptyError = null;

  if (errors) {
    if (typeof errors !== 'string') {
      for (let i = 0; i < errors.length; i++) {
        if (errors[i].msg.includes('First Name'))
          firstNameEmptyError = errors[i].msg;
        if (errors[i].msg.includes('Last Name'))
          lastNameEmptyError = errors[i].msg;
        if (errors[i].msg.includes('valid email')) emailError = errors[i].msg;
        if (errors[i].msg.includes('Email address already exist'))
          emailError = errors[i].msg;
        if (errors[i].msg.includes('least 10 characters long'))
          phoneNumberEmptyError = errors[i].msg;
        if (errors[i].msg.includes('least 6 characters long'))
          passwordError = errors[i].msg;
        if (errors[i].msg.includes('Passwords have to'))
          confirmPasswordError = errors[i].msg;
      }
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animatable.Text animation="flipInY" style={styles.text}>
        Travel Gh
      </Animatable.Text>
      <Animatable.View
        animation="fadeInUpBig"
        style={{
          marginTop: 20,
          backgroundColor: '#f8f8f8',
          flex: 1,
          padding: 20,
          paddingTop: 20,
          alignItems: 'center',
          borderTopLeftRadius: 70,
          width: '100%',
        }}>
        <Text
          style={{
            fontSize: 30,
            alignItems: 'center',
            marginBottom: 15,
            color: '#87c830',
          }}>
          Create an Account
        </Text>
        <FormInput
          labelValue={firstName}
          onChangeText={userFirstName => setFirstName(userFirstName)}
          placeholderText="First Name"
          iconType="user"
          // keyboardType="text"
          autoCapitalize="none"
          autoCorrect={false}
          // required
          // helperText={firstNameEmptyError}
          // error={firstNameEmptyError ? true : false}
        />
        {/* {firstNameEmptyError && <Text>{firstNameEmptyError}</Text>} */}
        <FormInput
          labelValue={lastName}
          onChangeText={userLastName => setLastName(userLastName)}
          placeholderText="Last Name"
          iconType="user"
          // keyboardType="text"
          autoCapitalize="none"
          autoCorrect={false}
          // required
          // helperText={lastNameEmptyError}
          // error={lastNameEmptyError ? true : false}
        />
        {/* {lastNameEmptyError && <Text>{lastNameEmptyError}</Text>} */}

        <FormInput
          labelValue={phoneNumber}
          onChangeText={userPhoneNumber => setPhoneNumber(userPhoneNumber)}
          placeholderText="Phone Number (Mobile Money)"
          iconType="phone"
          keyboardType="number-pad"
          // autoCapitalize="none"
          autoCorrect={false}
          required
          helperText={phoneNumberEmptyError}
          error={phoneNumberEmptyError ? true : false}
        />
        <FormInput
          labelValue={email}
          onChangeText={userEmail => setEmail(userEmail)}
          placeholderText="Email"
          iconType="mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          required
          helperText={emailError}
          error={emailError ? true : false}
        />
        <FormInput
          labelValue={emergencyContactName}
          onChangeText={userEmergencyContactName =>
            setEmergencyContactName(userEmergencyContactName)
          }
          placeholderText="Emergency Contact Name"
          iconType="user"
          // keyboardType="text"
          autoCapitalize="none"
          autoCorrect={false}
          // required
          // helperText={lastNameEmptyError}
          // error={lastNameEmptyError ? true : false}
        />
        {/* {lastNameEmptyError && <Text>{lastNameEmptyError}</Text>} */}

        <FormInput
          labelValue={emergencyContactNumber}
          onChangeText={userEmergencyContactNumber =>
            setEmergencyContactNumber(userEmergencyContactNumber)
          }
          placeholderText="Emergency Contact Number"
          iconType="phone"
          keyboardType="number-pad"
          // autoCapitalize="none"
          autoCorrect={false}
          required
          helperText={phoneNumberEmptyError}
          error={phoneNumberEmptyError ? true : false}
        />

        <FormInputPass
          labelValue={password}
          onChangeText={userPassword => setPassword(userPassword)}
          placeholderText="Password"
          iconType="lock"
          required
          helperText={passwordError}
          error={passwordError ? true : false}
        />

        <FormInputPass
          labelValue={confirmPassword}
          onChangeText={userPassword => setConfirmPassword(userPassword)}
          placeholderText="Confirm Password"
          iconType="lock"
          // iconType1="md-eye"
          // secureTextEntry={true}
          required
          helperText={passwordError ? passwordError : confirmPasswordError}
          error={passwordError ? true : confirmPasswordError ? true : false}
        />

        {serverError && <Text>{'server error, please try again'}</Text>}

        <FormButton
          buttonTitle={loading ? 'Loading...' : 'Sign Up'}
          disabled={loading}
          onPress={() => handleSubmit()}
          // onPress={() => register(email, password)}
        />

        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
            By registering, you confirm that you accept our{' '}
          </Text>
          <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
            <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
              Terms of service
            </Text>
          </TouchableOpacity>
          <Text style={styles.color_textPrivate}> and </Text>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Privacy Policy
          </Text>
        </View>

        {/* {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign Up with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => {}}
          />

          <SocialButton
            buttonTitle="Sign Up with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {}}
          />
        </View>
      ) : null} */}

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.navButtonText}>Have an account? Sign In</Text>
        </TouchableOpacity>
        <Text
          style={{
            color: 'gray',
            fontSize: 15,
            fontWeight: 'bold',
            marginTop: 5,
          }}>
          Powered by Sesafrica
        </Text>
      </Animatable.View>
    </ScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: 20,
    // paddingTop: 50,
    backgroundColor: '#87c830',
    // height: Dimensions.get('screen').height,
    // height: '100%',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    marginTop: 30,
    fontSize: 38,
    fontWeight: 'bold',
    // marginBottom: 10,
    color: '#fff',
  },
  navButton: {
    // marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#87c830',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});
