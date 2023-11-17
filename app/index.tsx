import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { Link } from 'expo-router';
import Vendors from '../screens/events/vendors/vendors';
import Location from '../screens/events/location/location';
import TextField from '../components/common/TextField';
import { blockStyles } from '../utils/styles/BlockStyles';
import { useFonts } from 'expo-font'
import { textStyles } from '../utils/styles/TextStyles';
import { FontTypes, IconBlockTypes } from '../utils/advent-types';
import SecondaryButton from '../components/common/SecondaryButton';
import IconBlock from '../components/common/IconBlock';
import PrimaryButton from '../components/common/PrimaryButton';


export default function Page() {
  const [fontsLoaded] = useFonts({
    [FontTypes.jakarta_semibold]: require('../assets/Plus_Jakarta_Sans/static/PlusJakartaSans-SemiBold.ttf'),
    [FontTypes.jakarta_regular]: require('../assets/Plus_Jakarta_Sans/PlusJakartaSans-VariableFont_wght.ttf'),
    [FontTypes.jakarta_italic]: require('../assets/Plus_Jakarta_Sans/PlusJakartaSans-Italic-VariableFont_wght.ttf')
  })

  const placeHolderFunction = () => {

  }

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.innerView}>
        {fontsLoaded === false ?
          <LoadingScreen />
          :
          // Rest of the app goes here

          <View style={{ flex: 1, justifyContent: 'center' }}>
            <IconBlock icon={IconBlockTypes.info} text="Have you ever heard of The Tragedy of Darth Plaguis The Wise? 
            I thought not. It's not a tale the jedi will tell you" />

            <Link href="/welcome" asChild>
              <Button title="Welcome" />
            </Link>

            <Link href="/signin" asChild>
              <Button title="Signin" />
            </Link>

            <Link href="/decor" asChild>
              <Button title="Decor" />
            </Link>

            <Link href="/day" asChild>
              <Button title="Day" />
            </Link>

          </View>

        }
      </View>
    </SafeAreaView>

  );
}

function LoadingScreen() {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text>Loading...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fbfcfe',
  },
  innerView: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  }
});
