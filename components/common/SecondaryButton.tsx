import { TouchableOpacityProps, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { textStyles } from "../../utils/styles/TextStyles"
import { SecondaryButtonTypes } from "../../utils/advent-types"

interface ButtonProps extends TouchableOpacityProps {
    title: string | SecondaryButtonTypes
    isPressed(): void
}


export default function SecondaryButton(props: ButtonProps){

    return (
        <TouchableOpacity onPress={() => props.isPressed()}>
            <Text style={textStyles.secondaryButtonText}>{props.title}</Text>
        </TouchableOpacity>
    )
}