import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Link } from 'expo-router';

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


const SecondRoute = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>

    <Text>Second Tab</Text>

  </View>
);

// "The best way to plan your event for any occasion."
const ThirdRoute = () => (
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
  third: ThirdRoute,
});

const TabbedView = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
    { key: 'third', title: 'Third' },
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'lightblue', height: 5 }}
      style={{ backgroundColor: 'white', height: 5 }}
    />
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

      {/* Tab view */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        //renderTabBar={() => null} // removes tab bar
        renderTabBar={renderTabBar}
        tabBarPosition='bottom'
      />

      {/* Signup/Login view */}
      <View style={styles.loginContainer}>

        <View style={styles.buttonContainer}>
          <Button
            title="Create an account"
            color={"black"}
            onPress={() => alert('Signup button clicked')}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.subText}>Already have an account? </Text>
          <Link href="/" asChild>
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
    //color: 'gray',
  },
  subText: {
    fontSize: 20,
    //fontWeight: 'bold',
    justifyContent: 'center',
    color: 'gray',
    alignItems: 'center',
  },
  loginContainer: {
    marginTop: 30, // Push the view to the bottom
    marginBottom: 50,
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginTop: 20, // Adjust the padding as needed
    marginHorizontal: 50,
    backgroundColor: 'white',
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 20, // Adjust the padding as needed
    //marginTop: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkText: {
    fontSize: 20,
    fontWeight: 'bold',
    //justifyContent: 'flex-start',
    //color: 'gray',
  },

});

export default TabbedView;
