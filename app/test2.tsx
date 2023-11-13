import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
    const handleButtonPress = (buttonText: string) => {
        // Handle the button press event here
        console.log(`Button pressed: ${buttonText}`);
    };

    return (

        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleButtonPress("Button 1")}
                >
                    <Text style={styles.buttonText}>Button 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleButtonPress("Button 2")}
                >
                    <Text style={styles.buttonText}>Button 2</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.box}>
                    <Text>This is decor.js</Text>
                    <StatusBar style="auto" />

                    <Link href="/" asChild>
                        <Button title="BACK TO INDEX" />
                    </Link>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'blue', // Change the background color as needed
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white', // Change the text color as needed
        fontSize: 16,
    },

    
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    column: {
        flex: 1,
        backgroundColor: 'lightblue',
        padding: 10,
    },
    box: {
        //flex: 1,
        backgroundColor: 'lightgreen',
      },

});
