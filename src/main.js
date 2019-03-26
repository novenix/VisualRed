import React from 'react';
import {View,Text }from 'react-native'
// import {View,Text} from 'react-native';
// import { createStore } from '../../../../../../AppData/Local/Microsoft/TypeScript/3.3/node_modules/redux';
import createStore from './store/createStore'
import AppContainer from './AppContainer/index'
import {Container} from 'native-base'
import TabBar from './components/TabComponent/index'

export default class Root extends React.Component{
    renderApp(){
        const initialState=window.__INITIAL_STATE__;
        const store=createStore(initialState)
        return        (
            // <Container>
            // <TabBar/>
            // </Container>
            <AppContainer store={store} />
        )
        
    }
    render(){
        return this.renderApp();
    }
}
