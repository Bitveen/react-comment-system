import { combineReducers, createStore } from "redux";
import { commentsReducer } from "reducers";


export const configure = () => {

    const reducer = combineReducers({
        comments: commentsReducer
    });




    return createStore(reducer);
};