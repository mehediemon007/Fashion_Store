import * as actionTypes from './actionTypes'

export const addToCart = (product) =>{

    return{
        type: actionTypes.ADD_TO_CART,
        product
    }
}

export const removeFromCart = (itemId) =>{

    return{
        type:actionTypes.REMOVE_CART,
        payload:{
            id:itemId
        }
    }
}

export const updateQty = (itemId, value) =>{

    return{
        type:actionTypes.UPDATE_QTY,
        payload:{
            id:itemId,
            qty:value
        }
    }
}

export const loadCurrentItem = (item) =>{

    return{
        type:actionTypes.LOAD_CURRENT_ITEM,
        payload:item
    }
}

export const addToWishList = (product) =>{
    
    return{
        type: actionTypes.ADD_TO_WISHLIST,
        product
    }
}

export const removeFromWishList = (itemId) =>{

    return{
        type: actionTypes.REMOVE_WISHLIST,
        itemId
    }
}

export const addToCompare = (product) =>{
    
    return{
        type: actionTypes.ADD_TO_COMPARE,
        product
    }
}

export const removeFromCompare = (itemId) =>{

    return{
        type: actionTypes.REMOVE_COMPARE,
        itemId
    }
}