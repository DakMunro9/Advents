import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View style={styles.container}>
      <Text>This is test.tsx</Text>
      <StatusBar style="auto" />

      <Link href="/" asChild>
        <Button title="BACK TO INDEX"/> 
      </Link>

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
