import { View, Text } from "react-native"
import { serviceStyles, textStyles } from '../utils/export/style-exports'
import Header from "../components/service-fee/Header"
import Payments from "../components/service-fee/Payments"
import PrimaryButton from "../components/common/PrimaryButton"
import { PrimaryButtonTypes } from "../utils/advent-types"
import { baseStyles } from "../utils/styles/BaseStyles"



export default function ServiceFee(){


    return (
        <View style={baseStyles.innerView}>
            <Header />
            <Payments />
            <PrimaryButton title={PrimaryButtonTypes.pay} isPressed={() => console.log("#TODO: link to other screens")} />
        </View>
    )
}






