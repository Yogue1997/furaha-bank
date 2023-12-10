import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Pressable } from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../constants/colors'
import Checkbox from 'expo-checkbox'
import { Ionicons } from '@expo/vector-icons'
import Button from '../components/Button'


const Signup = ({ navigation }) => {
  // const { isPasswordShown, setIsPasswordShown } = useState(false);
  // const { isChecked, setIsChecked } = useState(false);
  // console.log(isChecked);
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
            Create Account
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
          }}>Mobile Number</Text>
          <View style={{
            width: "100%",
            height: 48,
            borderColor: COLORS.black,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 22,
            flexDirection: "row",
            justifyContent: "space-between"
          }}>
            <TextInput
              placeholder='+1'
              placeholderTextColor={COLORS.black}
              keyboardType='numeric'
              style={{
                width: "12%",
                height: "100%",
                borderRightWidth: 1,
                borderLeftColor: COLORS.grey,
              }}
            />
            <TextInput
              placeholder='enter your phone number'
              placeholderTextColor={COLORS.black}
              keyboardType='numeric'
              style={{
                width: "80%"
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

        <View style={{
          flexDirection: "row",
          marginVertical: 6
        }}>
          <Checkbox
            style={{ marginRight: 8 }}
          // value={isChecked}
          // onValueChange={setIsChecked}
          // color={isChecked ? COLORS.primary : undefined}
          />
          <Text>I agree to the term and conditions</Text>
        </View>

        <Button
          title="Sing up"
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
            <Text style={{ fontSize:16, color: COLORS.black }}>Already have an account?</Text>
            <Pressable 
            onPress={() => navigation.navigate("Login")}
            >
              <Text style={{
                fontSize: 16,
                color: COLORS.primary,
                fontWeight: "bold",
                marginLeft: 6
              }}>Login</Text>
            </Pressable>
          </View>
      </View>
    </SafeAreaView>
  )
}

export default Signup