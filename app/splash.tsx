import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Link, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { TEST_IMAGES } from '../utils/export/test-images-exports'

export default function Page() {

  const router = useRouter();

  // useEffect automatically navigates to Sign In screen after delay
  useEffect(() => {
    // Simulate a delay (e.g., API call, loading resources) and navigate to the main screen
    setTimeout(() => {
      router.replace("welcome");
    }, 3000); // Adjust the delay as needed
  }, []);

  return (
    <View style={styles.container}>

      <View style={{flexDirection: 'row'}}>
        <Image
          source={TEST_IMAGES.LOREM1}
          style={{
            width: 200,
            height: 200,
            resizeMode: 'contain',
          }}
        />
        <Image
          source={TEST_IMAGES.LOREM2}
          style={{
            width: 200,
            height: 200,
            resizeMode: 'contain',
          }}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={TEST_IMAGES.LOREM3}
          style={{
            width: 200,
            height: 200,
            resizeMode: 'contain',
          }}
        />
        <Image
          source={TEST_IMAGES.LOREM4}
          style={{
            width: 200,
            height: 200,
            resizeMode: 'contain',
          }}
        />
      </View>

      <View>
        <Text style={styles.mainText}>Explore Upcoming and Nearby Events</Text>
      </View>
      <View>
        <Text style={styles.subText}>By ADVENTS</Text>
      </View>

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
  mainText: {
    fontSize: 50,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
  },
  subText: {
    fontSize: 20,
    justifyContent: 'center',
    color: 'gray',
    alignItems: 'center',
  },
});
