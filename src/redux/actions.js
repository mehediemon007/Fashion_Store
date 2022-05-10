import * as actionTypes from './actionTypes';
import { v4 as uuid } from 'uuid';

export const addToCart = (product, pQty=1) =>{

    return{
        type: actionTypes.ADD_TO_CART,
        payload:{
            product,
            pQty
        }
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

export const incQty = (itemId) =>{

    return{
        type:actionTypes.INC_QTY,
        id:itemId,
    }
}

export const decQty = (itemId) =>{

    return{
        type:actionTypes.DEC_QTY,
        id:itemId,
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

export const authInfo = (user) =>{
    return{
        type: actionTypes.SIGN_USER,
        user
    }
}

export const placeOrder = ( cart, totalPrice) =>{
    return{
        type: actionTypes.PLACE_ORDER,
        order:{
            orderId:uuid(),
            Invoiced:uuid(),
            status:"pending",
            products: cart,
            totalPrice
        }
    }
}