import { View, Text, Image } from 'react-native'
import { baseStyles } from '../../utils/styles/BaseStyles'
import { compactStyles } from '../../utils/styles/SearchStyles'
import { textStyles } from '../../utils/styles/TextStyles'
import StaticChip from '../common/Chip'
import { SearchButtonTypes, StaticChipTypes } from '../../utils/advent-types'
import SearchButton from './SearchButton'


interface EventBlockProps {
    image: any
    title: string
    starttime: string
    endtime: string
    location: string
}

export default function CompactEventBlock(props: EventBlockProps){

    return (
        <View style={baseStyles.outerView}>
            <View style={baseStyles.innerView}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 2.5, flexDirection: 'row'}}>
                        <Image style={compactStyles.image} source={props.image} />
                        <Info {...props}/>
                    </View>
                    
                    <View style={{flex: 1}}>
                        <SearchButton text={SearchButtonTypes.join}/>
                    </View>
                </View>
            </View>
        </View>
    )
}


function Info(props: EventBlockProps){
    return (
        <View style={compactStyles.infoContainer}>
            <Text style={textStyles.sectionHeader}>{props.title}</Text>
            <Text style={textStyles.sectionTextGray}>{props.starttime} to {props.endtime}</Text>
            <StaticChip icon={StaticChipTypes.map_marker} text={props.location}/>
        </View>
    )
}