import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, Spinner } from 'reactstrap';
import { fetchPosts, ROUTER } from '../store/actions';
import { Footer, Posts, TopBar, Loader } from '../components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
        this.props.fetchPosts(this.props.match.params.pageNum || 1).then(() => {
            this.setState({
                loading: false,
            });
        });
        this.props.dispatch({
            type: ROUTER,
            payload: this.props.match,
        });
    }

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
        <Container
            fluid={true}
            className="template-blog"
            style={{
                position: 'relative',
                minHeight: '1000px!important',
                paddingBottom: '100px',
            }}
        >
            <TopBar />
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
            >
                <Posts firstPage={this.props.match.params.pageNum === 1} />
                {this.state.loading ? (
                    <Loader loading={this.state.loading} />
                ) : (
                    <Container style={{ minHeight: '1000px;' }} />
                )}
            </ReactCSSTransitionGroup>
            <Footer />
        </Container>
    );
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(Object.assign({ fetchPosts, dispatch }), dispatch);

export default connect(null, mapDispatchToProps)(Blog);
