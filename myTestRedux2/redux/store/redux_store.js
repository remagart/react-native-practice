import {createStore,applyMiddleware,compose} from "redux";
import redux_reducer from "../reducer/redux_reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    redux_reducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;


