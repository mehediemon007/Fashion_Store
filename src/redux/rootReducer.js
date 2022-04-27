import {combineReducers } from "redux";

import cartReducer from "./reducers/cartReducer";
import wishReducer from "./reducers/wishReducer";
import compareReducer from "./reducers/compareReducer";

const rootReducer = combineReducers({
    cart:cartReducer,
    wishList:wishReducer,
    compareList : compareReducer
});

export default rootReducer;