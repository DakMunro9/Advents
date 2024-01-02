import useStripe from '../utils/apis/stripe';
import { usePaymentSheet } from "@stripe/stripe-react-native"
import { useState, useEffect } from "react"
import { Alert, Button, Platform, View } from "react-native";

export default function Page() {

// const SECRET_KEY = process.env.STRIPE_TEST_SECRET_KEY
// const stripe = require('stripe')(SECRET_KEY)

//TODO: Change this when not testing
const API_URL = Platform.OS === 'android' ? 'http://10.0.2.2:4242/payment-sheet' : 'https://localhost:4242/payment-sheet';

  const [ready, setReady] = useState<boolean>(false)
  const {initPaymentSheet, presentPaymentSheet, loading} = usePaymentSheet()

  useEffect(() => {
    initializePaymentSheet()
  }, [])

  async function initializePaymentSheet(){
    const {paymentIntent, ephemeralKey, customer} = await fetchPaymentSheetParams()

    const { error } = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      merchantDisplayName: 'Test Inc.',
      allowsDelayedPaymentMethods: true,
      returnURL: 'stripe-example://stripe-redirect'
    })
    if(error){
      Alert.alert(`${error.code}`, `${error.message}`)
    } else {
      setReady(true)
    }

  }

  async function fetchPaymentSheetParams() {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const {paymentIntent, ephemeralKey, customer} = await res.json()
    return { paymentIntent, ephemeralKey, customer }
  }

  async function buy(){
    const {error} = await presentPaymentSheet()

    if(error){
      Alert.alert(`${error.code}`, `${error.message}`)
    } else {
      setReady(false)
    }
  }
  
  return (
    <View>
      {/* <Button title='Buy' onPress={buy} disabled={loading || !ready}/> */}
      <Button title='Buy' onPress={buy} />
    </View>  

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
