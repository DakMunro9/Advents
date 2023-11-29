import { StyleSheet, Dimensions, Platform } from 'react-native';

const height = Dimensions.get('window').height

export const buttonStyles = StyleSheet.create({
  primaryButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  primaryButtonContainer: {
    position: 'absolute',
    bottom: 15,
    left: 0,
    right: 0
  },
  secondaryButton: {
    
  }
});
