
import { Stack } from "expo-router";


export default function _layout(){
    return (
    <Stack
         screenOptions={{
            headerStyle: {
                backgroundColor: 'black'
            },
            headerTintColor: 'white'
         }}
         >
            <Stack.Screen name="index" options={{
                title: 'Home'
            }} />
            <Stack.Screen name="test" options={{
                title: 'Test'
            }} />


    </Stack>
    )
}