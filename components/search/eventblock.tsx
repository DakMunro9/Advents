import { View, Text, Image } from 'react-native'
import { blockStyles } from '../../utils/styles/BlockStyles'
import { searchStyles } from '../../utils/styles/SearchStyles'
import { textStyles } from '../../utils/styles/TextStyles'
import StaticChip from '../common/Chip'
import { SearchButtonTypes, StaticChipTypes } from '../../utils/advent-types'
import MiniBadge from './MiniBadge'
import { TEST_IMAGES } from '../../utils/export/test-images-exports'
import SearchButton from './SearchButton'

interface EventBlockProps {
    image: any
    title: string,
    subtitle: string
    date: string,
    location: string
    tickets: number
}


export default function EventBlock(props: EventBlockProps){

    return (
        <View style={blockStyles.block}>
            <View style={[blockStyles.innerBlock, {flexDirection: 'row'}]}>
                <View style={searchStyles.leftBlock}>
                    <CoverImage image={props.image}/>
                </View>
                <View style={searchStyles.rightBlock}>
                    <Titles title={props.title} subtitle={props.subtitle}/>
                    <Chips date={props.date} location={props.location}/>
                    <Attendees tickets={props.tickets}/>
                    <SearchButton text={SearchButtonTypes.details}/>
                </View>
            </View>    
        </View>
    )
}


function CoverImage({ image }){

    return (
        <Image style={searchStyles.coverPhoto} source={image} />
    )
}

function Titles({ title, subtitle }){

    return (
        <View>
            <Text style={textStyles.sectionHeader}>{title}</Text>
            <Text style={textStyles.subtitle}>{subtitle}</Text>      
        </View>
    )
}

function Chips({ date, location }){

    return (
        <View style={searchStyles.rowContainer}>
            <StaticChip icon={StaticChipTypes.calendar} text={date} width={100}/>
            <StaticChip icon={StaticChipTypes.map_marker} text={location} width={140}/>
        </View>
    )
}

function Attendees({ tickets }){
    const tickets_str = tickets.toString()

    return (
        <View style={searchStyles.attendees}>
            <View style={{flexDirection: 'row'}}>
                <MiniBadge image={TEST_IMAGES.LOREM2}/>
                <MiniBadge image={TEST_IMAGES.LOREM3}/>
                <MiniBadge image={TEST_IMAGES.LOREM4}/>
            </View>
            <Text style={textStyles.sectionTextGray}> {tickets_str} tickets sold!</Text>
        </View>
    )
}

function Button(){

    return (
        <></>
    )
}