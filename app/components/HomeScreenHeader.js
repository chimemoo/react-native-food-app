import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Header, Icon} from 'react-native-elements';

const HomeRightComponent = () => {
    
 
    return(
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{marginHorizontal:10}}>
                <Icon name="hearto" type="antdesign" color="#454545"/>
            </TouchableOpacity>
            <TouchableOpacity style={{marginHorizontal:10}}>
                <Icon name="setting" type="antdesign" color="#454545"/>
            </TouchableOpacity>
        </View>
    )
    
}

const HomeLeftComponent = (navigation) => {
    return(
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{marginHorizontal:10}} onPress={() => navigation.navigation.openDrawer()}>
                <Icon name="menu" type="feather" color="#454545"/>
            </TouchableOpacity>
        </View>
    )
    
}

const HomeScreenHeader =  {
    header: (props) => (
        
        <Header
            placement="left"
            backgroundColor="#fff"
            leftComponent={<HomeLeftComponent navigation={props.navigation}/>} //LAST
            rightComponent={<HomeRightComponent/>}
            statusBarProps={{ hidden:true }}
        />
    )
};

export {HomeScreenHeader}
