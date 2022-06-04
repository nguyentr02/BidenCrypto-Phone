import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from "native-base";
import MainContainer from './navigation/MainContainer';

export default function App() {
  return (
    // <View style={styles.container}>
    // </View>
    <NativeBaseProvider>
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
