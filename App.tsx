import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useGeolocation } from './utils/export/exports'

//Debug purposes
import { AsyncRead } from './utils/async-storage/async-methods';
import { AsyncKeys } from './utils/advent-types';
import { useEffect, useState } from 'react';

export default function App() {
  useGeolocation()

  
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
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
