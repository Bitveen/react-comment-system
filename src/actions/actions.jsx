export const addComment = (author, text) => {
    return {
        type: "ADD_COMMENT",
        author: author,
        text: text
    };
};
