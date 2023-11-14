import React, { useState } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { TextFieldStyles, DefaultTextColor } from './TextFieldStyles'; 

interface TextFieldProps extends TextInputProps {
  defaultText?: string
  keyboard?: TextInputProps["inputMode"]
  currentText(text: any): void
}

const TextField: React.FC<TextFieldProps> = (props) => {
  const [text, setText] = useState<any>()


  function textHandler(text: any){
    setText(text)
    props.currentText(text)
  }
  return (
    <View style={TextFieldStyles.container}>
      <TextInput
        editable
        style={TextFieldStyles.input}
        placeholderTextColor={DefaultTextColor}
        placeholder={props.defaultText}
        onChangeText={(text) => textHandler(text)}
        value={text}
        inputMode={props.keyboard}
      />
    </View>
  );
};

export default TextField;