import {REDUX_ACTION_TYPE} from "../../action/redux_action";

const INIT_STATE = {
    counter:50
}

const A1_page_reducer = (state=INIT_STATE,action) => {
    switch(action.type){
        case REDUX_ACTION_TYPE.A1_PAGE_INCREASE:
            return {...state,counter: state.counter+1}
        case REDUX_ACTION_TYPE.A1_PAGE_DECREASE:
            return {...state,counter: state.counter-1}
        default:
            return state;
    }
}

module.exports = {
    A1_page_reducer: A1_page_reducer,
}