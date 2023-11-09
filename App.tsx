import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useGeolocation } from './utils/export/exports'
import Location from './screens/events/location/location';

//Debug purposes
import { AsyncRead } from './utils/async-storage/async-methods';
import { AsyncKeys } from './utils/advent-types';
import { useEffect, useState } from 'react';
import { containerStyles } from './utils/styles/components';

export default function App() {
  useGeolocation()

  
  return (
    <View style={styles.container}>
      <Location />
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
