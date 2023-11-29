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
            <Stack.Screen name="welcome" options={{
                title: ''
            }} />
            <Stack.Screen name="signin" options={{
                title: ''
            }} />
            <Stack.Screen name="forgotpassword" options={{
                title: ''
            }} />
            <Stack.Screen name="createaccount" options={{
                title: ''
            }} />
            <Stack.Screen name="connectsocial" options={{
                title: ''
            }} />
            <Stack.Screen name="subscribe" options={{
                title: ''
            }} />
            <Stack.Screen name="decor" options={{
                title: 'Decor'
            }} />
            <Stack.Screen name="day" options={{
                title: 'Select a Date'
            }} />
            <Stack.Screen name="promote" options={{
                title: 'List Your Services'
            }} />
            <Stack.Screen name="location" options={{
                title: 'Location'
            }} />

    </Stack>
    )
}