import * as Location from 'expo-location'
import { useState, useEffect } from 'react'
import { Text, Alert } from 'react-native'


enum AlertAction {
    GetPermission,
    PermissionRejected,
    PermissionAccepted
}


export default function useGeolocation(){
    const [location, setLocation] = useState<Location.LocationObject>()
    const [permissionStatus, setPermissionStatus] = useState<AlertAction>()

    useEffect(() => {
        console.log('use effect')
        const getPermission = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if(status === Location.PermissionStatus.DENIED || status === Location.PermissionStatus.UNDETERMINED){
              setPermissionStatus(AlertAction.PermissionRejected)
              return
            }
            else {
                setPermissionStatus(AlertAction.PermissionAccepted)
            }

            let location = await Location.getCurrentPositionAsync({})
            setLocation(location)
        }
        getPermission()
        if(permissionStatus === AlertAction.PermissionRejected){
            Alert.alert("Location Not Enabled", "You have opted to not enable location. If you change your mind please change this in your settings menu", [
                {
                    text: "OK"
                }
            ])
        }
    }, [permissionStatus])
    
}

