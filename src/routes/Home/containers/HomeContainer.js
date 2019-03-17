import {connect} from 'react-redux';
import Home from '../components/Home';
import {
    getCurrentLocation,
    getInputData,
    toggleSearchResultModal,
    getAddressPredictions
} from '../modules/home';

// function xd(map){
//     return map
// }
const mapStateToProps=(state)=>(
    console.log(state.home.region,123123123),
    console.log(state.home.predictions,"pred"),

    {
    
    
    region:state.home.region,
    inputData:state.home.inputData || {},
    resultTypes:state.home.resultTypes || {},
    predictions:state.home.predictions || []

});
// const xdf=xd(mapStateToProps)
// console.log(xdf)
const mapActionCreators={
    getCurrentLocation,
    getInputData,
    toggleSearchResultModal,
    getAddressPredictions
    
};


export default connect(mapStateToProps,mapActionCreators)(Home)