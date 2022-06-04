import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainContainer from './navigation/MainContainer';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_100Thin } from '@expo-google-fonts/montserrat';

export default function App() {
  // let [fontsLoaded] = useFonts({
  //   Montserrat_100Thin,
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    // <View style={styles.container}>
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
