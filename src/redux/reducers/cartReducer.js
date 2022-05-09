import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
    products:[],
    cart:[],
    cartQTy:0,
    currentItem:null
}

const cartReducer = (state = INITIAL_STATE,action) =>{

    switch(action.type){

        case actionTypes.ADD_TO_CART:
            const {product, pQty } = action.payload;
            const inCart = state.cart.find(item => item.id === product.id)
            return{
                ...state,
                cart : inCart ? state.cart.map((item) => item.id === product.id ? {...item, qty: pQty } : item) : [...state.cart, {...product, qty:pQty}]
            }
        case actionTypes.REMOVE_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        case actionTypes.INC_QTY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.id ? {...item, qty: item.qty + 1}: item)
            }
        case actionTypes.DEC_QTY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.id ? {...item, qty: item.qty - 1}: item)
            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem : action.payload
            }
        default:
            return state
    }
}

export default cartReducer;