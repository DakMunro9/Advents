import { StyleSheet } from "react-native"

const size = 15

export const blockStyles = StyleSheet.create({
    block: {
        backgroundColor: '#FFFFFF',
        borderRadius: 7,
        paddingVertical: size,
        marginVertical: size,   
    },
    innerBlock: {
        marginHorizontal: 12,
        alignContent: 'flex-start',
    }
})