
import React from 'react'
import {Text} from 'react-native'
import { Header,Left,Body,Right,Button, Tabs,Tab } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './TabsStyles'
export const TabBar=()=>{
    return(
        <Header hasTabs 
         style={{backgroundColor:'white'}}  iosBarStyle="light-content" androidStatusBarColor='grey' >
           <Tabs tabBarUnderlineStyle={{ backgroundColor:'#FD0000'}}  >
                <Tab heading="EMERGENCIA" tabStyle={{backgroundColor: '#FFFFFF'}} textStyle={{color: '#000000'}} activeTabStyle={{backgroundColor: '#FFFFFF'}} activeTextStyle={{color: '#000000', fontWeight: 'normal'}}>
                <Text>holi</Text>
                {/* se muestra despues */}
                </Tab>
                <Tab heading="MAPA" tabStyle={{backgroundColor: '#FFFFFF'}} textStyle={{color: '#000000'}} activeTabStyle={{backgroundColor: '#FFFFFF'}} activeTextStyle={{color: '#000000', fontWeight: 'normal'}}>
                    <Text>holi2</Text>
                </Tab>
                <Tab heading="PERFIL" tabStyle={{backgroundColor: '#FFFFFF'}} textStyle={{color: '#000000'}} activeTabStyle={{backgroundColor: '#FFFFFF'}} activeTextStyle={{color: '#000000', fontWeight: 'normal'}}>
                    <Text>holi2</Text>
                </Tab>
                
            </Tabs>
            
           
            
        </Header>
        
    )
}
export default TabBar;


