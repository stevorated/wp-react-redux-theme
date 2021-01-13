import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Article, Empty } from './main.parts';
import { Pagination } from '../../containers';

class Main extends Component {
    componentWillUpdate = () => {
        window.scrollTo(0, 0);
    };

    isSingle = () => this.props.posts.length === 1;

    renderPosts = posts => {
        if (posts.length) {
            return posts.map(post => {
                return (
                    <Article
                        key={post.id}
                        post={post}
                        isSingle={this.isSingle()}
                    />
                );
            });
        } else {
            const counter = [...Array(4)];

            return counter.map((val, i) => {
                return <Empty key={i} />;
            });
        }
    };

    getClasses = (location = false) => {
        if (!location) {
            return this.isSingle() ? '' : 'container';
        }
    };

    render = () => (
        <div className={'container'}>
            <main id="content" className={this.getClasses()}>
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={1}
                >
                    <div className={'row'}>
                        <div className={'col-9 mx-2'}>
                            {this.renderPosts(this.props.posts)}
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
            </main>
            <Pagination
                shouldRender={
                    10 === this.props.posts.length || !this.props.firstPage
                }
            />
        </div>
    );
}

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps)(Main);
