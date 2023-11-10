import { View, Text, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

interface InfoProps {
    text: string
}

export default function InformationBlock(props: InfoProps){


    return (
        <View style={{flexDirection: 'row', flex: 1}}>
            <Ionicons style={{width: 25}}name="ios-information-circle-outline" size={24} color="black" />
            <Text style={{width: 350}}>{props.text}</Text>
        </View>
    )
}