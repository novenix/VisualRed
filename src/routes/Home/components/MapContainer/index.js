import React from 'react';
import {View} from 'native-base'
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps'
import styles from './mapContainerStyles'
import SearchBox from '../SearchBox/index'

import SearchResults from '../SearchResults/index'
import pickDrop from '../../../../assets/img/paceholde.png'

const MapContainer=({
    region,
    getInputData,
    toggleSearchResultModal,
    getAddressPredictions,
    resultTypes,
    predictions,
    getSelectedAddress,
    selectedAddress,
    nearbyAssistants,
    assistMarker
})=>{

    const {selectedPickUp,selectedDropOff}=selectedAddress||{}
    return(
        <View style={styles.container} >
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={region}
                showsUserLocation={true}
               
                // ref={ref => { this.mapView= ref; }}
            >
                {  
                    // console.log(selectedPickUp,'aaaaaaaaa')
                     selectedPickUp&&
                    <MapView.Marker 
                        coordinate={{latitude:selectedPickUp.location.latitude,longitude:selectedPickUp.location.longitude}}
                        // pinColor="green"
                        image={pickDrop}
                        // style={{max-width:125,max-height:100}}
                        // anchor={{x:0.1,y:0.1}}
                    />
                }
                {   selectedDropOff&&
                    <MapView.Marker 
                        coordinate={{latitude:selectedDropOff.location.latitude,longitude:selectedDropOff.location.longitude}}
                        // pinColor="green"
                        image={pickDrop}
                        // anchor={{x:0.5,y:0.5}}
                        // image={assistMarker}
                    />
                }
                {
                    
                    nearbyAssistants &&nearbyAssistants.map((marker,index)=>
                        // console.log(marker),
                        <MapView.Marker 
                            key={index}
                            coordinate={{latitude:marker.coordinate.coordinates[0],longitude:marker.coordinate.coordinates[1]}}
                            // coordinate={{latitude:4.598077,longitude:-74.076103}}
                            // coordinate={region}
                            image={assistMarker}
                            // pinColor={'blue'}
                        />
                        // console.log("si hace marker")
                    )
                }
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