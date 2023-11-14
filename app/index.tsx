import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { Link } from 'expo-router';
import Vendors from '../screens/events/vendors/vendors';
import Location from '../screens/events/location/location';
import TextField from '../components/common/TextField';
import { containerStyles } from '../utils/styles/components';


export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerView}>
        <View style={containerStyles.block}>
          <Text>Hello There</Text>
          <Text>General Kenobi</Text>
          <Text>You Are a Bold One</Text>
        </View>
        
        {/* <TextField currentText={(text) => console.log(text)}/> */}
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfcfe',
  },
  innerView: {
    width: '90%',
    alignSelf: 'center'
  }
});
