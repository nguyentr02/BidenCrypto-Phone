import React from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import { Button } from "native-base";
import Paragraph from '../../components/Paragraph'
import { View, Text, } from 'react-native'
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'

export default function StartScreen({ navigation }) {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      
      
     
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </View>
  )
}

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     width: '100%',
//     backgroundColor: theme.colors.surface,
//   },})
