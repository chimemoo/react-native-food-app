import React, {useState, useEffect} from 'react';
import { Image, Text, FlatList, StyleSheet, View, TouchableOpacity } from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {ItemData} from '../data/data';
import {connect} from 'react-redux';

class ProductItemComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            product :[],
            cartAction:false
            
        }
        this.props= props;
    }


    UNSAFE_componentWillMount(){
        let data = this.props.product;
        this.setState({product:data})
        console.log('1305');
        console.log(this.props.product)
        if(this.countItem() > 0){
            this.setState({cartAction: true}) ;
        }
        else {
            this.setState({cartAction:false});
        }
    }


    render(){
        return(
            <View>
                <FlatList
                    data={this.state.product}
                    renderItem={({item, index}) => 
                        <View style={styles.itemStyle}>
                            <View style={{flex:25}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('View Item',{image:item.image})}><Image source={{uri:item.image}} style={styles.imageItem}/></TouchableOpacity>
                            </View>
                            <View style={{flex:50, padding:10}}>
                                <Text style={{fontSize:20, fontWeight:'bold'}}>{item.title}</Text>
                                <Text style={{flexWrap: 'wrap'}}>{item.ingridients}</Text>
                                <Text>Rp. {item.price}</Text>
                            </View>
                            <View style={{flex:25, justifyContent:'center'}}>
                                {
                                    item.qty < 1 &&
                                    <Button
                                        title="Add"
                                        buttonStyle={{borderRadius:30, width:80, backgroundColor:'#fff',borderColor:'#e96c28', borderWidth:1}}
                                        titleStyle={{color:'#e96c28'}}
                                        onPress={() => this.addToCart(item.id)}
                                    />
                                }
                                {
                                    item.qty > 0 &&
                                    this.UpdateQtyButton(item.id,item.qty)
                                }
                                
                            </View>
                        </View>
                    }
                    keyExtractor={item => item.id.toString()}
                    scrollEnabled={true}
                    pagingEnabled
                    style={{marginBottom:200}}
                    // extraData={cartItem}
                />
                { 
                    this.state.cartAction 
                    && 
                    <TouchableOpacity style={styles.cartAction} onPress={() => this.props.navigation.navigate('Cart', {cart : this.getItemData()})}>
                        <Text style={{fontSize:20, color:'#fff', fontWeight:'bold'}}>
                            {this.countItem()} Item in Cart
                        </Text>
                        <Text style={{fontSize:20, color:'#fff', fontWeight:'bold'}}>
                            Rp. {this.countPrice()}
                        </Text>
                    </TouchableOpacity>
                }
            </View>
        );
    
    }

    countPrice(){
        let product = this.state.product;
        var price = 0;
        product.forEach((a, i) => {
            price=price+(a.price*a.qty);
        });
        return price;
    }

    getItemData() {
        var data = [];
        let product = this.state.product;
        product.forEach((a, i) => {
            if (a.qty > 0) {
               data.splice(i, 1, a);
            }
        });
        return data;
    }

    countItem(){
        let product = this.state.product;
        var total = 0;
        product.forEach((a, i) => {
            total+=a.qty
        });
        return total;
    }

    addToCart = (id) => {
        let product = this.state.product;
        product.forEach((a, i) => {
            if (a.id === id) {
               product.splice(i, 1, { ...a, ['qty']: a.qty+=1 });
             }
        });
        this.setState(product);
        if(this.countItem() > 0){
            this.state.cartAction = true;
        }
        this.UpdateState();
        
    }
    
    addQty = (id) => {
        let product = this.state.product;
        product.forEach((a, i) => {
            if (a.id === id) {
               product.splice(i, 1, { ...a, ['qty']: a.qty+=1 });
             }
        });
        this.setState(product);
        this.UpdateState();
        if(this.countItem() > 0){
            this.setState({cartAction: true}) ;
        }
        else {
            this.setState({cartAction:false});
        }
    }

    minQty = (id) => {
        let product = this.state.product;
        product.forEach((a, i) => {
            if (a.id === id) {
                if(a.qty != 0){
                    product.splice(i, 1, { ...a, ['qty']: a.qty-=1 });
                }
             }
        });
        this.setState(product);
        this.UpdateState();
        if(this.countItem() > 0){
            this.setState({cartAction: true}) ;
        }
        else {
            this.setState({cartAction:false});
        }
    }

    UpdateQtyButton = (id,qty) => {
        // console.log(qty);
        return (
            <View style={{flexDirection:'row', backgroundColor:'#e96c28',justifyContent:'space-between',alignItems:'center', height:40, borderRadius:10}}>
                <Button
                    icon={
                        <Icon
                            name="minuscircleo"
                            type="antdesign"
                            size={15}
                            color="white"
                        />
                    }
                    buttonStyle={{backgroundColor:'#e96c28'}}
                    onPress={() => this.minQty(id)}
                />
                <Text>
                    {qty}
                </Text>
                <Button
                    icon={
                        <Icon
                            name="pluscircleo"
                            type="antdesign"
                            size={15}
                            color="white"
                        />
                    }
                    buttonStyle={{backgroundColor:'#e96c28'}}
                    onPress={() => this.addQty(id)}
                />
            </View>
        )
    }

    UpdateState = () =>{
        console.log('123');
        console.log(this.props.updateData(this.state.product))
        this.props.updateData(this.state.product);
    }

}

const mapStateToProps = state => ({
    product : state.items
})

const mapDispatchToProps = dispatch => {
    return{
        updateData: (items) => dispatch({
            type:'UPDATE_ITEM',
            payload:items
        })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductItemComponent)

const styles = StyleSheet.create({
    cartAction:{
        flexDirection:'row',
        width:350,
        height:70,
        position:'absolute',
        backgroundColor:'#e96c28',
        alignSelf:'center',
        top:200,
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
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20
    },
    itemStyle:{
        borderRadius:20,
        height:100,
        margin:10,
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    imageItem:{
        width: '100%', 
        height: '100%',
        borderRadius:10
    },

});
