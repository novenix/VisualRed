// floating action buttons
import React from 'react';

import {Text} from 'react-native'
import {View,Button} from 'native-base'
import styles from './FabStyles'

export const Fab=({onPressAction})=>{
    return(
        <Button style={styles.fabContainer} onPress={onPressAction} >
            
                <Text style={styles.fabText} > pedir </Text>
            
        </Button>
    )
}
export default Fab;