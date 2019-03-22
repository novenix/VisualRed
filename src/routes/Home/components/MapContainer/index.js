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
    predictions,
    getSelectedAddress,
    selectedAddress
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
                selectedAddress={selectedAddress}
            />
            {/* <SearchResults/> */}
            
            {
                (resultTypes.pickUp || resultTypes.dropOff) &&
                <SearchResults predictions={predictions} getSelectedAddress={getSelectedAddress}/>
                
            }
            

        </View>
    )
}
export default MapContainer;