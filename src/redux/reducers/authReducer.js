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
        default:
            return state
    }
}


export default authReducer;