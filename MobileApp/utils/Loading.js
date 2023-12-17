import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={styles.image}>
      <Image source={require('../assets/FB.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%'
  }
})

export default Loading

