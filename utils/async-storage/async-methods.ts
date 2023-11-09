import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncKeys } from '../advent-types';


async function AsyncWrite(key: AsyncKeys, value: any){
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
        console.error("AsyncWrite Error: " + e)
    }
}

async function AsyncRead(key: AsyncKeys){
    try {
        const value = await AsyncStorage.getItem(key)
        if(value !== null){
            return value
        }
        else {
            return null
        }
    } catch (e) {
        console.error("AsyncRead Error: " + e)
    }
}


export { AsyncWrite, AsyncRead }