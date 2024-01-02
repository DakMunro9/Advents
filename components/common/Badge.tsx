import { BadgeShapeTypes } from "../../utils/advent-types";
import { useState } from "react";
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { textStyles } from "../../utils/styles/TextStyles";
import { badgeStyles } from "../../utils/styles/BadgeStyles";
import { vendorStyles } from "../../utils/styles/vendors-styles";



interface BadgeProps {
    image: any
    shape: BadgeShapeTypes
    identifier: any
    dynamic: boolean
    isSelected(id: string): void
    displayIdentifier?: boolean
}


export default function Badge(props: BadgeProps){
    const [isBadgeSelected, setIsBadgeSelected] = useState<boolean>(false)

    function handleClick(){
        setIsBadgeSelected(prevState => !prevState)
        props.isSelected(props.identifier)
    }

    return ( 
        <View style={badgeStyles.container}>
            <>
            {props.shape === BadgeShapeTypes.circular_large ? 
            <>
                <TouchableOpacity onPress={() => handleClick()} >
                    <Image source={props.image} resizeMode="cover" style={isBadgeSelected === false ? badgeStyles.unselected : badgeStyles.selected}/>
                </TouchableOpacity>
                {props.displayIdentifier === true ? 
                    <Text style={textStyles.regularText}>{props.identifier}</Text>    
                    :
                    <></>
                }
            </>
            :
            props.shape === BadgeShapeTypes.circular_regular ?
            <></>
            :
            <></>
            }
            
            
            </>
            
            
        </View>
        

    )
}