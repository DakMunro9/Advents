import { View, Text, Pressable } from 'react-native'
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { serviceStyles } from '../../../../utils/styles/ServiceStyles';
import { textStyles } from '../../../../utils/styles/TextStyles';


interface CardBlockProps {
    isPressed(): void
}

export default function CardBlock(props: CardBlockProps){

    return (
        <Pressable style={serviceStyles.cardBlock} onPressIn={() => props.isPressed()}>
            <View style={serviceStyles.cardBlockCard}>
                <AntDesign name="creditcard" size={24} color="black" />
            </View>
            <View style={serviceStyles.cardBlockText}>
                <Text style={textStyles.sectionHeader}>Example Credit Card</Text>
                <Text style={textStyles.sectionTextGray}>**** **** **** **** 1234</Text>
            </View>
            
            <View style={serviceStyles.cardBlockArrow}>
                <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
            </View>
            
        </Pressable>
        
    )
}