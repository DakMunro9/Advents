import { StyleSheet } from "react-native";

const miniBadgeSize = 20

export const searchStyles = StyleSheet.create({
    button: {
        width: '100%',
        borderWidth: 2,
        borderColor: 'black',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    miniBadge: {
        borderWidth: 1,
        borderColor: 'white',
        width: miniBadgeSize,
        height: miniBadgeSize,
        borderRadius: miniBadgeSize/2
    },
    leftBlock: {
        flex: 1.25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightBlock: {
        flex: 2,
        marginLeft: 10,
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    coverPhoto: {
        height: 225,
        width: '95%',
        borderRadius: 5,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    attendees: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
})

export const compactStyles = StyleSheet.create({
    image: {
        height: 75,
        width: 75
    },
    infoContainer: {
        alignItems: 'flex-start',
        marginLeft: 10
    }
})