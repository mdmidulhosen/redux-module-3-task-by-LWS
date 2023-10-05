import { combineReducers } from "redux";
import { productReducer } from "./product-add/Reducer";

const RootReducer = combineReducers({
    productReducer: productReducer,
})
export default RootReducer;