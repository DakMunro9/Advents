import { ScrollView } from "react-native-gesture-handler"
import EventBlock from "../components/search/EventBlock"
import MiniBadge from "../components/search/MiniBadge"
import SearchButton from "../components/search/SearchButton"
import { SearchButtonTypes } from "../utils/advent-types"
import { TEST_IMAGES } from "../utils/export/test-images-exports"
import TextField from "../components/common/TextField"
import { View, Text } from "react-native"
import { baseStyles } from "../utils/styles/BaseStyles"
import { textStyles } from "../utils/styles/TextStyles"
import SecondaryButton from "../components/common/SecondaryButton"
import CompactEventBlock from "../components/search/CompactEventBlock"
import { blockStyles } from "../utils/styles/BlockStyles"



export default function Search(){

    return (
        <View style={baseStyles.outerView}>
            <View style={baseStyles.innerView}>
                <View style={blockStyles.block}>
                    <View style={blockStyles.innerBlock}>
                        <TextField defaultText="Search for events..." currentText={(text) => console.log(text)}/>
                        <SectionHeader isPressed={() => console.log('clicked')}/>
                    </View>
                    
                </View>
                <ScrollView>
                    <CompactEventBlock 
                    image={TEST_IMAGES.LOREM5}
                    title="Event 1"
                    starttime="9:00AM"
                    endtime="5:00PM"
                    location="Montréal, QC"
                    />
                    <EventBlock 
                    image={TEST_IMAGES.LOREM1}
                    title="Sample Title"
                    subtitle="Sample subtitle"
                    date="07/23/22"
                    location="Phila, PA"
                    tickets={500}
                    />
                    <EventBlock 
                    image={TEST_IMAGES.LOREM5}
                    title="Sample Title"
                    subtitle="Sample subtitle"
                    date="07/23/22"
                    location="Phila, PA"
                    tickets={9000}
                    />
                </ScrollView>

            </View>
            
        </View>
        
    )
}


function SectionHeader({ isPressed }){

    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5}}>
            <Text style={textStyles.sectionHeader}>Events for you</Text>
            <SecondaryButton title="Show More" isPressed={() => isPressed()}/>
        </View>
    )
}