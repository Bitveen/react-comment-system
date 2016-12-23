import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment } from "actions";

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }


    handleSubmitForm(e) {
        e.preventDefault();
        let author = this.refs.author.value.trim();
        let text = this.refs.text.value.trim();
        if (author && text) {
            this.props.dispatch(addComment(author, text));
            this.refs.author.value = "";
            this.refs.text.value = "";
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitForm}>
                    <div>
                        <input type="text" ref="author" placeholder="Enter your name..."/>
                    </div>
                    <div>
                        <textarea ref="text" placeholder="Your comment..."></textarea>
                    </div>
                    <div>
                        <button type="submit" className="button">Send</button>
                    </div>
                </form>
            </div>
        );
    }
}



export default connect()(CommentForm);
