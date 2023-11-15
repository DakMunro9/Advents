import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { Link } from 'expo-router';

export default function Page() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={{ marginTop: 100 }}>(app preview here)</Text>

      <View style={styles.titleContainer}>
        <Text style={styles.mainText}>Explore Upcoming and Nearby Events</Text>
        <Text style={styles.subText}>By ADVENTS</Text>
      </View>

      <View style={styles.divider}>
        <Text>                                </Text>
      </View>

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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    padding: 10, // Adjust the padding as needed
    //marginTop: 'auto',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 50,
    fontWeight: 'bold',
    justifyContent: 'center',
    //color: 'gray',
  },
  subText: {
    fontSize: 20,
    //fontWeight: 'bold',
    justifyContent: 'center',
    color: 'gray',
    alignItems: 'center',
  },
  linkText: {
    fontSize: 20,
    fontWeight: 'bold',
    //justifyContent: 'flex-start',
    //color: 'gray',
  },
  buttonContainer: {
    //width: '90%',
  },
  divider: {
    height: 5,
    backgroundColor: 'lightblue', // You can change the color of the divider
    marginVertical: 20, // Adjust the vertical spacing above and below the divider
  },
  loginContainer: {
    marginTop: 'auto', // Push the view to the bottom
    marginBottom: 50,
  },
  titleContainer: {
    marginTop: 'auto', // Push the view to the bottom
    alignItems: 'center',
  }
});
