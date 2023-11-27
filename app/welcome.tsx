import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Link, useRouter } from 'expo-router';
import PrimaryButton from '../components/common/PrimaryButton';

// "Explore upcoming and nearby events"
const FirstRoute = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>

    <Text style={{ marginBottom: 100, }}>(image preview here)</Text>

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

    <Text style={{ marginBottom: 100 }}>(icon here)</Text>

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
  const [index, setIndex] = useState(0);

  // This autoscrolls the tabView
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the next index and loop back to the first tab if needed
      const nextIndex = (index + 1) % routes.length;
      setIndex(nextIndex);
    }, 4000); // Adjust the delay (in milliseconds) as needed

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [index]);

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
