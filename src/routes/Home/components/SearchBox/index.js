import React from 'react';
import {Text} from 'react-native'
import {View,InputGroup,Input} from 'native-base'
import styles from './SearchBoxStyles'

import Icon from 'react-native-vector-icons/FontAwesome'
export const SearchBox=({getInputData,toggleSearchResultModal,getAddressPredictions,selectedAddress})=>{
// export const SearchBox=({getInputData,toggleSearchResultModal})=>{
        const {selectedPickUp,selectedDropOff }=selectedAddress||{};
        function handleInput(key,value){
            getInputData({
                key,
                value:value
            });
            getAddressPredictions();
        }
        return(
            <View style={styles.searchBox} >
                <View style={styles.inputWrapper} >
                    <Text style={styles.label} > Pedir </Text>
                    <InputGroup>
                        <Icon name="search" size={15} color="red"/>
                        <Input 
                            onFocus={()=>{toggleSearchResultModal("pickUp")}} 
                            style={styles.inputSearch} 
                            placeholder="Escoger salida"
                            onChangeText={handleInput.bind(this,"pickUp")}
                            value={selectedPickUp&& selectedPickUp.name} />
                    </InputGroup>
                </View>
                <View style={styles.secondInputWrapper} >
                    <Text style={styles.label} >  </Text>
                    <InputGroup>
                        <Icon name="search" size={15} color="red"/>
                        <Input 
                            onFocus={()=>{toggleSearchResultModal("dropOff")}}
                            style={styles.inputSearch} 
                            placeholder="Escoger destino" 
                            onChangeText={handleInput.bind(this,"dropOff")} 
                            value={selectedDropOff &&selectedDropOff.name}/>
                    </InputGroup>
                </View>
            </View>
        )
       
    }
export default SearchBox;
