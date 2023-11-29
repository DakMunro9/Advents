import { View, Text, Image } from 'react-native'
import { serviceStyles, textStyles } from '../../utils/export/style-exports'
import { TEST_IMAGES } from '../../utils/export/test-images-exports'

//TODO: Image is hardcoded. this will need to be changed down the road

export default function Header(){

    return (
        <View style={serviceStyles.header}>
            <HeaderImage />
            <HeaderText />
        </View>
    )
}


function HeaderImage(){
    return (
        <Image style={serviceStyles.image} source={TEST_IMAGES.LOREM1} />
    )
}

function HeaderText(){
    return (
        <View style={serviceStyles.headerText}>
            <_HeaderTextTop />
            <_HeaderTextBottom />
        </View>
    )
}

function _HeaderTextTop(){
    return (
        <View style={serviceStyles.headerTextTop}>
            <Text style={textStyles.sectionHeader}>Lorem Ipsum</Text>  
        </View>
    )
}

function _HeaderTextBottom(){
    return (
        <View style={serviceStyles.headerTextBottom}>
            <View style={{flexDirection: 'row'}}>
                <View style={serviceStyles.headerTextBottomHalfLeft}>
                    <Text style={textStyles.sectionTextGray}>Service Fee</Text>
                </View>
                <View style={serviceStyles.headerTextBottomHalfRight}>
                    <Text style={textStyles.sectionHeader}>20 USD</Text>
                </View>
            </View>
        </View>
    )
}