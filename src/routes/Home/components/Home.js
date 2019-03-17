import React from 'react';
import {View,Text} from 'react-native'
import {Container} from 'native-base'
import MapContainer from './MapContainer/index'



class Home extends React.Component{
    
    componentDidMount(){
        this.props.getCurrentLocation();
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
            <Container  >
                {console.log(this.props)}
                {console.log(this.props.region)}
                {console.log("xcc")}
                {/* {this.props.region.latitude?<MapContainer region={this.props.region} />:<MapContainer region={region}/>
                }    */}
                {this.props.region.latitude&&
                    <MapContainer 
                        region={this.props.region} 
                        getInputData={this.props.getInputData}
                        toggleSearchResultModal={this.props.toggleSearchResultModal}
                        getAddressPredictions={this.props.getAddressPredictions}
                        resultTypes={this.props.resultTypes}
                        predictions={this.props.predictions}
                        // asd
                    />
                }
                

            </Container>
        )
       
    }
    
}
export default Home;
