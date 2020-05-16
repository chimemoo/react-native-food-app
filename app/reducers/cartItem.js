const cartItems = (state = [], action)=>{
    switch(action.type){
        case 'UPDATE_ITEM':
            return { items : action.payload }
        case 'FETCH_ITEM':
            return {...state}
    }
    return state
}

export default cartItems;