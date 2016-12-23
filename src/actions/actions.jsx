export const addComment = (author, text) => {
    return {
        type: "ADD_COMMENT",
        author: author,
        text: text
    };
};

export const removeComment = (id) => {
    return {
        type: "REMOVE_COMMENT",
        id
    };
};
