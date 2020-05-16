import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import StepIndicator from 'react-native-step-indicator';

const labels = ["Confirmed","Cooking","On The Way", "Deliverer","Rate Us"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 20,
  currentStepIndicatorLabelFontSize: 20,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}

export default class TrackOrder extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            currentPosition: 0
        }
    }
    render(){
        return(
            <ImageBackground
                source={{uri:'https://androidhdwallpapers.com/media/uploads/2017/03/Coffee-Food-Brown-Eat-Nature-Drink-Life.jpg'}}
                style={{flex:1}}
            >  
                <View style={{justifyContent:'center', alignItems:'center', flex:80, padding:20}}>
                    <StepIndicator
                        customStyles={customStyles}
                        currentPosition={this.state.currentPosition}
                        labels={labels}
                        direction='vertical'
                    />
                </View>
                <View style={{flex:20}}>
                    <TouchableOpacity style={styles.buttonTrack} onPress={() => this.props.navigation.navigate('Home') }>
                        <Text style={{fontSize:18, color:'#fff', fontWeight:'bold'}}>
                            Home
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }

    onPageChange(position){
        this.setState({currentPosition: position});
    }
}

const styles = StyleSheet.create({
    buttonTrack:{
        marginTop:50,
        height:70,
        marginHorizontal:5,
        backgroundColor:'#e96c28',
        borderRadius:20,
        shadowColor:'#ddd',
        shadowOpacity:0.9,
        shadowColor: "#000",
        borderRadius:15,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#e96c28'
    },
})