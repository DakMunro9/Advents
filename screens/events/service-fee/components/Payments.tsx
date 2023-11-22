import { View, Text} from 'react-native'
import { serviceStyles, textStyles } from '../../../../utils/export/style-exports'
import SecondaryButton from '../../../../components/common/SecondaryButton'
import { SecondaryButtonTypes } from '../../../../utils/advent-types'


export default function Payments(){

    return (
        <View style={serviceStyles.payments}>
            <View style={serviceStyles.paymentsHeader}>
                <Text style={textStyles.sectionHeader}>Payment Methods</Text>
                <SecondaryButton title={SecondaryButtonTypes.add} isPressed={() => console.log("#TODO: link this to another screen")}/>
            </View>
            
        </View>
    )
}