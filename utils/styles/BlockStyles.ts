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
    },
    iconBlockContainer: {
        flexDirection: 'row',
    },
    iconBlockIcon: {
        width: '6.66%'
    },
    iconBlockText: {
        flexShrink: 1,
        justifyContent: 'flex-start'
    }

})