import React from 'react'
import { FlatList,  Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
import {getAllUser} from '../Networking/Connect';
import axios from 'axios';

export default class PromoCardComponent extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            data : []
        }
    }

    componentDidMount(){

        axios.get(`https://reqres.in/api/users?page=2`)
            .then(res => {
                const data = res.data.data;
                console.log(data.data);
                this.setState({ data });
            })

    }
    

    render(){
        return(
            <FlatList
                data={this.state.data}
                renderItem={({item}) => <Item url={item.avatar} />}
                keyExtractor={item => item.id.toString()}
                scrollEnabled={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                horizontal
            />
        );
    }
}

function Item({url}){
    return(
        <Image source={{uri:url}} style={styles.item}/>
    );
}

const styles = StyleSheet.create({
   item:{
        width: 150, 
        height: 200, 
        marginRight:15,
        borderRadius:10
   } 
});