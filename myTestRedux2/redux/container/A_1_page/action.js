import {REDUX_ACTION_TYPE} from "../../action/redux_action"

const A1_PAGE_ACTION = {
    increaseCounter: () => ({type: REDUX_ACTION_TYPE.A1_PAGE_INCREASE}),
    decreaseCounter: () => ({type: REDUX_ACTION_TYPE.A1_PAGE_DECREASE})
}

module.exports = {
    A1_PAGE_ACTION: A1_PAGE_ACTION,
}