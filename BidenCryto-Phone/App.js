import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainContainer from './navigation/MainContainer';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>lz minh hung ngu lam
    //   </Text>
    //   <StatusBar style="auto" />
    // </View>
    <MainContainer />
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
