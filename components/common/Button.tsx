import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { buttonStyles } from './ButtonStyles';

interface ButtonProps extends TouchableOpacityProps {
  title: string; 
}

const Buttonx: React.FC<ButtonProps> = ({ title, style, ...props }) => {
    return (
      <TouchableOpacity style={[buttonStyles.button, style]} {...props}>
        <Text style={buttonStyles.text}>{title}</Text>
      </TouchableOpacity>
    );
  };

export default Buttonx;
