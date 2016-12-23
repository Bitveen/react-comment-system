import expect from "expect";
import { addComment, removeComment } from "actions";


describe("Actions", () => {

    describe("addComment", () => {

        it("should generate add comment action", () => {
            let action = {
                type: "ADD_COMMENT",
                author: "Max",
                text: "Hello"
            };

            let result = addComment(action.author, action.text);

            expect(result).toEqual(action);

        });

    });


    describe("removeComment", () => {
        it("should generate remove comment action", () => {
            let action = {
                type: "REMOVE_COMMENT",
                id: 1
            };
            let result = removeComment(1);

            expect(result).toEqual(action);


        });
    });



});
