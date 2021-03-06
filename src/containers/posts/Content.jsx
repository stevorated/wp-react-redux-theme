import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Content extends Component {
    constructor() {
        super();
    }

    navigate = event => {
        if (event.target.tagName === 'A') {
            let href = event.target.getAttribute('href');
            if (
                (href.includes(RRT_API.baseUrl) || href.startsWith('/')) &&
                '_blank' !== event.target.getAttribute('target').toLowerCase()
            ) {
                event.preventDefault();
                href = href.replace(RRT_API.baseUrl, '');
                this.props.history.push(href);
            }
        }
    };

    render = () => (
        <div
            className="card-text"
            dangerouslySetInnerHTML={{ __html: this.props.children }}
            onClick={event => this.navigate(event)}
        />
    );
}

const mapStateToProps = ({ router }) => ({ router });

export default withRouter(connect()(Content));
