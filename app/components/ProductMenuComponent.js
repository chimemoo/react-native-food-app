import React, {useState} from 'react';
import { View,Text, ScrollView, StyleSheet } from 'react-native';
import {ButtonGroup} from 'react-native-elements';

export default class ProductMenuComponent extends React.Component {

    constructor () {
        super()
        this.state = {
          selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
      }
      
    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
    }
     

    render(){
        const buttons = ['Popular', 'Salads', 'Main Course', 'Desserts'];
        const { selectedIndex } = this.state
        return(
            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    buttonStyle={styles.buttonStyle}
                    selectedButtonStyle={styles.selectedButtonStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    containerStyle={{height: 50, borderWidth:0}}
                    innerBorderStyle={{width:0}}
                />
                </ScrollView>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    buttonStyle:{ 
        margin:5, 
        width:110, 
        borderRadius:30, 
        borderColor:'#dfdfdf',
        borderWidth:1,
        backgroundColor:'#fff',
    },
    selectedButtonStyle:{
        borderColor:'#e96c28',
        backgroundColor:'#fcf0e5'
    },
    selectedTextStyle:{
        color:'#e96c28'
    }
});

