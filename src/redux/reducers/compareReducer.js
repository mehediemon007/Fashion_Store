import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
    compareList:[],
    compQty:0
}

const compareReducer = (state = INITIAL_STATE,action) =>{

    switch(action.type){
        
        case actionTypes.ADD_TO_COMPARE:

                const product = action.product;
                const inList = state.compareList.find(item => item.id === product.id)

                if(inList){
                    return{
                        ...state
                    }
                }
                else{

                    return{
                        ...state,
                        compareList: [...state.compareList, product],
                        compQty: state.compQty + 1
                    }
                }
        case actionTypes.REMOVE_COMPARE:
            return {
                ...state,
                compareList: state.compareList.filter(item => item.id !== action.itemId),
                compQty : state.compQty - 1
            }
        default:
            return state
    }
}

export default compareReducer;