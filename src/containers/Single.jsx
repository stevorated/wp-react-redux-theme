import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPost } from '../store/actions/index';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

class Single extends Component {
    componentWillMount = () => {
        this.props.fetchPost(this.props.location.pathname);
    };

    componentWillReceiveProps = nextProps => {
        if (this.props.location.pathname !== nextProps.location.pathname) {
            this.props.fetchPost(nextProps.location.pathname);
        }
    };

    componentDidUpdate = () => {
        document.title = `${RRT_API.siteName} - ${RRT_API.siteDescription}`;
    };

    render = () => (
        <section className="container-fluid template-single">
            <Header />
            <Main />
            <Footer />
        </section>
    );
}

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps, { fetchPost })(Single);
