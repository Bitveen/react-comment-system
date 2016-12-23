import expect from "expect";
import { addComment } from "actions";


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



});
