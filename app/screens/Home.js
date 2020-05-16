import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchComponent from '../components/SearchComponent';
import PromoCardComponent from '../components/PromoCardComponent';
import UsualsComponent from '../components/UsualsComponent';
import FreeDeliveryPromo from '../components/FreeDeliveryPromo';

export default class Home extends React.Component {

    constructor(props){
        super(props);

        this.props = props;
    }

    render() {
      return (
        
            <View style={styles.container}>
                <ScrollView>
                    <View style={{paddingVertical:5, paddingHorizontal:10}}>
                        <Text style={styles.headerText}>Dubai, Media City</Text>
                    </View>
                    <View>
                        <SearchComponent/>
                    </View>
                    <View style={{paddingVertical:5, paddingHorizontal:10}}>
                        <Text style={styles.titleText}>Promo</Text>
                        <PromoCardComponent/>
                    </View>
                    <View style={{paddingVertical:5, paddingHorizontal:10}}>
                        <Text style={styles.titleText}>Your Ussuals</Text>
                        <UsualsComponent navigation={this.props.navigation}/>
                    </View>
                    <View style={{paddingVertical:5, paddingHorizontal:10}}>
                        <Text style={styles.titleText}>Free Delivery</Text>
                        <FreeDeliveryPromo/>
                    </View>
                </ScrollView>

            </View>
  
      );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    headerText:{
        fontSize:40,
        fontWeight:'bold',
        color:'#4a4a4a'
    },
    titleText:{
        fontSize:30,
        fontWeight:'bold',
        color:'#000000',
        marginVertical:10
    }
});