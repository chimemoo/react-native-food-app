import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {Button} from 'react-native-elements';
import ProductMenuComponent from '../components/ProductMenuComponent';
import ProductItemComponent from '../components/ProductItemComponent';

export default function Product({navigation}){
    
    // console.log(route.params.itemDetail);
    return(
        <View style={{backgroundColor:'#fff', flex:1 }}>
            <View>
                <Text style={styles.headerText}>Menu</Text>
                <ProductMenuComponent/>
            </View>
            <View>
                <Text style={styles.menuText}>Popular</Text>
                <ProductItemComponent navigation={navigation}/>
            </View>
            <View style={styles.seeOnMaps}>
                <Button
                    title="See On Maps"
                    style={{alignSelf:'center'}}
                    onPress={() => navigation.navigate('Location')}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    seeOnMaps:{
        position:'absolute',
        width:'100%',
        top:145,
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        paddingHorizontal:20
    },
    headerText:{
        fontSize:30,
        fontWeight:'bold',
        color:'#4a4a4a',
        marginHorizontal:15,
        marginTop:180,
    },
    menuText:{
        fontSize:20,
        fontWeight:'bold',
        color:'#4a4a4a',
        marginHorizontal:15,
        marginVertical:10
    }
});