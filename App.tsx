import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Buttonx from './components/common/PrimaryButton';
import TextField from './components/common/TextField';
import { useGeolocation } from './utils/export/hook-exports'
import Vendors from './app/vendors';

//Debug purposes

export default function App() {
  useGeolocation()

  
  return (
    <View style={styles.container}>
      <Vendors />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
