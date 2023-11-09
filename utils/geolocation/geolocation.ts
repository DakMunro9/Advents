import * as Location from 'expo-location'
import { useState, useEffect } from 'react'
import { Text, Alert } from 'react-native'
import { AsyncWrite } from '../async-storage/async-methods'
import { AsyncKeys } from '../advent-types'

export default function useGeolocation(){

    useEffect(() => {
        const getPermission = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if(status === Location.PermissionStatus.DENIED || status === Location.PermissionStatus.UNDETERMINED){ 
              return
            }
            let currentLocation = await Location.getCurrentPositionAsync({})
            await AsyncWrite(AsyncKeys.lat, currentLocation.coords.latitude)
            await AsyncWrite(AsyncKeys.lon, currentLocation.coords.longitude)
        }
        getPermission()
    }, [])
    
}

