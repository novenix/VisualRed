import React from 'react';
import {View,Text} from 'react-native'
import {Container} from 'native-base'
import MapContainer from './MapContainer/index'
import HeaderComponent from '../../../components/HeaderComponent/index'
import TabBar from '../../../components/TabComponent/index'
import Fare from './Fare/index'
import Fab from './Fab/index'

const assistMarker=require('../../../assets/img/marker2.png')

class Home extends React.Component{
    
    componentDidMount(){
        const esto=this;
        this.props.getCurrentLocation();
        setTimeout(()=>{
            esto.props.getNearbyAssistants();
        },10000)
    }
    // componentDidUpdate(){
    //     this.props.getCurrentLocation();
    // }
    render(){
        
        const region={
            latitude:4.710989,
            longitude:-74.072090,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421,

        }
        return(
            // <View><Text>bai</Text></View>
            // <View>
            <Container  >
                {console.log(this.props)}
                {console.log(this.props.region)}
                {console.log("xcc")}
                {/* {this.props.region.latitude?<MapContainer region={this.props.region} />:<MapContainer region={region}/>
                }    */}
                <HeaderComponent />
                <TabBar/>
                {/* <Text>asd</Text> */}
                {this.props.region.latitude&&
                    <MapContainer 
                        region={this.props.region} 
                        getInputData={this.props.getInputData}
                        toggleSearchResultModal={this.props.toggleSearchResultModal}
                        getAddressPredictions={this.props.getAddressPredictions}
                        resultTypes={this.props.resultTypes}
                        predictions={this.props.predictions}
                        getSelectedAddress={this.props.getSelectedAddress}
                        selectedAddress={this.props.selectedAddress}
                        nearbyAssistants={this.props.nearbyAssistants}
                        assistMarker={assistMarker}
                        // asd
                    />
                }
                
                    <Fab onPressAction={()=>this.props.bookAssistant()} />
                
                {
                    this.props.fare&&
                    <Fare fare={this.props.fare} />
                }
                

            </Container>
            // </View>
        )
       
    }
    
}
export default Home;
