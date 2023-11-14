import { Stack } from "expo-router";

export default function _layout(){
    return (
    <Stack
         screenOptions={{
            headerStyle: {
                //backgroundColor: 'black'
            },
            headerTintColor: 'black',
            headerTitleAlign: 'center',
         }}
         >
            <Stack.Screen name="index" options={{
                title: 'Home'
            }} />
            <Stack.Screen name="decor" options={{
                title: 'Decor'
            }} />
            <Stack.Screen name="day" options={{
                title: 'Select a Date'
            }} />

    </Stack>
    )
}