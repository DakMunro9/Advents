import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import Voice from '@react-native-community/voice';

const Page = () => {
  const [result, setResult] = React.useState('');
  const [error, setError] = React.useState('');
  const [isRecording, setIsRecording] = React.useState(false);

  Voice.onSpeechStart = () => setIsRecording(true);
  Voice.onSpeechEnd = () => setIsRecording(false);
  Voice.onSpeechError = err => setError(err.error);
  Voice.onSpeechResults = result => setResult(result.value[0]);

  const handlePress = () => {
    alert("record clicked");
  }

  const startRecording = async () => {

    try {
      await Voice.start('en-US');
    } catch (err) { 
      setError(err);
    }
  };

  const stopRecording = async () => {
    try {
      await Voice.stop();
    } catch (err) { 
      setError(err);
    }
  }

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{fontSize: 20, color: 'green', fontWeight: '500'}}>
        Voice Input
      </Text>

      <TouchableOpacity style={{borderWidth: 2, width: 200, height: 100}}
      onPress={isRecording ? stopRecording : startRecording}
      >
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <IconFontAwesome name="microphone" size={40} color="black" />
          <Text>{isRecording ? 'Stop Recording': 'Start Recording'}</Text>
        </View>
        
      </TouchableOpacity>

      <TouchableOpacity style={{height: 50, width: 50, backgroundColor: 'black'}} onPress={handlePress}>

      </TouchableOpacity>

      <Text>{result}</Text>
      <Text>{error ? error.toString() : ''}</Text>
    </View>
  );
}
  
export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
