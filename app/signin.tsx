import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Button } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { Link } from 'expo-router';

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
    <View style={styles.container}>

      <View style={{ marginLeft: 20, marginBottom: 80, marginTop: 20 }}>
        <Text style={styles.mainText}>Sign In</Text>
        <Text style={styles.subText}>Please sign in to your account</Text>
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

      <View style={{ marginLeft: 20 }}>
        <Text style={styles.labelText}>Password</Text>
        <View style={{ flexDirection: 'row', }}>
          <TextInput
            style={[
              styles.textInput,
              selectedInput === 'textInput2' ? styles.focusedTextInput : null,
            ]}
            placeholder="Enter your password"
            secureTextEntry={hidePassword} // Set secureTextEntry to true to hide the text
            onChangeText={(text) => console.log(text)}
            onFocus={() => handleFocus('textInput2')}
            onBlur={handleBlur}
          />
          <View style={{ marginLeft: 30, marginTop: 15 }}>
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <IconFeather name="eye" size={30} color="black" />
            </TouchableOpacity>
          </View>

        </View>

      </View>

      <View>
        <Link href="/" asChild>
          <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'right', marginRight: 20 }}>Forgot Password?</Text>
        </Link>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Sign In"
          color={"black"}
          onPress={() => alert('Sign In button clicked')}
        />
      </View>

      <View>
        <Text style={{ fontSize: 20, justifyContent: 'center', color: 'gray', textAlign: 'center', }}>
          Or sign in using your social profile
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
        <Text style={styles.subText}>Don't have an account? </Text>
        <Link href="/" asChild>
          <Text style={styles.linkText}>Create Account</Text>
        </Link>
      </View>

    </View>

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
    marginBottom: 5,
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
