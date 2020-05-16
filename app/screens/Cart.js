import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {ButtonGroup, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import ItemInCartComponent from '../components/ItemInCartComponent';

class Cart extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedIndex: 1,
            price:0
        }
        
        this.updateIndex = this.updateIndex.bind(this)
        this.props = props;
    }

    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
    }
    

    
    componentDidUpdate(){
        this.setState({price:this.countPrice()})
    }
    
    render(){
        const buttons = ['Pick Up', 'Delivery'];
        const { selectedIndex } = this.state
        return(
            <View style={{flex:1, flexDirection:'column', backgroundColor:'#fff', paddingHorizontal:15}}>
                <View style={{marginBottom:10}}>
                    <Text style={{fontSize:40, fontWeight:'bold',color:'#343434'}}>
                        Your Cart
                    </Text>
                </View>
                <View style={{height:200}}>
                    <ItemInCartComponent/>
                </View>
                <View>
                <Text style={styles.summaryTitle}>Summary : Rp. {this.countPrice()}</Text>
                    <View style={{width:300}}>
                        {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> */}
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
                        {/* </ScrollView> */}
                    </View>
                </View>
                <View>
                    <Text style ={{fontWeight:'bold', fontSize:20}}>Pick up your order in</Text>
                    <Text style={{fontSize:50, fontWeight:'bold'}}>30 Mins</Text>
                </View>
                <View>
                <   TouchableOpacity style={styles.cartAction} onPress={() => this.props.navigation.navigate('Order')}>
                        <Text style={{fontSize:20, color:'#fff', fontWeight:'bold'}}>
                             Make an Order
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    countPrice(){
        let product = this.props.product;
        var price = 0;
        product.forEach((a, i) => {
            price=price+(a.price*a.qty);
        });
        return price;
    }
}

const styles = StyleSheet.create({
    cartAction:{
        marginTop:60,
        flexDirection:'row',
        width:350,
        height:70,
        backgroundColor:'#e96c28',
        alignSelf:'center',
        margin:20,
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
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:20
    },
    summaryTitle :{
        fontSize:25,
        fontWeight:'bold',
        marginTop:20
    },
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
})

const mapStateToProps = state => ({
    product : state.items
})

export default connect(mapStateToProps)(Cart);
