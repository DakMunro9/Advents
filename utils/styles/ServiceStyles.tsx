import { StyleSheet } from "react-native";

export const serviceStyles = StyleSheet.create({
    header: {
        flex: 3.66,
        flexDirection: 'row',
    },
    headerText: {
        flexDirection: 'column',
        marginLeft: 16,
        flex: 1,
    },
    headerTextTop: {
        marginTop: 11.5,
        flex: 1,
    },
    headerTextBottom: {
        flex: 1,
        marginBottom: 11.5,
        justifyContent: 'flex-end',
    },
    headerTextBottomHalfLeft:{
        flex: 1
    },
    headerTextBottomHalfRight:{
        flex: 1,
        alignItems: 'flex-end'
    },
    image: {
        height: '100%',
        width: '40%',
        borderRadius: 12
    },
    payments: {
        flex: 6,
        marginTop: 40
    },
    paymentsHeader: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    }
})