import {combineReducers} from "redux"
import {A1_page_reducer} from "../container/A_1_page/reducer";
import {B1_page_reducer} from "../container/B_1_page/reducer";

export default combineReducers({
    A1_page_reducer,
    B1_page_reducer,
});