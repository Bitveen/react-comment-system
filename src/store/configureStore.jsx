import { combineReducers, createStore } from "redux";
import { commentReducer } from "reducers";


export const configure = () => {
    const reducer = combineReducers({
        comments: commentReducer
    });
    return createStore(reducer);
};