import {combineReducers } from "redux";

import cartReducer from "./reducers/cartReducer";
import wishReducer from "./reducers/wishReducer";
import compareReducer from "./reducers/compareReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
    cart:cartReducer,
    wishList:wishReducer,
    compareList : compareReducer,
    authInfo: authReducer
});

export default rootReducer;