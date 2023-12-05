import { View, Image } from "react-native"
import { searchStyles } from "../../utils/styles/SearchStyles"


interface MiniBadgeProps {
    image: any
}


export default function MiniBadge(props: MiniBadgeProps){

    return ( 
        
        <Image style={searchStyles.miniBadge} source={props.image}/>
        
    )
}