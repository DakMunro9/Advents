import { Pressable, Image, Text, View } from "react-native";
import { VendorStyles } from "../vendors-styles";
import { useState } from "react";

interface BadgeProps {
    image: any,
    name: string
}

export default function Badge(props: BadgeProps){
    const [isSelected, setIsSelected] = useState<boolean>(false)

    return ( 
        <View style={{alignItems: 'center'}}>
            <Pressable onPress={() => setIsSelected(prevState => !prevState)} >
                <Image source={props.image} style={isSelected === false ? VendorStyles.unselected : VendorStyles.selected}/>
            </Pressable>
            <Text>{props.name}</Text>
        </View>
        

    )
}