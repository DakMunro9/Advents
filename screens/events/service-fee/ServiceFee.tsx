import { View, Text } from "react-native"
import { serviceStyles, textStyles } from '../../../utils/export/style-exports'
import Header from "./components/Header"
import Payments from "./components/Payments"
import PrimaryButton from "../../../components/common/PrimaryButton"
import { PrimaryButtonTypes } from "../../../utils/advent-types"



export default function ServiceFee(){


    return (
        <>
            <Header />
            <Payments />
            <PrimaryButton title={PrimaryButtonTypes.pay} isPressed={() => console.log("#TODO: link to other screens")} />
        </>
    )
}






