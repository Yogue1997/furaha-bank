import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Image,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Platform,
  ScrollView
} from 'react-native';
import COLORS from '../../constants/colors';
import Checkbox from 'expo-checkbox';
import Button from '../Buttons/Button';
import { useDispatch } from 'react-redux';
import { LoginData } from '../../utils/LoginData';
import { loginUser } from '../../Slices/authSlice';

const imageUrl =
  'https://immigrantinvest.com/wp-content/uploads/2022/03/best-banks-2021-40543452.jpg';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  function handleLogin() {
    if (LoginData.email !== email && LoginData.password !== password) {
      alert('Invalid email or password');
      // navigation.replace('Login')
    } else {
      dispatch(loginUser({ email, password, name: LoginData.name }));
      navigation.replace('Home');
    }
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{
        height: "100%",
        marginHorizontal: 22,
      }}
    >
      {Platform.OS === 'android' && (
        <SafeAreaView style={{ flex: -1 }}>
          {/* Render SafeAreaView only for Android */}
        </SafeAreaView>
      )}

      <Image style={styles.image} source={require('../../assets/FB.png')} />

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>
          Email address
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your email address"
            placeholderTextColor={COLORS.black}
            keyboardType="email-address"
            value={email}
            onChangeText={(userInput) => setEmail(userInput)}
            style={{ width: '100%' }}
          />
        </View>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>
          Password
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor={COLORS.black}
            secureTextEntry
            value={password}
            onChangeText={(userInput) => setPassword(userInput)}
            style={{ width: '100%' }}
          />
        </View>
      </View>

      <Button
        onPress={() => {
          handleLogin();
        }}
        title="Login"
        filled
        style={{ marginTop: 18, marginBottom: 4 }}
      />

      <View style={{ top: 50 }}>
        <View style={styles.row}>
          <Pressable onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.linkText}>Create an Account</Text>
          </Pressable>
        </View>
        <View style={[styles.row, { marginTop: 10 }]}>
          <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.linkText}>Forgot Password</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '112%',
    height: '40%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  inputContainer: {
    width: '100%',
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 22,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: '0%',
  },
  linkText: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: 'bold',
    marginLeft: 6,
  },
});

export default Login;
