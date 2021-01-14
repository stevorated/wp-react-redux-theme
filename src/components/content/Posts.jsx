import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Pagination } from '../../containers';
import { Post } from './Post';
import { Container, Col, Row, Spinner } from 'reactstrap';

import './styles/post.scss';

class Posts extends Component {
    componentWillUpdate = () => {
        window.scrollTo(0, 0);
    };

    isSingle = () => this.props.posts.length === 1;

    renderPosts = posts => {
        if (posts.length) {
            return posts.map(post => {
                return (
                    <Post
                        key={post.id}
                        post={post}
                        isSingle={this.isSingle()}
                    />
                );
            });
        }

        const counter = [...Array(4)];

        return counter.map((val, i) => {
            return (
                <Container
                    className={
                        'd-flex justify-content-center align-items-center'
                    }
                    style={{ minHeight: '500px' }}
                    key={i}
                >
                    <Spinner color="primary" />
                </Container>
            );
        });
    };

    getClasses = (location = false) => {
        if (!location) {
            return this.isSingle() ? 'container' : 'container';
        }
    };

    render = () => (
        <Container>
            <Container
                fluid={true}
                id="content"
                className={this.getClasses()}
                style={{ minHeight: '100vh' }}
            >
                <Row>
                    <Col xs={8}>
                        <Container fluid={true}>
                            <ReactCSSTransitionGroup
                                transitionName="fade"
                                transitionEnterTimeout={2000}
                                transitionLeaveTimeout={1000}
                            >
                                {this.renderPosts(this.props.posts)}
                            </ReactCSSTransitionGroup>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Pagination
                shouldRender={
                    10 === this.props.posts.length || !this.props.firstPage
                }
            />
        </Container>
    );
}

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps)(Posts);
