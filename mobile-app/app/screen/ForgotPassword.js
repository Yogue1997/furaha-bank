import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, Platform, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import COLORS from '../../constants/colors';
import Button from '../Buttons/Button';
// import { AntDesign } from '@expo/vector-icons';


const ForgotPassword = ({ navigation }) => {

  return (
    <KeyboardAvoidingView
      behavior='padding'
      style={{
        flex: 1,
        backgroundColor: COLORS.white
      }}
    >
      <View style={{
        marginVertical: 22,
      }}>
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: 22,
          // display: "flex",
          justifyContent: "center",
          // alignItems: "center"
        }}
      >
        <View style={{
          marginVertical: 22,
          alignItems: "center",
          justifyContent: "center",
          display: "flex"
        }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginVertical: 12,
              color: COLORS.black,
            }}
          >
            Forgot Password ?
          </Text>
        </View>
        <View style={{
          margin: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Text style={{
            fontSize: 22,
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            textAlign: "center"
          }}>Confirm your email and we'll send the instructions</Text>
        </View>
        <View style={{
          marginBottom: 12,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          {/* <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8,
            marginBottom: 10,
            // height: 400
          }}>Email address</Text> */}
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

        <Button
          title="Reset Password"
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
          {/* <View style={{
            flex: 1,
            height: 1,
            backgroundColor: COLORS.grey,
            marginHorizontal: 10
          }} /> */}
        </View>
        {/* <View style={{
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: Platform.OS == 'ios' ? "30%" : "10%"
        }}>
          <Text style={{ fontSize: 16, color: COLORS.black }}>Already have an account?</Text>
          <Pressable
            onPress={() => navigation.navigate("Welcome")}
          >
            <Text style={{
              fontSize: 16,
              color: COLORS.primary,
              fontWeight: "bold",
              marginLeft: 6
            }}>Login</Text>
          </Pressable>
        </View> */}
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: "20%",
    height: "40%",
    // left: 40
    // alignSelf: "center",
    // marginBottom: 10
  }
})

export default ForgotPassword