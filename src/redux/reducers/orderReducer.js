import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
    orders:[]
}

const orderReducer = (state = INITIAL_STATE,action) =>{

    switch(action.type){

        case actionTypes.PLACE_ORDER:
            return{
                orders : [...state.orders, {...action.order}]
            }
        default:
            return state
    }
}

export default orderReducer;