import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Pressable, Platform } from 'react-native';
import Login from './Login';
import COLORS from '../../constants/colors';
import Button from '../Buttons/Button'



function Welcome({ navigation }) {

  return (
    <SafeAreaView >
      <View
        style={{
          height: Platform.OS == 'ios' ? "73%" : "70%",
          marginTop: Platform.OS == 'ios' ? 10 : 20
        }}
      >
        <Login />
        <View style={{
          marginTop: Platform.OS == 'ios' ? -190 : 0
        }}>
          <Button
            onPress={() => navigation.replace('Home')}
            title="Login"
            filled
            style={{
              marginTop: 1,
              marginBottom: 4,
              marginLeft: 20,
              marginRight: 20
            }} />
        </View>
      </View>

      <View style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20
      }}>

      </View>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({})


export default Welcome;
