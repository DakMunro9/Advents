import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Link } from 'expo-router';
import Buttonx from './components/common/Button';
import TextField from './components/common/TextField';

export default function App() {
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
