import React from 'react'
import { FlatList,  Text, View, StyleSheet } from 'react-native';
import { Image, Icon } from 'react-native-elements';
import axios from 'axios';

export default class FreeDeliveryPromo extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            dataSource:[
                {id:'12',url: 'https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg', color: '#FE0404'},
                {id:'13',url: 'https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg', color: '#522A73'},
                {id:'14',url: 'https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg', color: '#008200'},
                {id:'15',url: 'https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg', color: '#034223'},
                {id:'16',url: 'https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg', color: '#015280'}
            ],
            data:[]
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
                renderItem={({item}) => <Item item={item} />}
                keyExtractor={item => item.id.toString()}
                scrollEnabled={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                horizontal
            />
        );
    }
}

function Item({item}){
    return(
        
        <View style={styles.container}>
            <Image source={{uri:item.avatar}} style={{ width: 300, height: 120, borderTopLeftRadius:15, borderTopRightRadius:15 }}/>
            <View style = {{padding:10,  width:300}}>
                <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:5}}>
                    <Text style={styles.titleText}>{item.first_name}</Text>
                    <Text style={styles.durationText}>20 - 30 min</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text>{item.last_name}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text>
                            4.5
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

    );
}

const styles = StyleSheet.create({
    container:{
        marginRight:15,
        marginBottom:15,
        backgroundColor:'#fff',
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
    },
    titleText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#4a4a4a'
    },
    durationText:{
        fontSize:16,
        color:'#4a4a4a'
    }
});

