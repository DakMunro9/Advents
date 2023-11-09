import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Buttonx from './components/common/Button';
import TextField from './components/common/TextField';
import { useGeolocation } from './utils/export/exports'

//Debug purposes

export default function App() {
  useGeolocation()

  
  return (
    <View style={styles.container}>
      <Text>This is App.tsx</Text>
      <StatusBar style="auto" />

      <Buttonx 
        title='Test' 
        onPress={() => console.log("Button pressed")}
        
      />

      <TextField

      />
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
