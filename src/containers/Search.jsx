import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Footer, TopBar, Posts } from '../components';
import { ROUTER, searchSite } from '../store/actions';

class Search extends Component {
    componentDidMount = () => {
        this.props.searchSite(this.props.match.params.term);
        this.props.dispatch({
            type: ROUTER,
            payload: this.props.match,
        });
    };

    componentWillReceiveProps = nextProps => {
        if (this.props.match.params.term !== nextProps.match.params.term) {
            this.props.searchSite(nextProps.match.params.term);
            this.props.dispatch({
                type: ROUTER,
                payload: this.props.match,
            });
        }
    };

    componentDidUpdate() {
        document.title = `Search Results - ${RRT_API.siteName}`;
    }

    render() {
        return (
            <section className="container-fluid template-search">
                <TopBar
                    searchTerm={this.props.match.params.term}
                    isSearch={true}
                />
                <Posts />
                <Footer />
            </section>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        Object.assign({ searchSite, dispatch }),
        dispatch
    );
}

export default connect(null, mapDispatchToProps)(Search);
