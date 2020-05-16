import React, {useEffect} from 'react'
import { FlatList,  Text, View, StyleSheet } from 'react-native';
import { Image , Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

export default function UsualsComponent(props)  {


    const { navigation } = props;
    const data  = [
        {
            id:'12',
            image:'https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg',
            title:'Food',
            duration:'20-30 min',
            ingridients:'Asian, Salad, Spring rolls',
            star:'4.5',
            isLiked:false
        },
        {
            id:'13',
            image:'https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg',
            title:'Food',
            duration:'20-30 min',
            ingridients:'Asian, Salad, Spring rolls',
            star:'4.5',
            isLiked:false
        },
        {
            id:'14',
            image:'https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg',
            title:'Food',
            duration:'20-30 min',
            ingridients:'Asian, Salad, Spring rolls',
            star:'4.5',
            isLiked:false
        }
    ]
    
    

    return(
        <FlatList
            data={data}
            renderItem={({item}) => <Item item={item} navigation={navigation} />}
            keyExtractor={item => item.id.toString()}
            scrollEnabled={true}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            horizontal
        />
    );

}

function Item({item, navigation}){
    console.log(navigation);
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('Product', {itemDetail:item})}>
            <View style={styles.container}>
                <Image source={{uri:item.image}} style={styles.imageStyle}/>
                <View style = {{padding:10,  width:300}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:5}}>
                        <Text style={styles.titleText}>{item.title}</Text>
                        <Text style={styles.durationText}>{item.duration}</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text>{item.ingridients}</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text>
                                {item.star}
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
        </TouchableOpacity>

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
    imageStyle:{
        width: 300, 
        height: 120, 
        borderTopLeftRadius:15, 
        borderTopRightRadius:15
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

