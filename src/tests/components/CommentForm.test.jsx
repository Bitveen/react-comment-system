import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import TestUtils from "react-addons-test-utils";

import CommentForm from "CommentForm";

describe("CommentForm", () => {
    it("should exist", () => {
        expect(CommentForm).toExist();
    });

    // it("should dispatch ADD_COMMENT when valid comment text and author", () => {
    //     let author = "Max";
    //     let text = "Hello world";
    //
    //     let action = {
    //         type: "ADD_COMMENT",
    //         author,
    //         text
    //     };
    //
    //     let spy = expect.createSpy();
    //
    //     let commentForm = TestUtils.renderIntoDocument(<CommentForm dispatch={spy}/>);
    //
    //     let elem = ReactDOM.findDOMNode(commentForm);
    //
    //     commentForm.refs.text.value = text;
    //     commentForm.refs.author.value = author;
    //
    //     TestUtils.Simulate.submit(elem.querySelector("form"));
    //     expect(spy).toHaveBeenCalledWith(action);
    //
    //
    // });




});
