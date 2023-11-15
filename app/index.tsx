import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { Link } from 'expo-router';
import Vendors from '../screens/events/vendors/vendors';
import Location from '../screens/events/location/location';
import TextField from '../components/common/TextField';
import { blockStyles } from '../utils/styles/BlockStyles';
import { useFonts } from 'expo-font'
import { textStyles } from '../utils/styles/TextStyles';
import { FontTypes, PrimaryButtonTitles } from '../utils/advent-types';
import PrimaryButton from '../components/common/Button';


export default function Page() {
  const [fontsLoaded] = useFonts({
    [FontTypes.jakarta_semibold]: require('../assets/Plus_Jakarta_Sans/static/PlusJakartaSans-SemiBold.ttf'),
    [FontTypes.jakarta_regular]: require('../assets/Plus_Jakarta_Sans/PlusJakartaSans-VariableFont_wght.ttf'),
    [FontTypes.jakarta_italic]: require('../assets/Plus_Jakarta_Sans/PlusJakartaSans-Italic-VariableFont_wght.ttf')
  })
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerView}>
        {fontsLoaded === false ?
          <LoadingScreen />    
          :
          // Rest of the app goes here
          <PrimaryButton title={PrimaryButtonTitles.add_event} isPressed={() => console.log('clicked')}/>
        }
      </View>
    </SafeAreaView>

  );
}

function LoadingScreen(){
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text>Loading...</Text>
    </View>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfcfe',
  },
  innerView: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    // backgroundColor: 'green'
  }
});
