import React, { Component } from 'react';

import { Title, Meta } from './article.parts';
import { Content, PostFooter } from '../../containers';

class Article extends Component {
    getClasses = () =>
        this.props.isSingle ? 'card single w-75' : 'card archive';

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
                return RT_API['categories'].filter(cat => {
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
            <article className={this.getClasses()}>
                <img
                    src={this.getFeaturedImageSrc()}
                    className="card-img-top img-fluid"
                />
                <div className="card-block">
                    <Title link={post.link} isSingle={this.props.isSingle}>
                        {post.title.rendered}
                    </Title>
                    <Meta
                        categories={this.getCategories(post.categories)}
                        date={post.date}
                        formattedDate={post.formatted_date}
                        type={post.type}
                        isSingle={this.props.isSingle}
                    />
                    <Content isSingle={this.props.isSingle}>
                        {this.getContent(post, this.props.isSingle)}
                    </Content>
                </div>
                <PostFooter
                    type={post.type}
                    pId={post.id}
                    isSingle={this.props.isSingle}
                    tagIds={post.tags}
                    commentStatus={post.comment_status}
                />
            </article>
        );
    };
}

export default Article;
