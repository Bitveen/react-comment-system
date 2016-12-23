import React, { Component } from "react";
import Comment from "Comment";


export default class CommentList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                CommentList
                <Comment />
            </div>
        );
    }


}
