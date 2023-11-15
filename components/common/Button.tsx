import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { buttonStyles } from '../../utils/styles/ButtonStyles';
import { PrimaryButtonTitles } from '../../utils/advent-types';
import { textStyles } from '../../utils/styles/TextStyles';

interface ButtonProps extends TouchableOpacityProps {
  title: string | PrimaryButtonTitles;
  isPressed(): void 
}



const PrimaryButton: React.FC<ButtonProps> = ({ title, style, ...props }) => {
    return (
      <View style={buttonStyles.buttonContainer}>
        <TouchableOpacity style={[buttonStyles.button, style]} {...props} onPress={() => props.isPressed()}>
          <Text style={textStyles.primaryButtonText}>{title}</Text>
        </TouchableOpacity>
      </View>
      
    );
  };

export default PrimaryButton;
