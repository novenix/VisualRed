import React from 'react'
import {Text,Image} from 'react-native'
import { Header,Left,Body,Right,Button, Tabs,Tab } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
// const logoRed=require('../../assets/img/logo.PNG')
import styles from './HeaderStyles'
export const HeaderComponent=()=>{
    return(
        <Header hasTabs 
         style={{backgroundColor:'white'}} iosBarStyle="light-content" androidStatusBarColor='grey' >
            <Left>
                 <Image resizeMode="contain" style={styles.logo} source={require('../../assets/img/logo3.png')} />
                {/* <Button  >

                    <Icon name='bars' style={styles.icon} ></Icon>
                </Button> */}
            </Left>
            <Body>
                {/* <Image resizeMode="contain" style={styles.logo} source={require('../../assets/img/logo3.png')} /> */}
                <Text>VISUALRED</Text>
            </Body>
            {/* <Right>
                <Button transparent >
                    <Icon name='gift' style={styles.icon} ></Icon>
                </Button>
            </Right> */}
            
           
            
        </Header>
        
    )
}
export default HeaderComponent;