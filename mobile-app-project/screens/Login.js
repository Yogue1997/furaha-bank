import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Pressable } from 'react-native'
import COLORS from '../constants/colors'
import Checkbox from 'expo-checkbox'
import Button from '../components/Button'

const Login = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white
      }}
    >
      <View
        style={{
          flex: 1,
          marginHorizontal: 22
        }}
      >
        <View style={{
          marginVertical: 22,
        }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginVertical: 12,
              color: COLORS.black
            }}
          >
            Login
          </Text>
          <Text style={{
            fontSize: 16,
            color: COLORS.black
          }}>Connect with your friend today!</Text>
        </View>
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
          title="Login"
          filled
          style={{
            marginTop: 18,
            marginBottom: 4
          }} />
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20
          }}>
            <View style={{
              flex: 1,
              height: 1,
              backgroundColor: COLORS.grey,
              marginHorizontal: 10
            }}/>
          </View>
          <View style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: "30%"
          }}>
            <Text style={{ fontSize:16, color: COLORS.black }}>Don't have an account yet?</Text>
            <Pressable 
            onPress={() => navigation.navigate("Signup")}
            >
              <Text style={{
                fontSize: 16,
                color: COLORS.primary,
                fontWeight: "bold",
                marginLeft: 6
              }}>Sign Up</Text>
            </Pressable>
          </View>
      </View>
    </SafeAreaView>
  )
}

export default Login