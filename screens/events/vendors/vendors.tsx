import { View, Text, FlatList } from "react-native";
import Badge from "./components/badge";
import { TEST_IMAGES } from '../../../utils/export/test-images-exports'
import { blockStyles, textStyles, vendorStyles } from '../../../utils/export/style-exports'
import IconBlock from '../../../components/common/IconBlock'
import { IconBlockTypes, PrimaryButtonTypes } from "../../../utils/advent-types";
import PrimaryButton from "../../../components/common/PrimaryButton";




interface VendorListProps {
    selectedName(name:string): void
}

const sampleData = [
    {
        key: 1,
        image: TEST_IMAGES.LOREM1,
        name: "Company A"
    },
    {
        key: 2,
        image: TEST_IMAGES.LOREM2,
        name: "Company B"
    },
    {
        key: 3,
        image: TEST_IMAGES.LOREM3,
        name: "Company C"
    },
    {
        key: 4,
        image: TEST_IMAGES.LOREM4,
        name: "Company D"
    },
    {
        key: 5,
        image: TEST_IMAGES.LOREM5,
        name: "Company E"
    },
    {
        key: 6,
        image: TEST_IMAGES.LOREM6,
        name: "Company F"
    },

]


export default function Vendors(){
    let selectedVendors: Array<string> = []

    function handleSelection(name: string){
        if(selectedVendors.includes(name)){
            selectedVendors = selectedVendors.filter((currentName) => name !== currentName)
        }
        else{
            selectedVendors.push(name)
        }
        console.log(selectedVendors)
    }

    return (
        <>
            <View style={blockStyles.block}>
                <View style={blockStyles.innerBlock}>
                    <Header />
                    <VendorList selectedName={(name) => handleSelection(name)}/>
                    <IconBlock icon={IconBlockTypes.info} text="These vendors appear based on the information you entered for your event" />    
                </View>
            </View>
            <PrimaryButton title={PrimaryButtonTypes.continue} isPressed={() => console.log("#TODO: link this to another screen")}/>
        </>
        
        
    )
}

function Header(){

    return ( 
        <View>
            <Text style={textStyles.regularText}>Select All Desired Vendors</Text>
        </View>
    )
}

function VendorList(props: VendorListProps){

    return (
        <View style={{height: 325}}>
            <FlatList
                numColumns={3}
                data={sampleData}
                renderItem={({ item }) => (
                    <Badge selectedName={(name: string) => props.selectedName(name)}{...item}/>
                )}
                />
        </View>
    )

}