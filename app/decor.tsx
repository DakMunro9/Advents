import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Image, ImageBackground } from 'react-native';
import PrimaryButton from '../components/common/PrimaryButton';
import IconBlock from '../components/common/IconBlock';
import { IconBlockTypes, PrimaryButtonTypes } from '../utils/advent-types';
import { TEST_IMAGES } from '../utils/export/test-images-exports'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

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
    { id: 1, label: 'Item 1', image: TEST_IMAGES.LOREM1 },
    { id: 2, label: 'Item 2', image: TEST_IMAGES.LOREM2 },
    { id: 3, label: 'Item 3', image: TEST_IMAGES.LOREM3 },
    { id: 4, label: 'Item 4', image: TEST_IMAGES.LOREM4 },
    { id: 5, label: 'Item 5', image: TEST_IMAGES.LOREM5 },
    { id: 6, label: 'Item 6', image: TEST_IMAGES.LOREM6 },
    { id: 7, label: 'Item 7', image: TEST_IMAGES.LOREM7 },
    { id: 8, label: 'Item 8', image: TEST_IMAGES.LOREM1 },
    { id: 9, label: 'Item 9', image: TEST_IMAGES.LOREM2 },
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

            <ImageBackground
              source={item.image}
              style={styles.image}
              resizeMode="cover"
              imageStyle={styles.imageStyle}
            >
              <View style={{ position: 'absolute', right: 3, top: 3 }}>

                {/* If grid item is selected, display icon */}
                {selectedItems.includes(item.id) ? (
                  <View style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'white', width: 28, height: 28, borderRadius: 100 }}>
                    <View style={{ marginLeft: 3 }}>
                      <IconFontAwesome name="check-circle" size={25} color="black" />
                    </View>
                  </View>
                ) : (
                  <View></View>
                )}

              </View>

            </ImageBackground>

          </TouchableOpacity>
        ))}

        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <ExplainerText />
        </View>

      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          title="Continue"
          isPressed={() => alert('Continue button clicked')}
        />
      </View>

    </View>
  );
};

function ExplainerText() {
  return (
    <IconBlock icon={IconBlockTypes.info} text='These photos and videos appear based on the information entered for your event.' />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // This places the button at the bottom
    padding: 20,
  },
  textContainer: {
    flexDirection: 'row',
    padding: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
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
    flex: 1,
    justifyContent: 'center',
  },
  gridItem: {
    width: 130,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    borderColor: 'white',
  },
  selectedItem: {
    borderColor: 'black',
  },
  buttonContainer: {
    marginBottom: 10,
    marginRight: 30,
    marginLeft: 30,
    height: 50,
  },
  customButton: {
    height: 50,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 5,
    overflow: 'hidden', // this is important for clipping
  },
});

export default SelectionGrid;
