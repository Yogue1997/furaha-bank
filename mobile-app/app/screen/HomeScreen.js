import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { logoutUser, selectUser } from '../../Slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';


const HomeScreen = ({ navigation }) => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();


  const handleLogout = () => {
    dispatch(logoutUser());
    navigation.replace('Login')
  };

  return (
    <SafeAreaView>
      <View style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Welcome to Home Screen! {user.name}</Text>
        {/* <Text>Welcome to Home Screen! Youssouf Yogue</Text> */}
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
