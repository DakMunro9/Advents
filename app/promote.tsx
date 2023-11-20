import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFoundation from 'react-native-vector-icons/Foundation';
import { Link } from 'expo-router';
import RNPickerSelect from 'react-native-picker-select';
import PrimaryButton from '../components/common/PrimaryButton';

export default function Page() {

  {/* Picker */ }
  const [selectedBusiness, setSelectedBusiness] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const businessData = [
    { label: 'Select Business Type', value: '' }, // Placeholder option
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const serviceData = [
    { label: 'Select range of services', value: '' }, // Placeholder option
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  {/* Text Input */ }
  const [selectedInput, setSelectedInput] = useState(null);

  const handleFocus = (inputId) => {
    setSelectedInput(inputId);
  };

  const handleBlur = () => {
    setSelectedInput(null);
  };

  {/* Numeric Input */ }
  const [value, setValue] = useState('');

  const handleNumericInput = (input) => {
    // Replace non-numeric characters with an empty string
    const numericValue = input.replace(/[^0-9].[^0-9]/g, '');

    // Update the state with the numeric value
    setValue(numericValue);
  };

  return (

    <View style={styles.container}>
      <ScrollView style={{ marginBottom: 25 }}>

        {/* Street Location */}
        <View style={{ marginLeft: 20, marginTop: 20, }}>
          <Text style={styles.labelText}>Street Location</Text>
          <TextInput
            style={[
              styles.textInput,
              selectedInput === 'textInput1' ? styles.focusedTextInput : null,
            ]}
            placeholder="Write here..."
            onChangeText={(text) => console.log(text)}
            onFocus={() => handleFocus('textInput1')}
            onBlur={handleBlur}
          />
        </View>

        {/* Business Type */}
        <View style={{ marginLeft: 20, marginRight: 35, marginTop: 20, }}>
          <Text style={styles.labelText}>Business Type</Text>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedBusiness}
              onValueChange={(itemValue, itemIndex) => setSelectedBusiness(itemValue)}
            >
              {businessData.map((item, index) => (
                <Picker.Item key={index} label={item.label} value={item.value} />
              ))}
            </Picker>
          </View>
        </View>

        {/* Range of services */}
        <View style={{ marginLeft: 20, marginRight: 35, marginTop: 20, }}>
          <Text style={styles.labelText}>Range of services</Text>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedService}
              onValueChange={(itemValue, itemIndex) => setSelectedService(itemValue)}
            >
              {serviceData.map((item, index) => (
                <Picker.Item key={index} label={item.label} value={item.value} />
              ))}
            </Picker>
          </View>
        </View>

        {/* Event Package Offers */}
        <View style={{ marginLeft: 20, marginRight: 35, marginTop: 20, }}>
          <Text style={styles.labelText}>Event Package Offers</Text>

          <View>
            <TouchableOpacity style={styles.plusButton}>
              <View style={{}}>
                <IconFeather name="plus" size={50} color="white" />
              </View>
            </TouchableOpacity>
            <Text style={{ color: 'gray', }}>      Create Offer</Text>
          </View>

        </View>

        {/* Items Directory */}
        <View style={{ marginLeft: 20, marginRight: 35, marginTop: 20, }}>
          <Text style={styles.labelText}>Items Directory</Text>

          <View>
            <TouchableOpacity style={styles.plusButton}>
              <View style={{}}>
                <IconFeather name="plus" size={50} color="white" />
              </View>
            </TouchableOpacity>
            <Text style={{ color: 'gray', }}>        Add Items</Text>
          </View>

        </View>

        {/* Price */}
        <View style={{ marginLeft: 20, marginRight: 35, marginTop: 20, }}>
          <Text style={styles.labelText}>Price</Text>

          <View style={{ flexDirection: 'row' }}>
            <View style={{}}>
              <IconFoundation name="dollar" size={60} color="black" />
            </View>

            <View style={{ marginLeft: 20, width: '100%' }}>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                placeholder="Enter a number"
                value={value}
                onChangeText={handleNumericInput}
              />
            </View>
          </View>
        </View>

      </ScrollView>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          title="Promote"
          isPressed={() => alert('Promote button clicked')}
        />
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
  textInput: {
    fontSize: 18,
    borderRadius: 10,
    height: 60,
    borderColor: 'lightgray',
    borderWidth: 2,
    paddingHorizontal: 10,
    width: '80%',
  },
  focusedTextInput: {
    borderColor: 'black', // Set border color when focused
  },
  pickerContainer: {
    fontSize: 18,
    borderRadius: 10,
    height: 60,
    borderColor: 'lightgray',
    borderWidth: 2,
  },
  buttonContainer: {
    marginTop: 'auto',
    marginHorizontal: 20,
    alignContent: 'center',
    justifyContent: 'center',
    width: 'auto',
    height: 50,
  },
  labelText: {
    fontSize: 20,
    justifyContent: 'center',
    color: 'black',
    textAlign: 'left',
  },
  plusButton: {
    borderWidth: 2,
    borderRadius: 5,
    width: 80,
    height: 80,
    marginLeft: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  }
});