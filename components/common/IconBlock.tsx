import { View, Text } from 'react-native'
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { IconBlockTypes } from '../../utils/advent-types';
import { blockStyles } from '../../utils/styles/BlockStyles';
import { textStyles, IconBlockColor } from '../../utils/styles/TextStyles';

interface InfoProps {
    icon: IconBlockTypes
    text: string
}

export default function IconBlock(props: InfoProps){
    const iconSize = 21

    return (
        <View style={blockStyles.iconBlockContainer}>
            <View style={blockStyles.iconBlockIcon}>
                {props.icon === IconBlockTypes.info ? 
                <Ionicons name="ios-information-circle-outline" size={iconSize} color={IconBlockColor} />
                :
                props.icon === IconBlockTypes.map_marker ?
                <Feather name="map-pin" size={iconSize} color={IconBlockColor} />
                :
                <MaterialCommunityIcons name="clock-outline" size={iconSize} color={IconBlockColor} />
                }
            </View>
            <View style={blockStyles.iconBlockText}>
                <Text style={textStyles.iconBlockText}>{props.text}</Text>
            </View>
        </View>
    )
}