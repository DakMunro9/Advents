import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform, View, TouchableOpacity, Button } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { Link } from 'expo-router';
import PrimaryButton from '../components/common/PrimaryButton';

export default function Page() {

  const [selectedInput, setSelectedInput] = useState(null);

  const handleFocus = (inputId) => {
    setSelectedInput(inputId);
  };

  const handleBlur = () => {
    setSelectedInput(null);
  };

  // Initialize a boolean state for password hide
  const [hidePassword, setIsToggled] = useState(true);

  const togglePasswordVisibility = () => {
    setIsToggled((prev) => !prev);
  }

  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >

    <View style={styles.container}>

      <View style={{ marginLeft: 20, marginBottom: 80, marginTop: 20 }}>
        <Text style={styles.mainText}>Forgot password</Text>
        <Text style={styles.subText}>Reset your password</Text>
      </View>

      <View style={{ marginLeft: 20 }}>
        <Text style={styles.labelText}>Email</Text>
        <TextInput
          style={[
            styles.textInput,
            selectedInput === 'textInput1' ? styles.focusedTextInput : null,
          ]}
          placeholder="Enter your email"
          onChangeText={(text) => console.log(text)}
          onFocus={() => handleFocus('textInput1')}
          onBlur={handleBlur}
        />
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          title="Send code"
          isPressed={() => alert('Send code button clicked')}
        />
      </View>

    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 50,
    justifyContent: 'center',
    textAlign: 'left',
  },
  subText: {
    fontSize: 20,
    justifyContent: 'center',
    color: 'gray',
    textAlign: 'left',
  },
  labelText: {
    fontSize: 20,
    justifyContent: 'center',
    color: 'gray',
    textAlign: 'left',
  },
  textInput: {
    fontSize: 18,
    borderRadius: 10,
    height: 60,
    borderColor: 'lightgray',
    borderWidth: 2,
    paddingHorizontal: 10,
    width: '80%',
    marginBottom: 20,
  },
  focusedTextInput: {
    borderColor: 'black', // Set border color when focused
  },
  buttonContainer: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginHorizontal: 20,
    height: 50,
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
