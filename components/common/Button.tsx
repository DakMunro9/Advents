import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { buttonStyles } from './ButtonStyles';
import { ButtonXTitles } from '../../utils/advent-types';

interface ButtonProps extends TouchableOpacityProps {
  title: string | ButtonXTitles; 
}

//may need to surrond in a fragment (<></>) for best results

const Buttonx: React.FC<ButtonProps> = ({ title, style, ...props }) => {
    return (
      <TouchableOpacity style={[buttonStyles.button, style]} {...props}>
        <Text style={buttonStyles.text}>{title}</Text>
      </TouchableOpacity>
    );
  };

export default Buttonx;
