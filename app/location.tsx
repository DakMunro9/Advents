import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native"
import MapView, { Marker } from "react-native-maps"
import { blockStyles } from "../utils/styles/BlockStyles"
import TextField from "../components/common/TextField"
import { useEffect, useReducer, useState } from "react"
import { PrimaryButtonTypes } from "../utils/advent-types"
import PrimaryButton from "../components/common/PrimaryButton"
import { textStyles } from "../utils/styles/TextStyles"
import SecondaryButton from "../components/common/SecondaryButton"
import { StatusBar } from "expo-status-bar"
import Geocode from "../utils/geolocation/geocode"
import { baseStyles } from "../utils/styles/BaseStyles"
import LoadingScreen from "../components/common/Loading"
import * as ExpoLocation from 'expo-location'

interface LocationChildProps {
    state: LocationStates
    dispatch(action: object): any
}

enum Actions {
    geographic_state,
    city,
    zip,
    display,
    coords
}

interface DispatchActions {
    type: Actions
    payload: string | number | Array<number> | null 
}

interface LocationStates {
    geographic_state: string | null,
    city: string | null,
    zip: number | null,
    latitude: number | null,
    longitude: number | null,
    pending: boolean
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
            return {...state, pending: true}
        case Actions.coords:
            return {...state, latitude: action.payload[0], longitude: action.payload[1], pending: false}
        default:
            console.error('Invalid input')
    }
}

function _constructAddress(state: LocationStates){
    let address = ""
    if(state.geographic_state !== null && state.geographic_state !== undefined){
        address += state.geographic_state
        address += " "
    }
    if(state.city !== null && state.city !== undefined){
        address += state.city
        address += " "
    }
    if(state.zip !== null && state.zip !== undefined){
        address += state.zip
    }
    return address
}


export default function Location(){
    
    const initialState: LocationStates = { 
        geographic_state: null, 
        city: null, 
        zip: null,
        latitude: 29.959270,
        longitude: -90.071290,
        pending: false
        }
    const [state, dispatch] = useReducer(reducer, initialState)
    
    useEffect(() => {
        
            if(state.pending === true){
                let address = _constructAddress(state)    
                ExpoLocation.geocodeAsync(address)
                    .then(res => dispatch({type: Actions.coords, payload: [res[0].latitude, res[0].longitude]}))
                    .catch(e => dispatch({type: Actions.coords, payload: [state.latitude, state.longitude]}))
                    
                
                
                
                
                
                
                
            }
        
        
    }, [state.pending])
    
    //
    console.log('main function')
    console.log(state)
    //
    return (
        <View style={baseStyles.innerView}>
            <SearchBar />
            <AddressInputBlock state={state} dispatch={dispatch} />
            <>
            {state.pending === true ?
            <LoadingScreen />
            :
            <MapBlock state={state} dispatch={dispatch} />
            }
            </>
            
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
                <SecondaryButton title='Check Location On Map' isPressed={() => props.dispatch({type: Actions.display, payload: null})} />
            </View>
        </View>
    )
}

function MapBlock(props: LocationChildProps){
    return (
        <View style={blockStyles.block}>
            <View style={blockStyles.innerBlock}>
            <MapView 
            style={{height: Dimensions.get('window').height * .3}}
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

