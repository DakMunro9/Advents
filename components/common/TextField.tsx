import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { TextFieldStyles } from './TextFieldStyles'; 

interface TextFieldProps extends TextInputProps {
}

const TextField: React.FC<TextFieldProps> = (props) => {
  return (
    <View style={TextFieldStyles.container}>
      <TextInput
        style={TextFieldStyles.input}
        placeholderTextColor="grey" 
        {...props} 
      />
    </View>
  );
};

export default TextField;