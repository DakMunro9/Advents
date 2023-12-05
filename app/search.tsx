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



export default function Search(){

    return (
        <View style={baseStyles.outerView}>
            <View style={baseStyles.innerView}>
                <View style={{marginTop: 10}}>
                    <TextField defaultText="Search for events..." currentText={(text) => console.log(text)}/>
                </View>
                <SectionHeader isPressed={() => console.log('clicked')}/>
                <ScrollView>
                    <EventBlock 
                    image={TEST_IMAGES.LOREM1}
                    title="Sample Title"
                    subtitle="Sample subtitle"
                    date="07/23/22"
                    location="Philadelphia, PA"
                    tickets={500}
                    />
                    <EventBlock 
                    image={TEST_IMAGES.LOREM5}
                    title="Sample Title"
                    subtitle="Sample subtitle"
                    date="07/23/22"
                    location="Philadelphia, PA"
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