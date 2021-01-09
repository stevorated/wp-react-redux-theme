import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createComment } from '../../store/actions';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: this.props.pId,
            parent: this.props.replyCommentId || 0,
            author_name: '',
            author_email: '',
            content: '',
            posted: false,
        };
    }

    submitComment = event => {
        event.preventDefault();
        this.props.createComment(this.state);
        this.setState({ posted: true });
    };

    formInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    renderForm = () => (
        <form className="commentBox bg-faded" onSubmit={this.submitComment}>
            <h4>Leave a Reply</h4>
            <input
                type="hidden"
                name="commentId"
                value={this.props.replyCommentId || 0}
            />
            <div className="form-group">
                <textarea
                    className="form-control"
                    id="exampleTextarea"
                    rows="3"
                    name="content"
                    required="required"
                    placeholder="Enter your comment here..."
                    onChange={this.formInputChange}
                    value={this.state.content}
                ></textarea>
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    aria-describedby="name"
                    placeholder="Name (required)"
                    required="required"
                    name="author_name"
                    onChange={this.formInputChange}
                    value={this.state.author_name}
                />
            </div>
            <div className="form-group">
                <input
                    type="email"
                    className="form-control"
                    aria-describedby="email"
                    placeholder="Email (required)"
                    required="required"
                    name="author_email"
                    onChange={this.formInputChange}
                    value={this.state.author_email}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );

    renderThanks = () => (
        <div className="commentBox bg-faded">
            Thank you for your comment. A moderator will review it shortly.
        </div>
    );

    render = () =>
        this.state.posted ? this.renderThanks() : this.renderForm();
}

export default connect(null, { createComment })(CommentForm);
