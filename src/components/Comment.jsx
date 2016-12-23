import React, { Component } from "react";


export default class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="callout comment">
                {this.props.children}
            </div>
        );
    }
}
