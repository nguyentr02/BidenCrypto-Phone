import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from "native-base";
import MainContainer from './navigation/MainContainer';
import LoginScreen from './navigation/login/LoginScreen';
import StartScreen from './navigation/login/StartScreen';

export default function App() {
  return (
    // <View style={styles.container}>
    // </View>
    <NativeBaseProvider>
      {/* <StartScreen/> */}
      {/* <LoginScreen/> */}
      <MainContainer />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
