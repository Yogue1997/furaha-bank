import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Signup, Welcome, ForgotPassword, HomeScreen, Login } from './app/screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store/store';
import LoginData from './utils/LoginData';



const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='welcome'>
          <Stack.Screen
            name='Login'
            component={Login}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Signup'
            component={Signup}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='ForgotPassword'
            component={ForgotPassword}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
