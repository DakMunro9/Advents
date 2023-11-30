import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Link, useRouter } from 'expo-router';
import PrimaryButton from '../components/common/PrimaryButton';
import { TEST_IMAGES } from '../utils/export/test-images-exports'
import IconFeather from 'react-native-vector-icons/Feather';
import { useIsFocused } from '@react-navigation/native';

// "Explore upcoming and nearby events"
const FirstRoute = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
    <View>
      <Image
        source={TEST_IMAGES.LOREM1}
        style={{
          width: 300,
          height: 300,
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

// "The best way to plan your event for any occasion."
const SecondRoute = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>

    <View style={{ marginTop: 50, marginBottom: 100, backgroundColor: "black", borderRadius: 100, }}>
      <IconFeather name="figma" size={100} color="white" />
    </View>

    <View>
      <Text style={styles.mainText}>  The best way to plan your event for any occasion.</Text>
    </View>
    <View>
      <Text style={styles.subText}>ADVENTS</Text>
    </View>

  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const TabbedView = () => {
  const isFocused = useIsFocused();
  const [index, setIndex] = useState(0);

  // This autoscrolls the tabView
  useEffect(() => {
    // only fire useEffect when screen is focused to prevent unwanted behavior on other page in the stack
    if (isFocused) {

      const intervalId = setInterval(() => {
        // Calculate the next index and loop back to the first tab if needed
        const nextIndex = (index + 1) % routes.length;
        setIndex(nextIndex);
      }, 4000); // Adjust the delay (in milliseconds) as needed

      return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }

  }, [isFocused, index]);

  const [routes] = useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'lightblue', height: 5 }}
      style={{ backgroundColor: 'white', height: 5 }}
    />
  );

  const router = useRouter();

  return (

    <View style={{ flex: 1, backgroundColor: 'white' }}>

      {/* Tab view */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        tabBarPosition='bottom'
      />

      {/* Signup/Login view */}
      <View style={styles.loginContainer}>

        <View style={styles.buttonContainer}>

          <PrimaryButton
            title="Create an account"
            isPressed={() => router.push("/createaccount")}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.subText}>Already have an account? </Text>
          <Link href="/signin" asChild>
            <Text style={styles.linkText}>Sign In</Text>
          </Link>
        </View>

      </View>
    </View>
  );

};

const styles = StyleSheet.create({
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
  loginContainer: {
    marginTop: 30,
    marginBottom: 50,
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginTop: 80,
    marginHorizontal: 50,
    backgroundColor: 'white',
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TabbedView;
