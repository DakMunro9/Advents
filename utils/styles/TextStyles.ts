import { StyleSheet } from "react-native";
import { FontTypes } from "../advent-types";


export const IconBlockColor = '#999f9c'

export const textStyles = StyleSheet.create({
    title: {
        fontFamily: FontTypes.jakarta_regular,
        fontSize: 24,
        fontWeight: '600'
    },
    subtitle: {
        fontFamily: FontTypes.jakarta_regular,
        fontSize: 16,
        color: '#6f6f6f'
    },
    navHeader: {
        fontFamily: FontTypes.jakarta_regular,
        fontSize: 16,
        fontWeight: '700'
    },
    sectionHeader: {
        fontFamily: FontTypes.jakarta_semibold,
        fontSize: 18,
        fontWeight: '600'
    },
    sectionText: {
        fontFamily: FontTypes.jakarta_regular,
        fontSize: 12,
        fontWeight: '500'
    },
    sectionTextGray: {
        fontFamily: FontTypes.jakarta_regular,
        fontSize: 12,
        fontWeight: '500',
        color: '#707070'
    },
    primaryButtonText: {
        fontFamily: FontTypes.jakarta_semibold,
        fontSize: 16,
        color: '#FFFFFF'
    },
    secondaryButtonText: {
        fontFamily: FontTypes.jakarta_semibold,
        fontSize: 14,
    },
    regularText: {
        fontFamily: FontTypes.jakarta_regular,
        fontSize: 14
    },
    iconBlockText: {
        fontFamily: FontTypes.jakarta_regular,
        fontWeight: '400',
        color: IconBlockColor
    },
    textFieldDefaultText: {
        fontFamily: FontTypes.jakarta_regular,
        
    }
})

