import uuid from "uuid";
import moment from "moment";

export const commentsReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_COMMENT":
            return [
                ...state,
                {
                    id: uuid(),
                    text: action.text,
                    author: action.author,
                    createdAt: moment().unix()
                }
            ];
            break;
        case "REMOVE_COMMENT":
            return state.filter((comment) => comment.id !== action.id);
            break;
        default:
            return state;
    }
};
