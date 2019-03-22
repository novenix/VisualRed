import React from 'react';
import {Text} from 'react-native'
import {View} from 'native-base'
import styles from './FareStyle'

export const Fare=({fare})=>{
    return(
        <View style={styles.fareContainer} >
            <Text>
                <Text style={styles.fareText} > TARIFA: </Text> <Text style={styles.amount} > {fare} </Text>
            </Text>
        </View>
    )
}
export default Fare;