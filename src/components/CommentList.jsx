import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

import Comment from "Comment";


class CommentList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { comments } = this.props;

        let renderComments = () => {
            if (comments.length > 0) {
                return comments.map((comment) => {
                    return (
                        <Comment key={comment.id}>
                            <div>{comment.author}</div>
                            <div>{comment.text}</div>
                        </Comment>
                    );
                });
            } else {
                return <h3>There are no comments!</h3>
            }
        };

        return (
            <div className="comment-list">
                {renderComments()}
            </div>
        );
    }


}

export default connect((state) => {
    return {
        comments: state.comments
    };
})(CommentList);
