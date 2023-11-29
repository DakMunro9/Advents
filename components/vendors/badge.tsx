import { Pressable, Image, Text, View } from "react-native";
import { vendorStyles } from "../../utils/styles/vendors-styles";
import { useState } from "react";
import { textStyles } from "../../utils/styles/TextStyles";

interface BadgeProps {
    image: any,
    name: string
    selectedName(name: string): void
}

export default function Badge(props: BadgeProps){
    const [isSelected, setIsSelected] = useState<boolean>(false)

    function handleClick(){
        setIsSelected(prevState => !prevState)
        props.selectedName(props.name)
    }

    return ( 
        <View style={{alignItems: 'center'}}>
            <Pressable onPress={() => handleClick()} >
                <Image source={props.image} style={isSelected === false ? vendorStyles.unselected : vendorStyles.selected}/>
            </Pressable>
            <Text style={textStyles.regularText}>{props.name}</Text>
        </View>
        

    )
}