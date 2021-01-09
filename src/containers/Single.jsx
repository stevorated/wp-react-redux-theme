import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPost } from '../store/actions';
import { Header, Main, Footer } from '../components';

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
