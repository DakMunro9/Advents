import { View, Text, FlatList } from "react-native";
import Badge from "./components/badge";
import { TEST_IMAGES } from '../../../utils/export/test-images-exports'
import InformationBlock from "../../../components/common/InformationBlock";


interface VendorProps {

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

const infoText = "These vendors appear based on the information you entered for your event"

export default function Vendors(props: VendorProps){



    return (
        <View>
            <View style={{alignItems: 'center'}}>
                <Text>Select All Desired Vendors</Text>
            </View>
            <FlatList
            numColumns={3}
            data={sampleData}
            renderItem={({ item }) => (
                <Badge {...item}/>
            )}
            />
            <InformationBlock text={infoText} />           
        </View>
    )
}