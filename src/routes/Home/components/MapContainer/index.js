import React from 'react';
import {View} from 'native-base'
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps'
import styles from './mapContainerStyles'
import SearchBox from '../SearchBox/index'

import SearchResults from '../SearchResults/index'

const MapContainer=({
    region,
    getInputData,
    toggleSearchResultModal,
    getAddressPredictions,
    resultTypes,
    predictions
})=>{


    return(
        <View style={styles.container} >
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={region}
                // ref={ref => { this.mapView= ref; }}
            >
                <MapView.Marker 
                    coordinate={region}
                    pinColor="green"
                />
            </MapView>
            <SearchBox
                getInputData={getInputData} 
                toggleSearchResultModal={toggleSearchResultModal}
                getAddressPredictions={getAddressPredictions} 
            />
            {/* <SearchResults/> */}
            
            {
                (resultTypes.pickUp || resultTypes.dropOff) &&
                <SearchResults predictions={predictions} />
                
            }
            

        </View>
    )
}
export default MapContainer;