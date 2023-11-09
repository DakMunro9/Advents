import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native"
import MapView from "react-native-maps"
import { containerStyles } from "../../../utils/styles/components"


export default function Location(){


    return (
        <>
            <View style={containerStyles.whiteContainer}>
                <Text>State</Text>
                <TextInput style={styles.input}/>
                <Text>City</Text>
                <TextInput style={styles.input}/>
                <Text>Zip Code</Text>
                <TextInput style={styles.input}/>
            </View>
            <View style={containerStyles.whiteContainer}>
                <MapView style={{height: Dimensions.get('window').height * .33}}/>

            </View>
        </>
        
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginTop: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderRadius: 7
    }
})

