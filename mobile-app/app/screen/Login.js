import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Pressable, KeyboardAvoidingView, Image, StyleSheet } from 'react-native'
import COLORS from '../../constants/colors'
import Checkbox from 'expo-checkbox'
import Button from '../Buttons/Button'

const imageUrl = "https://immigrantinvest.com/wp-content/uploads/2022/03/best-banks-2021-40543452.jpg";


const Login = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior='padding'
      style={{
        flex: 1,
        marginHorizontal: 22
      }}
    >
      <Image
        style={styles.image}
        source={{
          uri: imageUrl
        }} />
      <View style={{
        marginBottom: 12
      }}>
        <Text style={{
          fontSize: 16,
          fontWeight: 400,
          marginVertical: 8,
        }}>Email address</Text>
        <View style={{
          width: "100%",
          height: 48,
          borderColor: COLORS.black,
          borderWidth: 1,
          borderRadius: 8,
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: 22
        }}>
          <TextInput
            placeholder='Enter your email address'
            placeholderTextColor={COLORS.black}
            keyboardType='email-address'
            style={{
              width: "100%"
            }}
          />
        </View>
      </View>
      <View style={{
        marginBottom: 12
      }}>
        <Text style={{
          fontSize: 16,
          fontWeight: 400,
          marginVertical: 8,
        }}>Password</Text>
        <View style={{
          width: "100%",
          height: 48,
          borderColor: COLORS.black,
          borderWidth: 1,
          borderRadius: 8,
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: 22
        }}>
          <TextInput
            placeholder='Enter your password'
            placeholderTextColor={COLORS.black}
            secureTextEntry
            // secureTextEntry={isPasswordShown}
            style={{
              width: "100%"
            }}
          />

          {/* Having a this issues TypeError: setIsPasswordShown is not a function (it is undefined), js engine: hermes  */}
          {/* 
            <TouchableOpacity
              // onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{
                position: "absolute",
                right: 12
              }}>
              {
                isPasswordShown == true ? (
                  <Ionicons name='eye-off' size={24} color={COLORS.black} />
                ) : (
                  <Ionicons name='eye' size={24} color={COLORS.black} />
                )
              }

            </TouchableOpacity> */}
        </View>
      </View>


      <Button
        onPress={() => navigation.navigate("Signup")}
        title="Login"
        filled
        style={{
          marginTop: 18,
          marginBottom: 4
        }} />
        
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "40%",
    alignSelf: "center",
    marginBottom: 10
  }
})

export default Login