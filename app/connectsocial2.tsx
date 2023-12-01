import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PrimaryButton from '../components/common/PrimaryButton';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Page() {

  const router = useRouter();

  const [selectedInput, setSelectedInput] = useState(null);

  const handleFocus = (inputId) => {
    setSelectedInput(inputId);
  };

  const handleBlur = () => {
    setSelectedInput(null);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', }}>

      <View style={{ marginVertical: 40, }}>
        <Text style={styles.mainText}>Connect your social accounts</Text>
        <Text style={styles.subText}>Enhance your experience</Text>
      </View>

      {/* facebook */}
      <View style={{ marginHorizontal: 10, marginVertical: 50, flexDirection: 'row' }}>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <IconFontAwesome name="facebook-official" size={30} color="black" />
          <Text style={styles.overlayText}> Facebook.com/</Text>
        </View>

        <TextInput
          style={[
            styles.textInput,
            selectedInput === 'textInput1' ? styles.focusedTextInput : null,
          ]}
          placeholder="username"
          onChangeText={(text) => console.log(text)}
          onFocus={() => handleFocus('textInput1')}
          onBlur={handleBlur}
        />

      </View>

      {/* facebook */}
      <View style={{ marginHorizontal: 10, marginVertical: 30, flexDirection: 'row' }}>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <IconFontAwesome name="facebook-official" size={30} color="black" />
          <Text style={styles.overlayText}> Facebook.com/</Text>
        </View>

        <TextInput
          style={[
            styles.textInput,
            selectedInput === 'textInput1' ? styles.focusedTextInput : null,
          ]}
          placeholder="username"
          onChangeText={(text) => console.log(text)}
          onFocus={() => handleFocus('textInput1')}
          onBlur={handleBlur}
        />

      </View>

      

      <View style={{ marginTop: 'auto', width: '80%', marginBottom: 20 }}>
        <PrimaryButton
          title="Save"
          isPressed={() => router.push("connectsocial")}
        />
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
  mainText: {
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'left',
  },
  subText: {
    marginTop: 20,
    fontSize: 20,
    justifyContent: 'center',
    color: 'gray',
    textAlign: 'left',
  },
  overlayText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  socialButton: {
    borderWidth: 2,
    height: 80,
    width: 400,
    borderRadius: 5,
    marginVertical: 10,
  },
  textInput: {
    fontSize: 18,
    borderRadius: 10,
    borderColor: 'lightgray',
    borderWidth: 2,
    paddingHorizontal: 10,
    height: 50,
    width: '50%',
    marginBottom: 20,
  },
  focusedTextInput: {
    borderColor: 'black', // Set border color when focused
  },
});
