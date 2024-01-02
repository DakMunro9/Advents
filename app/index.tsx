import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { useFonts } from 'expo-font'
import { FontTypes, StaticChipTypes } from '../utils/advent-types';
import _layout from './_layout';
import { Link } from 'expo-router';
import { baseStyles } from '../utils/styles/BaseStyles';
import LoadingScreen from '../components/common/Loading';
import StaticChip from '../components/common/Chip';
import { StripeProvider } from '@stripe/stripe-react-native';
import { STRIPE_TEST_PUBLISHED_API_KEY } from "@env"




export default function Page() {
  const STRIPE_KEY = STRIPE_TEST_PUBLISHED_API_KEY
  const [fontsLoaded] = useFonts({
    [FontTypes.jakarta_semibold]: require('../assets/Plus_Jakarta_Sans/static/PlusJakartaSans-SemiBold.ttf'),
    [FontTypes.jakarta_regular]: require('../assets/Plus_Jakarta_Sans/PlusJakartaSans-VariableFont_wght.ttf'),
    [FontTypes.jakarta_italic]: require('../assets/Plus_Jakarta_Sans/PlusJakartaSans-Italic-VariableFont_wght.ttf')
  })

  const placeHolderFunction = () => {

  }

  return (
    <StripeProvider
    publishableKey={STRIPE_KEY}
    // urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    // merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    >
      <SafeAreaView style={baseStyles.outerView}>
        <View style={baseStyles.innerView}>
          {fontsLoaded === false ?
            <LoadingScreen />
            :
            // Rest of the app goes here
            <View style={{ flex: 1, justifyContent: 'center' }}>
              
              
              <Link href="/welcome" asChild>
                <Button title="Welcome" />
              </Link>

              <Link href="/signin" asChild>
                <Button title="Sign in" />
              </Link>

              <Link href="/forgotpassword" asChild>
                <Button title="forgot password" />
              </Link>

              <Link href="/createaccount" asChild>
                <Button title="Create Account" />
              </Link>

              <Link href="/decor" asChild>
                <Button title="Decor" />
              </Link>

              <Link href="/day" asChild>
                <Button title="Day" />
              </Link>

              <Link href="/promote" asChild>
                <Button title="Promote" />
              </Link>

              <Link href="/location" asChild>
                <Button title="Location" />
              </Link>

              <Link href="/budget" asChild>
                <Button title="Budget" />
              </Link>

              <Link href="/servicefee" asChild>
                <Button title="Service Fee" />
              </Link>

              <Link href="/vendors" asChild>
                <Button title="Vendors" />
              </Link>

              <Link href="/search" asChild>
                <Button title="Search Events" />
              </Link>
              <Link href="/splash" asChild>
                <Button title="Splash" />
              </Link>

              <Link href="/test" asChild>
                <Button title="Test" />
              </Link>

              <Link href="/openai-test" asChild>
                <Button title="Chat Test" />
              </Link>
          </View>
          }
        </View>
      </SafeAreaView>
    </StripeProvider>

  );
}




