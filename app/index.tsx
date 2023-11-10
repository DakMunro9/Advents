import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Link } from 'expo-router';
import Vendors from '../screens/events/vendors/vendors';

export default function Page() {
  return (
    <View style={styles.container}>
      <Vendors />

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
