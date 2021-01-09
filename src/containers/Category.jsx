import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPostsFromTax, getTaxIdFromSlug, ROUTER } from '../store/actions';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

class Category extends Component {
    componentWillMount = () => {
        this.props.getTaxIdFromSlug('categories', this.props.match.params.slug);
        this.props.dispatch({
            type: ROUTER,
            payload: this.props.match,
        });
    };

    componentWillReceiveProps = nextProps => {
        if (this.props.match.params.slug !== nextProps.match.params.slug) {
            this.props.getTaxIdFromSlug(
                'categories',
                nextProps.match.params.slug
            );
        }

        if (
            JSON.stringify(this.props.cat) !== JSON.stringify(nextProps.cat) ||
            nextProps.match.params.pageNum !== this.props.match.params.pageNum
        ) {
            this.props.fetchPostsFromTax(
                'categories',
                nextProps.cat[0].id,
                nextProps.match.params.pageNum
            );
        }

        this.props.dispatch({
            type: ROUTER,
            payload: nextProps.match,
        });
    };

    componentDidUpdate = () => {
        let title = `${RRT_API.siteName} - ${RRT_API.siteDescription}`;
        if (this.props.cat.length) {
            document.title = title;
        }
        document.title = title;
    };

    render = () => (
        <section className="container-fluid template-category">
            <Header />
            <Main />
            <Footer />
        </section>
    );
}

const mapStateToProps = ({ cat }) => ({ cat });

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        Object.assign({ fetchPostsFromTax, getTaxIdFromSlug, dispatch }),
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Category);
