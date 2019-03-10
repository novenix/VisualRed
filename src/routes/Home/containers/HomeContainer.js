import {connect} from 'react-redux';
import Home from '../components/Home';
import {getCurrentLocation} from '../modules/home';

// function xd(map){
//     return map
// }
const mapStateToProps=(state)=>(
    // console.log(state.home.region,123123123),
    {
    
    
    region:state.home.region
});
// const xdf=xd(mapStateToProps)
// console.log(xdf)
const mapActionCreators={
    getCurrentLocation,
    
};


export default connect(mapStateToProps,mapActionCreators)(Home)