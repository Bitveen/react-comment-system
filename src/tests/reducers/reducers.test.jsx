import expect from "expect";
import { commentsReducer } from "reducers";


describe("Reducers", () => {
    describe("commentsReducer", () => {
        it("should set new comment", () => {
            let action = {
                type: "ADD_COMMENT",
                author: "Max",
                text: "Hello",
                createdAt: 123456
            };

            let result = commentsReducer([], action);
            expect(result.length).toEqual(1);
            expect(result[0].text).toEqual(action.text);
            
        });

        it("should remove new comment", () => {
            let state = [{
                id: 1,
                author: "Max",
                text: "Hello",
                createdAt: 111111
            }];

            let removeCommentAction = {
                type: "REMOVE_COMMENT",
                id: 1
            };

            let result = commentsReducer(state, removeCommentAction);

            expect(result.length).toEqual(0);


        });

    });
});
