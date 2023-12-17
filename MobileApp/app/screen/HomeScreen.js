import React, { useEffect } from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

import { logoutUser, selectUser } from '../../Slices/authSlice';

const HomeScreen = ({ navigation }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if the user is authenticated when the component mounts
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    if (!userToken) {
      // If no user token is found, navigate to the login screen
      // Replace 'MainStack' with your login screen name
      navigation.replace('MainStack');
    }
  };

  const handleLogout = async () => {
    // Remove the user token from AsyncStorage upon logout
    await AsyncStorage.removeItem('userToken');

    dispatch(logoutUser());
    navigation.replace('MainStack');
  };

  return (
    <SafeAreaView>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Welcome to Home Screen! Youssouf Yogue</Text>
        <Button title='Logout' onPress={handleLogout} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
