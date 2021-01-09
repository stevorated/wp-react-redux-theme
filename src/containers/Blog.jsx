import React, { Component } from 'react';
import { connect, dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPosts, ROUTER } from '../store/actions/index';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

class Blog extends Component {
    componentWillMount = () => {
        this.props.fetchPosts(this.props.match.params.pageNum || 1);
        this.props.dispatch({
            type: ROUTER,
            payload: this.props.match,
        });
    };

    componentWillReceiveProps = nextProps => {
        if (
            this.props.match.params.pageNum !==
                nextProps.match.params.pageNum ||
            this.props.location.pathname !== nextProps.location.pathname
        ) {
            this.props.fetchPosts(nextProps.match.params.pageNum || 1);
            this.props.dispatch({
                type: ROUTER,
                payload: nextProps.match,
            });
        }
    };

    componentDidUpdate = () => {
        document.title = `${RRT_API.siteName} - ${RRT_API.siteDescription}`;
    };

    render = () => (
        <section className="container-fluid template-blog">
            <Header />
            <Main firstPage={this.props.match.params.pageNum === 1} />
            <Footer />
        </section>
    );
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(Object.assign({ fetchPosts, dispatch }), dispatch);

export default connect(null, mapDispatchToProps)(Blog);
