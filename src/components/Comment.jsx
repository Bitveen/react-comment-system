import React, { Component } from "react";
import { connect } from "react-redux";


class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Comment
            </div>
        );
    }
}
export default connect()(Comment)
