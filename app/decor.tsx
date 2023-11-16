import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SelectionGrid = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  // Function to handle item selection
  const handleItemSelection = (item: number) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  // Data for the grid items
  const gridData = [
    { id: 1, label: 'Item 1' },
    { id: 2, label: 'Item 2' },
    { id: 3, label: 'Item 3' },
    { id: 4, label: 'Item 4' },
    { id: 5, label: 'Item 5' },
    { id: 6, label: 'Item 6' },
    { id: 7, label: 'Item 7' },
    { id: 8, label: 'Item 8' },
    { id: 9, label: 'Item 9' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}> Select all desired event decor: </Text>
      </View>

      <View style={styles.gridContainer}>
        {gridData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.gridItem, selectedItems.includes(item.id) && styles.selectedItem]}
            onPress={() => handleItemSelection(item.id)}
          >

            <Text>{item.label}</Text>

          </TouchableOpacity>
        ))}

        <View style={styles.textContainer}>
        <Icon name="info" size={30} color="gray" />
          <Text style={styles.infoText}>These photos and videos appear based on the information entered for your event.</Text>
        </View>

      </View>

      <View style={styles.buttonContainer}>
          <Button 
            title="Continue"
            color={"black"}
            onPress={() => alert('Continue button clicked')}
          />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // This places the button at the bottom
    padding: 20, // Adjust as needed for spacing
  },
  textContainer: {
    flexDirection: 'row',
    padding: 16, // Adjust the padding as needed
    //backgroundColor: 'white', // Optional background color for the padding area
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    //color: 'gray',
  },
  infoText: {
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    color: 'gray',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1, // Takes up the available space
    justifyContent: 'center', // Center content vertically
  },
  gridItem: {
    //width: 100,
    width: '30%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  selectedItem: {
    backgroundColor: 'lightblue', // You can change the style for selected items
  },
  buttonContainer: {
    marginBottom: 10, // Adjust as needed for spacing
    marginRight: 30,
    marginLeft: 30,
    height: 50,
  },
  customButton: {
    height: 50, // Adjust the height as needed
  },
});

export default SelectionGrid;
