import React, { Component } from "react";
import { removeComment } from "actions";
import { connect } from "react-redux";
import moment from "moment";

class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {text, author, dispatch, id, createdAt} = this.props;

        let makeDate = () => {
            return moment(createdAt).format("HH:mm");
        };


        return (
            <div className="callout">
                <button onClick={() => {
                        dispatch(removeComment(id));
                    }} className="close-button" aria-label="Close alert" type="button">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div>

                    <div>{makeDate()}</div>
                    <div>
                        <strong>{author} </strong>says: {text}
                    </div>

                </div>
            </div>
        );
    }
}

export default connect()(Comment);
