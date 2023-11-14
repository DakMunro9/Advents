import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('window').height

export const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 50,
    marginBottom: 15 
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
