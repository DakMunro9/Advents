import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform, View, ScrollView, TouchableOpacity, Button, Image, ImageBackground, Modal } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { Link, useRouter } from 'expo-router';
import PrimaryButton from '../components/common/PrimaryButton';
import * as ImagePicker from 'expo-image-picker';

export default function Page() {

  {/* MODAL */}
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  {/* IMAGE PICKER */}
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      //setImage(result.assets[0].uri);
      await saveImage(result.assets[0].uri);
    }
  };

  {/* CAMERA */}
  const uploadImage = async () => {
    try {
      await ImagePicker.requestCameraPermissionsAsync();
      let result = await ImagePicker.launchCameraAsync({
        cameraType: ImagePicker.CameraType.front,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled){
        // save image
        await saveImage(result.assets[0].uri);
      }

    } catch (error) {
      alert("Error uploading image: " + error.message);
    }
  };

  const saveImage = async (image) => {
    try {
      // update displayed image
        setImage(image);
        setModalVisible(false);
    } catch (error) {
      throw error;
    }
  }

  {/* TEXT INPUT */}
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

  const router = useRouter();

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
            <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: 'lightgray', borderRadius: 5 }} onPress={toggleModal}>

              {image && <ImageBackground
                source={{ uri: image }}
                style={{ width: 100, height: 100, borderColor: 'black', borderRadius: 5 }}
                resizeMode="cover"
                imageStyle={styles.imageStyle}
              />}

              <View style={{ position: 'absolute', width: 25, height: 25, right: 1, bottom: 1, borderRadius: 50, backgroundColor: 'white' }}>
                {/* White background for camera icon */}
              </View>

              <View style={{ position: 'absolute', right: 3.5, bottom: 4 }}>
                <IconFontAwesome name="camera" size={18} color="black" />
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
            isPressed={() => router.push("/connectsocial")}
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
          <Link href="/signin" asChild>
            <Text style={styles.linkText}>Sign in</Text>
          </Link>
        </View>

      </View>
      
      {/* MODAL */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={{flexDirection:'row'}}>

              <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={{marginTop: 30, width: 60, height: 60, backgroundColor: 'black', borderRadius: 10, marginHorizontal: 30}}
                onPress={uploadImage}
                >
                  <View style={{alignItems: 'center', top: 15}}>
                    <IconFontAwesome name="camera" size={30} color="white" />
                  </View>
                  
                </TouchableOpacity>
                <Text>Camera</Text>
              </View>

              <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={{marginTop: 30, width: 60, height: 60, backgroundColor: 'black', borderRadius: 10, marginHorizontal: 30}}
                onPress={pickImage}
                >
                  <View style={{alignItems: 'center', top: 15}}>
                    <IconFontAwesome name="image" size={30} color="white" />
                  </View>
                  
                </TouchableOpacity>
                <Text>Gallery</Text>
              </View>

            </View>

            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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
  image: {
    width: 100,
    height: 100,
  },
  imageStyle: {
    borderRadius: 5,
    overflow: 'hidden', // this is important for clipping
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'right'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
});
