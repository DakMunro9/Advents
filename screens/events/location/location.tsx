import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native"
import MapView, { Marker } from "react-native-maps"
import { blockStyles } from "../../../utils/styles/BlockStyles"
import TextField from "../../../components/common/TextField"
import { useReducer } from "react"
import { PrimaryButtonTypes } from "../../../utils/advent-types"
import PrimaryButton from "../../../components/common/PrimaryButton"
import { textStyles } from "../../../utils/styles/TextStyles"
import SecondaryButton from "../../../components/common/SecondaryButton"
import * as ExpoLocation from 'expo-location'
import Geocode from "../../../utils/geolocation/geocode"

interface LocationChildProps {
    state: LocationStates
    dispatch(action: object): any
}

enum Actions {
    geographic_state,
    city,
    zip,
    display
}

interface DispatchActions {
    type: Actions
    payload: string | number | null
}

interface LocationStates {
    geographic_state: string,
    city: string,
    zip: number,
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number
}


async function reducer(state: LocationStates, action: DispatchActions){
    switch(action.type){
        case Actions.geographic_state:
            return {...state, geographic_state: action.payload}
        case Actions.city:
            return {...state, city: action.payload}
        case Actions.zip:
            return {...state, zip: action.payload}
        case Actions.display:
            let address = _constructAddress(state)
            try {
                let coords = await Geocode(address)
                return {...state, latitude: coords[0].latitude, longitude: coords[0].longitude}
            } catch {
                return {...state}
            }
        default:
            console.error('Invalid input')
    }
}

function _constructAddress(state: LocationStates){
    console.log('state')
    console.log(state)
    return `${state.geographic_state} ${state.city} ${state.zip}`
}


export default function Location(){
    const [state, dispatch] = useReducer(reducer, { 
        geographic_state: "Louisiana", 
        city: "New Orleans", 
        zip: 70112,
        latitude: 29.959270,
        longitude: -90.071290,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421 });

    console.log(state)
    return (
        <>
            <SearchBar />
            <AddressInputBlock state={state} dispatch={dispatch} />
            <MapBlock state={state} dispatch={dispatch} />
            <PrimaryButton title={PrimaryButtonTypes.save} isPressed={() => {}}/>
        </>
        
    )
}

function SearchBar(){
    return (
        <View style={blockStyles.block}>
            <View style={blockStyles.innerBlock}>
                <TextField defaultText="Search" currentText={(text) => console.log(text)}/>
            </View>
        </View>
    )
}

function AddressInputBlock(props: LocationChildProps){

    return(
        <View style={blockStyles.block}>
            <View style={blockStyles.innerBlock}>
                <Text style={textStyles.secondaryButtonText}>State</Text>
                <TextField defaultText="e.g. Louisiana" currentText={(text) => props.dispatch({type: Actions.geographic_state, payload: text})} />
                <Text>City</Text>
                <TextField defaultText="e.g. New Orleans" currentText={(text) => props.dispatch({type: Actions.city, payload: text})} />
                <Text>Zip Code</Text>
                <TextField defaultText="e.g. 70112" currentText={(text) => props.dispatch({type: Actions.zip, payload: text})} keyboard="numeric" />
                <SecondaryButton title="See Location On Map" isPressed={() => props.dispatch({type: Actions.display, payload: null})} />
            </View>
        </View>
    )
}

function MapBlock(props: LocationChildProps){
    return (
        <View style={blockStyles.block}>
            <View style={blockStyles.innerBlock}>
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
        </View>
    )
}

