import { StyleSheet, Dimensions } from "react-native"

const marginSize = 10

export const containerStyles = StyleSheet.create({
    whiteContainer: {
        backgroundColor: '#FFFFFF',
        width: Dimensions.get('window').width * .9,
        borderRadius: 7,
        marginTop: marginSize,
        marginBottom: marginSize
    },
})