import { StyleSheet, Dimensions } from "react-native"


const size = Dimensions.get('window').width * .2
const margin = 12
const borderWidth = 3

export const badgeStyles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
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
        borderColor: 'black'
    },
})