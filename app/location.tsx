import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native"
import MapView, { Marker } from "react-native-maps"
import { blockStyles } from "../utils/styles/BlockStyles"
import TextField from "../components/common/TextField"
import { useReducer } from "react"
import { PrimaryButtonTypes } from "../utils/advent-types"
import PrimaryButton from "../components/common/PrimaryButton"
import { textStyles } from "../utils/styles/TextStyles"
import SecondaryButton from "../components/common/SecondaryButton"
import Geocode from "../utils/geolocation/geocode"
import { baseStyles } from "../utils/styles/BaseStyles"

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
    geographic_state: string | null,
    city: string | null,
    zip: number | null,
    latitude: number | null,
    longitude: number | null,
}


function reducer(state: LocationStates, action: DispatchActions){
    switch(action.type){
        case Actions.geographic_state:
            return {...state, geographic_state: action.payload}
        case Actions.city:
            return {...state, city: action.payload}
        case Actions.zip:
            return {...state, zip: action.payload}
        case Actions.display:
            let address = _constructAddress(state)
            let coords = new Promise ((resolve, reject) => {
                let coords: Array<any> = Geocode(address)
                resolve({...state, latitude: coords[0].latitude, longitude: coords[0].longitude})
                reject({...state})
            })
            return coords.then((res) => {
                return res
            })
            
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
    const initialState: LocationStates = { 
        geographic_state: null, 
        city: null, 
        zip: null,
        latitude: 29.959270,
        longitude: -90.071290,
        }
    const [state, dispatch] = useReducer(reducer, initialState)
    //
    console.log('main function')
    console.log(state)
    //
    return (
        <View style={baseStyles.innerView}>
            <SearchBar />
            <AddressInputBlock state={state} dispatch={dispatch} />
            <MapBlock state={state} dispatch={dispatch} />
            <PrimaryButton title={PrimaryButtonTypes.save} isPressed={() => {console.log('#TODO: link to another screen')}}/>
        </View>
        
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
            }}
            region={{
                latitude: props.state.latitude, 
                longitude: props.state.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}
            >
                <>
                {props.state.latitude !== null && props.state.longitude !== null ?
                    <Marker coordinate={{latitude: props.state.latitude, longitude: props.state.longitude}}/>
                    :
                    <></>
                }
                </>
            </MapView>
            </View>
        </View>
    )
}

