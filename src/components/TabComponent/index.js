
import React,{Component} from 'react'
import {Text} from 'react-native'
import { Header,Left,Body,Right,Button, Tabs,Tab, Container } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
// import Root from '../../main';
{/* <Root {...this.props} /> */}
// import { Router} from 'react-native-router-flux';
// import scenes from '../../routes/scenes'
// import styles from './TabsStyles'
// import HomeContainer from '../../routes/Home/containers/HomeContainer';
// class TabBar extends Component{
export const TabBar=()=>{

    // render(){
    return(
        <Header hasTabs 
         style={{backgroundColor:'white'}}  iosBarStyle="light-content" androidStatusBarColor='grey' >
           <Tabs tabBarUnderlineStyle={{ backgroundColor:'#FD0000'}}  >
                <Tab heading="EMERGENCIA" tabStyle={{backgroundColor: '#FFFFFF'}} textStyle={{color: '#000000'}} activeTabStyle={{backgroundColor: '#FFFFFF'}} activeTextStyle={{color: '#000000', fontWeight: 'normal'}}>
                <Text>holi</Text>
                {/* se muestra despues */}
                </Tab>
                <Tab heading="MAPA" tabStyle={{backgroundColor: '#FFFFFF'}} textStyle={{color: '#000000'}} activeTabStyle={{backgroundColor: '#FFFFFF'}} activeTextStyle={{color: '#000000', fontWeight: 'normal'}}>
                    <Text>holi</Text>
                    {/* <Router scenes={scenes} /> */}
                    
                </Tab>
                <Tab heading="PERFIL" tabStyle={{backgroundColor: '#FFFFFF'}} textStyle={{color: '#000000'}} activeTabStyle={{backgroundColor: '#FFFFFF'}} activeTextStyle={{color: '#000000', fontWeight: 'normal'}}>
                    <Text>holi2</Text>
                </Tab>
                
            </Tabs>
            
           
            
        </Header>
    
        
    )
// }
}
export default TabBar;


