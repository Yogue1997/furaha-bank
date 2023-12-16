import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Image, StyleSheet, ActivityIndicator, Pressable } from 'react-native';
import COLORS from '../../constants/colors';
import Button from '../Buttons/Button';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../Slices/authSlice';

const imageUrl = "https://immigrantinvest.com/wp-content/uploads/2022/03/best-banks-2021-40543452.jpg";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const api = 'https://jsonplaceholder.typicode.com/users';

  const fetchData = async () => {
    try {
      const response = await fetch(api);
      const dataUsers = await response.json();
      return dataUsers;
    } catch (error) {
      console.log('Error fetching data', error);
      throw error;
    }
  };

  const handleLogin = async () => {
    try {
      setLoading(true);

      const dataUsers = await fetchData();

      const matchingUser = dataUsers.find(user => user.email === email && user.username === password);

      if (matchingUser) {
        dispatch(loginUser({ email, password, name: matchingUser.name }));
        navigation.replace('Home');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error handling login:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior='padding'
      style={{
        flex: 1,
        marginHorizontal: 22,
      }}
    >
      <Image style={styles.image} source={require('../../assets/FB.png')} />

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>Email address</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Enter your email address'
            placeholderTextColor={COLORS.black}
            keyboardType='email-address'
            value={email}
            onChangeText={(userInput) => setEmail(userInput)}
            style={{ width: '100%' }}
          />
        </View>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Enter your password'
            placeholderTextColor={COLORS.black}
            secureTextEntry
            value={password}
            onChangeText={(userInput) => setPassword(userInput)}
            style={{ width: '100%' }}
          />
        </View>
      </View>

      <Button
        onPress={handleLogin}
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

      {loading && <ActivityIndicator size="large" color={COLORS.primary} />}
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
