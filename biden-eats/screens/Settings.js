import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

export default function Settings() {

  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate('Auth', { screen: 'Login' });
      })
      .catch(error => alert(error.message))
  }

  return (
    <SafeAreaView
      style={{ backgroundColor: "#eee", flex: 1 }}>
      <ScrollView
        style={{ padding: 15 }}
        contentContainerStyle={{ justifyContent: "center", alignContent: "center" }}
        showsVerticalScrollIndicator={false}
      >
        <Text>
          Email: {auth.currentUser?.email}
        </Text>
        <TouchableOpacity
          style={{ backgroundColor: "#0782F9", width: "50%", padding: 15, borderRadius: 10 }}
          onPress={handleSignOut}
        >
          <Text>Sign out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}