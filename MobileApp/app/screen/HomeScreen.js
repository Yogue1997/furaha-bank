// HomeScreen.js

import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { logoutUser, selectUser } from '../../Slices/authSlice';

const HomeScreen = ({ navigation }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
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
        <Text>Welcome to Home Screen! {user.name}</Text>
        <Button title='Logout' onPress={handleLogout} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

