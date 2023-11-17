import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform, View, ScrollView, TouchableOpacity, Button } from 'react-native';
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

        <View style={{ marginLeft: 20, marginBottom: 20, marginTop: 20 }}>
          <Text style={styles.mainText}>Create Account</Text>
          <Text style={styles.subText}>Please fill in to complete your account</Text>
        </View>

        {/* Scrollview wraps around profile picture button and textInputs */}
        <ScrollView>

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={{ borderWidth: 2, borderRadius: 5, width: 100, height: 100, }}>
              <View style={{ marginLeft: 65, marginTop: 67 }}>
                <IconFontAwesome name="camera" size={30} color="black" />
              </View>

            </TouchableOpacity>
          </View>


          <View style={{ marginLeft: 20 }}>
            <Text style={styles.labelText}>Name</Text>
            <TextInput
              style={[
                styles.textInput,
                selectedInput === 'textInput1' ? styles.focusedTextInput : null,
              ]}
              placeholder="Enter your name"
              onChangeText={(text) => console.log(text)}
              onFocus={() => handleFocus('textInput1')}
              onBlur={handleBlur}
            />
          </View>

          <View style={{ marginLeft: 20 }}>
            <Text style={styles.labelText}>Email</Text>
            <TextInput
              style={[
                styles.textInput,
                selectedInput === 'textInput2' ? styles.focusedTextInput : null,
              ]}
              placeholder="Enter your email"
              onChangeText={(text) => console.log(text)}
              onFocus={() => handleFocus('textInput2')}
              onBlur={handleBlur}
            />
          </View>

          <View style={{ marginLeft: 20 }}>
            <Text style={styles.labelText}>Password</Text>
            <View style={{ flexDirection: 'row', }}>
              <TextInput
                style={[
                  styles.textInput,
                  selectedInput === 'textInput3' ? styles.focusedTextInput : null,
                ]}
                placeholder="Create password"
                secureTextEntry={hidePassword} // Set secureTextEntry to true to hide the text
                onChangeText={(text) => console.log(text)}
                onFocus={() => handleFocus('textInput3')}
                onBlur={handleBlur}
              />
              <View style={{ marginLeft: 30, marginTop: 15 }}>
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <IconFeather name="eye" size={30} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>


        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 16, textAlign: 'center', marginHorizontal: 20 }}>Password must be at least be 12 characters and contain a numeric and special character.</Text>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Sign Up"
            isPressed={() => alert('Sign In button clicked')}
          />
        </View>

        <View>
          <Text style={{ fontSize: 20, justifyContent: 'center', color: 'gray', textAlign: 'center', }}>
            Or create account using your social profile
          </Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
          <View style={{ marginHorizontal: 30 }}>
            <TouchableOpacity>
              <IconFontAwesome name="google" size={30} color="black" />
            </TouchableOpacity>
          </View>

          <View style={{ marginHorizontal: 30 }}>
            <TouchableOpacity>
              <IconFontAwesome name="facebook-official" size={30} color="black" />
            </TouchableOpacity>
          </View>

          <View style={{ marginHorizontal: 30 }}>
            <TouchableOpacity>
              <IconFontAwesome name="instagram" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.subText}>Already have an account? </Text>
          <Link href="/" asChild>
            <Text style={styles.linkText}>Sign in</Text>
          </Link>
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
    marginVertical: 15,
    marginRight: 20,
    marginLeft: 20,
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
