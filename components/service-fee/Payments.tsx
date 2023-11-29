import { View, Text, Switch} from 'react-native'
import { serviceStyles, textStyles } from '../../utils/export/style-exports'
import SecondaryButton from '../common/SecondaryButton'
import { SecondaryButtonTypes } from '../../utils/advent-types'
import CardBlock from './CardBlock'
import { useState } from 'react'

//TODO: Cardblocks are hard coded, this is just a mockup with no functionality

interface SplitPaymentProps {
    isClicked(): void
    value: boolean
}

export default function Payments(){
    const [switchToggle, setSwitchToggle] = useState<boolean>(false)

    return (
        <View style={serviceStyles.payments}>
            <Header />
            <SplitPayment value={switchToggle} isClicked={() => setSwitchToggle(prevState => !prevState)}/>
            <CardBlock isPressed={() => console.log('clicked')}/>
        </View>
        
    )
}

function Header(){

    return (
        
            <View style={serviceStyles.paymentsHeader}>
                <Text style={textStyles.sectionHeader}>Payment Methods</Text>
                <SecondaryButton title={SecondaryButtonTypes.add} isPressed={() => console.log("#TODO: link this to another screen")}/>
            </View>    
        
    )
}

function SplitPayment(props: SplitPaymentProps){
    return(
        <View style={serviceStyles.split}>
            <View style={serviceStyles.splitInnerContents}>
                <Text style={textStyles.regularText}>Split Payment</Text>
                <Switch 
                onValueChange={() => props.isClicked()}
                value={props.value}
                />
            </View> 
        </View>
    )

}