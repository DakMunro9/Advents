import { View, Text, TouchableOpacity } from "react-native"
import { SearchButtonTypes } from "../../utils/advent-types"
import { searchStyles } from "../../utils/styles/SearchStyles"
import { textStyles } from "../../utils/styles/TextStyles"

interface SearchButtonProps {
    text: SearchButtonTypes | string
}

export default function SearchButton(props: SearchButtonProps){

    return (
        <TouchableOpacity style={searchStyles.button}>
            <Text style={[textStyles.primaryButtonText, {color: 'black'}]}>{props.text}</Text>
        </TouchableOpacity>
    )
}