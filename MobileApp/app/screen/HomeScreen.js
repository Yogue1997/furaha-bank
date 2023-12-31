import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { logoutUser, selectUser } from '../../Slices/authSlice';

const HomeScreen = ({ navigation }) => {



  return (
    <SafeAreaView>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Welcome to Home Screen! </Text>
        <Button title='Logout' onPress={handleLogout} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

