import { View, Text } from 'react-native'
import { StaticChipTypes } from '../../utils/advent-types'
import { staticChipStyles } from '../../utils/styles/StaticChipStyles'
import { textStyles } from '../../utils/styles/TextStyles'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

interface StaticChipProps {
    icon: StaticChipTypes,
    text: string,
    width: number
}

export default function StaticChip(props: StaticChipProps){

    return (
        <View style={[staticChipStyles.container, {width: props.width}]}>
            <>
            {
                props.icon === StaticChipTypes.calendar ?
                <AntDesign name="calendar" size={24} color="black" />
                :
                <Feather name="map-pin" size={24} color="black" />
            }
            </>
            <View style={staticChipStyles.text}>
                <Text style={textStyles.regularText}>{props.text}</Text>
            </View>
            
        </View>
    )
}