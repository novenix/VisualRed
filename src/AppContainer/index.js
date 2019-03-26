// crear componente
import React,{Component}from 'react'
import PropTypes from 'prop-types'
import { Router} from 'react-native-router-flux';
import scenes from '../routes/scenes'
import {Provider} from 'react-redux';
import HeaderComponent from '../components/HeaderComponent/index'
import TabBar from '../components/TabComponent/index'
import { Container } from 'native-base';

export default class AppContainer extends Component{
    static propTypes={
        store: PropTypes.object.isRequired
    }
    render(){
        return (
            
            <Provider store={this.props.store} >

            {/* no estaba     */}
                {/* <Container>
                <HeaderComponent />
                <TabBar />
                </Container> */}
                {/* llamar tab */}
                
            {/* no estaba  */}
            {/* funciona */}
                <Router scenes={scenes} />
                {/* ____________ */}
                
                
                
                
                
                {/* <Router >{scenes}</Router> */}
                
            </Provider>
        )
    }
} 
