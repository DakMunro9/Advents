import { StyleSheet, Dimensions } from "react-native";

const size = Dimensions.get('window').width * .2
const margin = 12
const borderWidth= 7


export const vendorStyles = StyleSheet.create({
    unselected: {
        height: size,
        width: size,
        borderRadius: size/2,
        margin: margin
    },
    selected: {
        height: size,
        width: size,
        borderRadius: size/2,
        margin: margin,
        borderWidth: borderWidth,
        borderColor: '#0062cc'
    },
    list: {
        alignItems: 'center',
        marginVertical: 5
    }
})