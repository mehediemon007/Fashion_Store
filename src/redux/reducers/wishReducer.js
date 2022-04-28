import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
    wishList:[],
    wishQty:0
}

const wishReducer = (state = INITIAL_STATE,action) =>{

    switch(action.type){
        
        case actionTypes.ADD_TO_WISHLIST:

                const product = action.product;
                const inList = state.wishList.find(item => item.id === product.id)

                if(inList){
                    return{
                        ...state
                    }
                }
                else{

                    return{
                        ...state,
                        wishList: [...state.wishList, product],
                        wishQty: state.wishQty + 1
                    }
                }
        case actionTypes.REMOVE_WISHLIST:
            return {
                ...state,
                wishList: state.wishList.filter(item => item.id !== action.itemId),
                wishQty: state.wishQty - 1
            }
        default:
            return state
    }
}

export default wishReducer;