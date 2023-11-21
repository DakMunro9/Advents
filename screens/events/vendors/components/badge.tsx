import { Pressable, Image, Text, View } from "react-native";
import { vendorStyles } from "../../../../utils/styles/vendors-styles";
import { useState } from "react";
import { textStyles } from "../../../../utils/styles/TextStyles";

interface BadgeProps {
    image: any,
    name: string
    selectedName(): string
}

export default function Badge(props: BadgeProps){
    const [isSelected, setIsSelected] = useState<boolean>(false)

    return ( 
        <View style={{alignItems: 'center'}}>
            <Pressable onPress={() => setIsSelected(prevState => !prevState)} >
                <Image source={props.image} style={isSelected === false ? vendorStyles.unselected : vendorStyles.selected}/>
            </Pressable>
            <Text style={textStyles.regularText}>{props.name}</Text>
        </View>
        

    )
}