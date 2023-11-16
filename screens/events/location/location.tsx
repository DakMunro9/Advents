import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native"
import MapView, { Marker } from "react-native-maps"
import { containerStyles } from "../../../utils/styles/BlockStyles"
import TextField from "../../../components/common/TextField"
import { useState } from "react"
import Buttonx from "../../../components/common/PrimaryButton"
import { ButtonXTitles } from "../../../utils/advent-types"

export default function Location(){
    const [state, setState] = useState<string>()
    const [city, setCity] = useState<string>()
    const [zip, setZip] = useState<number>()

    return (
        <>
            <View style={containerStyles.whiteContainer}>
                <Text>State</Text>
                <TextField style={{width:50}} defaultText="State" currentText={(text) => setState(text)} />
                <Text>City</Text>
                <TextField defaultText="City" currentText={(text) => setCity(text)} />
                <Text>Zip Code</Text>
                <TextField defaultText="e.g. 70112" currentText={(text) => setZip(text)} keyboard="numeric" />
            </View>
            <View style={containerStyles.whiteContainer}>
                <MapView 
                style={{height: Dimensions.get('window').height * .33}}
                initialRegion={{
                    latitude: 29.959270,
                    longitude: -90.071290,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}>
                    <Marker coordinate={{latitude: 29.959270, longitude: -90.071290}}/>
                </MapView>
                
                
            </View>
            
                <Buttonx title={ButtonXTitles.save} />
            
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

