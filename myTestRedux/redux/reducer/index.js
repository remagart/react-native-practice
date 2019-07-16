import {combineReducers} from "redux"
import {mycounter} from "./counter"
import {product} from "./product"

export default combineReducers({
    mycounter,
    product
});