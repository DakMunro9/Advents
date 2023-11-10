import { StyleSheet } from "react-native";

const size = 100
const margin = 12
const borderWidth= 7


export const VendorStyles = StyleSheet.create({
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
        borderColor: 'blue'
    }
})