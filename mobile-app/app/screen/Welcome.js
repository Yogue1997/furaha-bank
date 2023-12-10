import { View, Button, Text, SafeAreaView, StyleSheet, Dimensions, ImageBackground, ScrollView, KeyboardAvoidingView, Pressable, Platform } from 'react-native';
// import Fonts from '../../constants/Fonts';
import FontSize from '../../constants/FontSize';

import Login from './Login';
import COLORS from '../../constants/colors';



function Welcome({ navigation }) {

  return (
    <SafeAreaView >
      <View
        style={{
          height: Platform.OS == 'ios' ? "80%" : "80%",
          marginTop: Platform.OS == 'ios' ? 10 : 25
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
        <Text style={{ fontSize: 16, color: COLORS.black }}>Don't have an account?</Text>
        <Pressable
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={{
            fontSize: 16,
            color: COLORS.primary,
            fontWeight: "bold",
            marginLeft: 6
          }}>Register</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({})


export default Welcome;
