import * as Location from 'expo-location'



export default async function Geocode(address: string){
    console.log('geocode method')
    console.log(address)
    let coords = await Location.geocodeAsync(address)
    
    console.log(coords)
    return coords
    
}