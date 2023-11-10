import { View, Text, FlatList } from "react-native";
import Badge from "./components/badge";
import 


interface VendorProps {

}

const sampleData = [
    {
        key: 1,
        image: require('../../../assets/test-images/lorem-ipsum-1.jpg'),
        name: "Company A"
    }
]


export default function Vendors(props: VendorProps){



    return (
        <View>
            <View>
                <Text>Select All Desired Vendors</Text>
            </View>
            <FlatList


            />
        </View>
    )
}