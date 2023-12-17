import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgotPassword, HomeScreen, Login, Signup } from '../app/screen';
import Home from '../app/TabScreen/Home';
import Transfer from '../app/TabScreen/Transfer';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../app/screen/ProfileScreen';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const MainStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Signup'
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='ForgotPassword'
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};


export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Transfer"
        component={Transfer}
        options={{
          // tabBarLabel: 'Transfer',
          tabBarIcon: ({ color, size }) => (
            <Icon name="swap-horizontal-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen name='Logout' component={HomeScreen} /> */}
    </Tab.Navigator>
  );
};


