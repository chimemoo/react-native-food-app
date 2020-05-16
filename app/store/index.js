import {createStore} from 'redux';
import cartItems from '../reducers/cartItem';

const initialState = {
    items: [{
        id:'11',
        image:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568222255998.jpeg',
        title:'Fried Fish',
        ingridients:'Salmon, Cabage, Tomato, Sesame',
        price : 24.000,
        qty:0
    },
    {
        id:'12',
        image:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568222255998.jpeg',
        title:'Fried Chicken',
        ingridients:'Salmon, Cabage, Tomato, Sesame',
        price : 24.000,
        qty:0
    },
    {
        id:'13',
        image:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568222255998.jpeg',
        title:'Fried Salmon',
        ingridients:'Salmon, Cabage, Tomato, Sesame',
        price : 24.000,
        qty:0
    },
    {
        id:'14',
        image:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568222255998.jpeg',
        title:'Fried ',
        ingridients:'Salmon, Cabage, Tomato, Sesame',
        price : 24.000,
        qty:0
    },
    {
        id:'15',
        image:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568222255998.jpeg',
        title:'Fried Fish',
        ingridients:'Salmon, Cabage, Tomato, Sesame',
        price : 24.000,
        qty:0
    },
    {
        id:'16',
        image:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568222255998.jpeg',
        title:'Fried Fish',
        ingridients:'Salmon, Cabage, Tomato, Sesame',
        price : 24.000,
        qty:0
    },]
} 
export default store = createStore(cartItems,initialState)