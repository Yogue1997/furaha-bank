import { View, Button, Text, SafeAreaView, StyleSheet, Dimensions, ImageBackground, ScrollView, KeyboardAvoidingView, Pressable, Platform } from 'react-native';


import Login from './Login';
import COLORS from '../../constants/colors';



function Welcome({ navigation }) {

  return (
    <SafeAreaView >
      <View
        style={{
          height: Platform.OS == 'ios' ? "80%" : "80%",
          marginTop: Platform.OS == 'ios' ? 10 : 20
        }}
      >
        <Login />
      </View>
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20
      }}>

      </View>
      <View style={{
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: "0%"
      }}>
        <Pressable
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={{
            fontSize: 16,
            color: COLORS.primary,
            fontWeight: "bold",
            marginLeft: 6
          }}>Create an Account</Text>
        </Pressable>
      </View>
      <View style={{
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: "0%",
        marginTop: Platform.OS == 'ios' ? 20 : 10
      }}>
        <Pressable
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          <Text style={{
            fontSize: 16,
            color: COLORS.primary,
            fontWeight: "bold",
            marginLeft: 6,
            paddingBottom: Platform.OS == 'ios' ? 20 : 1
          }}>Forgot Password</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({})


export default Welcome;
