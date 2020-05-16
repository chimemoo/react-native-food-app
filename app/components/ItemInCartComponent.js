import React from 'react'
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {connect} from 'react-redux';

class ItemInCartComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            product:[]
        }
        this.props = props;
    }

    componentDidMount(){
        let items = this.props.product;
        this.setState({product:items})
    }
    
    
    render(){
    return(
        <View style={{flex:1}}>
            <FlatList
                data={this.state.product}
                renderItem={({item}) => {
                        if(item.qty > 0 ){ 
                            return(
                                <View style={styles.itemStyle}>
                                    <View style={{flex:25}}>
                                        <Image source={{uri:item.image}} style={styles.imageItem}/>
                                    </View>
                                    <View style={{flex:50, padding:10}}>
                                        <Text style={{fontSize:20, fontWeight:'bold'}}>{item.title}</Text>
                                        <Text style={{flexWrap: 'wrap'}}>{item.ingridients}</Text>
                                        <Text>Rp. {item.price}</Text>
                                    </View>
                                    <View style={{flex:25, justifyContent:'center'}}>
                                        
                                        {this.UpdateQtyButton(item.qty, item.id)}
                                        
                                    </View>
                                </View>
                            )
                        }
                    }
                }
                
                keyExtractor={item => item.id.toString()}
                scrollEnabled={true}
                pagingEnabled
                extraData={this.state.product}
            />
        </View>
    )}

    UpdateQtyButton(qty,id){
        console.log(qty);
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

    
    addQty = (id) => {
        let product = this.state.product;
        product.forEach((a, i) => {
            if (a.id === id) {
               product.splice(i, 1, { ...a, ['qty']: a.qty+=1 });
             }
        });
        this.setState(product);
        this.UpdateState();
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

export default connect(mapStateToProps,mapDispatchToProps)(ItemInCartComponent)

const styles = StyleSheet.create({
    cartAction:{
        width:350,
        height:20,
        position:'absolute',
        backgroundColor:'#e96c28',
        alignSelf:'center',
        bottom:350,
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
        alignItems:'center'
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
