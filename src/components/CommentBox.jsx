import React, { Component } from "react";

import CommentForm from "CommentForm";
import CommentList from "CommentList";


export default class CommentBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row comment-box">
                <div className="columns small-centered large-6 medium-8 small-10">
                    <div className="card">
                        <div className="card-section">
                            <CommentList />
                            <CommentForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
