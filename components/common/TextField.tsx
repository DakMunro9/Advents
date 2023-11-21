import React, { useState } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { TextFieldStyles, DefaultTextColor } from '../../utils/styles/TextFieldStyles'; 
import { textStyles } from '../../utils/styles/TextStyles';

interface TextFieldProps extends TextInputProps {
  currentText(text: any): void
  isMultiline?: boolean
  defaultText?: string
  keyboard?: TextInputProps["inputMode"]
}

const TextField: React.FC<TextFieldProps> = (props) => {
  const [text, setText] = useState<any>()
  

  function textHandler(text: any){
    setText(text)
    props.currentText(text)
    
  }

  return (
    <TextInput
      editable
      multiline={props.isMultiline === true ? true : false}
      style={props.isMultiline === true ? [TextFieldStyles.multiLineInput, textStyles.textFieldDefaultText] : [TextFieldStyles.singleLineInput, textStyles.textFieldDefaultText]}
      placeholderTextColor={DefaultTextColor}
      placeholder={props.defaultText}
      onChangeText={(text) => textHandler(text)}
      value={text}
      inputMode={props.keyboard}
    />
  );
};

export default TextField;