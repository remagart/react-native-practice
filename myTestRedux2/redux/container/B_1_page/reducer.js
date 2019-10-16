import {REDUX_ACTION_TYPE} from "../../action/redux_action";

const INIT_STATE = {
    lists: [],
}

const B1_page_reducer = (state=INIT_STATE,action) => {
    switch(action.type){
        case REDUX_ACTION_TYPE.B1_PAGE_GET_DATA:
            return {...state,lists: action.payload}
        default:
            return state;
    }
}

module.exports = {
    B1_page_reducer: B1_page_reducer,
}