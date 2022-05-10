import {combineReducers } from "redux";

import cartReducer from "./reducers/cartReducer";
import wishReducer from "./reducers/wishReducer";
import compareReducer from "./reducers/compareReducer";
import authReducer from "./reducers/authReducer";
import orderReducer from "./reducers/orderReducer";

const rootReducer = combineReducers({
    cart:cartReducer,
    wishList:wishReducer,
    compareList : compareReducer,
    authInfo: authReducer,
    orderInfo: orderReducer
});

export default rootReducer;