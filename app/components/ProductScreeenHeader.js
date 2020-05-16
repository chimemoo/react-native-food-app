import React, {Component} from 'react';
import { Dimensions, ImageBackground, StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import {Header, Icon, Button} from 'react-native-elements';
const screenWidth = Dimensions.get('window').width;

const ProductScreenHeader = (route, navigation) => {
    return(
        <ImageBackground
            source={{uri:route.route.itemDetail.image}}
            style={styles.headerImageStyle}
        >
            <View style={styles.headerDetailProduct}>
                <Text style ={styles.titelProduct}>{route.route.itemDetail.title}</Text>
                <Text>{route.route.itemDetail.ingridients}</Text>
                <View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text>{route.route.itemDetail.duration}</Text>
                        <View style={{flexDirection:'row'}}>
                                <Text>
                                    {route.route.itemDetail.star}
                                </Text>
                                <Icon
                                    name="star"
                                    type="antdesign"
                                    size={18}
                                    color='yellow'
                                />
                        </View>
                    </View>
                </View>
                
            </View>
        </ImageBackground>
        // <Text>tes</Text>
    )
}


const styles = StyleSheet.create({
    headerImageStyle:{
        width:screenWidth,
        height:180,
        justifyContent:'flex-end',
        flex:1
    },
    headerDetailProduct:{
        backgroundColor:'#fff',
        width:380,
        height:140,
        alignSelf:'center',
        bottom:-138,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
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
        padding:20
    },
    titelProduct:{
        fontSize:30,
        fontWeight:'bold',
        color:'#4a4a4a',
        marginBottom:10
    }
});

export {ProductScreenHeader}