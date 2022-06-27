// import { StatusBar } from "expo-status-bar";
// import React from 'react'
// import { StyleSheet, Text, View } from "react-native";
// import { NativeBaseProvider, Stack } from "native-base";
// import { Provider } from 'react-native-paper'
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack';
// import {MainContainer} from './navigation/MainContainer'
// import {LoginScreen} from "./navigation/login/LoginScreen";
// import { ResetPasswordScreen } from "./navigation/login";
// import {RegisterScreen} from "./navigation/login/RegisterScreen";
import React from "react";
import { NativeBaseProvider, Stack } from "native-base";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainContainer from "./navigation/MainContainer.js";
import LoginScreen from "./navigation/login/LoginScreen.js";
import RegisterScreen from "./navigation/login/RegisterScreen.js";
import "react-native-gesture-handler";
import ResetPasswordScreen from "./navigation/login/ResetPasswordScreen.js";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="MainContainer" component={MainContainer} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
