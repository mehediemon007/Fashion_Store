import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
    fullName:"",
    mail:"",
    password:"",
    rePassword:""
}

const authReducer = (state= INITIAL_STATE, action) =>{

    switch(action.type){

        case actionTypes.SIGN_USER:
            return{
                ...action.user
            }
        case actionTypes.CHANGE_PASS:
            return{
                ...state,
                password: action.password
            }

        case actionTypes.SHIP_ADDRESS:
            return{
                ...state,
            }
        case actionTypes.ADD_CARD:
            return{
                ...state,
            }
        default:
            return state
    }
}


export default authReducer;