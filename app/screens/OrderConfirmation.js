import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {Button} from 'react-native-elements'
import {connect} from 'react-redux'

export default class OrderConfirmation extends React.Component {
    constructor(props){
        super(props)

        this.props = props;
    }
    render(){
        return (
            <View style={{flex:1, backgroundColor:'#fff', padding:20}}>
                <Text style={{fontSize:30, fontWeight:'bold'}}>Order Confirmation</Text>
                <View style={styles.bill}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text>Food</Text>
                        <View style={{flexDirection:'column'}}>
                            <Text>08/09/2019</Text>
                            <Text>18.45</Text>
                        </View>
                    </View>
                    <Text style={{fontSize:25,fontWeight:'bold'}}>Thai Planet</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:20}}>
                        <Text>Order Number</Text>
                        <Text>123456</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:20}}>
                        <Text>Delivery Time</Text>
                        <Text>60 mins</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:20}}>
                        <Text>Payment method</Text>
                        <Text>Cash</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:20}}>
                        <Text>Total</Text>
                        <Text>Rp. 10000</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:140}}>
                        <TouchableOpacity style={styles.buttonTrack} onPress={() => this.props.navigation.navigate('Track') }>
                            <Text style={{fontSize:18, color:'#e96c28', fontWeight:'bold'}}>
                                Track your Order
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonHome} onPress={() => this.props.navigation.navigate('Home')}>
                            <Text style={{fontSize:18, color:'#fff', fontWeight:'bold'}}>
                                Home
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonTrack:{
        flex:50,
        height:70,
        marginHorizontal:5,
        backgroundColor:'#ffffff',
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
    
    buttonHome:{
        flex:50,
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
    bill:{
        marginHorizontal:10, 
        marginVertical:20, 
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
    }
});