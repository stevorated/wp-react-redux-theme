import React, { Component } from 'react';

import { Meta, Title } from './article.parts';
import { Content, PostFooter } from '../../../containers';
import { Card, CardBody, CardImg } from 'reactstrap';

import '../styles/post.scss';

class Article extends Component {
    getClasses = () => (this.props.isSingle ? 'single' : 'archive');

    getFeaturedImageSrc = () => {
        if (this.props.post.featured_image_url) {
            return this.props.isSingle
                ? this.props.post.featured_image_url.large
                : this.props.post.featured_image_url.full;
        } else {
            return '';
        }
    };

    getCategories = catIds => {
        if (typeof catIds !== 'undefined') {
            return catIds.map(cat_id => {
                return RRT_API['categories'].filter(cat => {
                    return cat.term_id === cat_id;
                })[0];
            });
        }
    };

    getContent = (post, isSingle) =>
        isSingle ? post.content.rendered : post.excerpt.rendered;

    render = () => {
        const post = this.props.post;

        return (
            <div>
                <Card className={this.getClasses()}>
                    <CardBody>
                        <CardImg
                            top
                            className={'rrt-card-image'}
                            src={this.getFeaturedImageSrc()}
                            style={{
                                //     backgroundPosition: 'center',
                                //     objectFit: 'cover',
                                maxHeight: '400px',
                            }}
                        />
                        <Title link={post.link} isSingle={this.props.isSingle}>
                            {post.title.rendered}
                        </Title>
                        <Meta
                            link={post.link}
                            categories={this.getCategories(post.categories)}
                            date={post.date}
                            formattedDate={post.formatted_date}
                            type={post.type}
                            isSingle={this.props.isSingle}
                        />
                        <hr />
                        <Content isSingle={this.props.isSingle}>
                            {this.getContent(post, this.props.isSingle)}
                        </Content>
                    </CardBody>

                    <PostFooter
                        type={post.type}
                        pId={post.id}
                        isSingle={this.props.isSingle}
                        tagIds={post.tags}
                        commentStatus={post.comment_status}
                    />
                </Card>
            </div>
        );
    };
}

export default Article;
