import React, { Fragment } from 'react';
import { Fa500Px, FaBeer } from 'react-icons/fa/index';
import { Article, Empty, PostIcons } from './post.parts';
import { Col, Row, Spinner } from 'reactstrap';

export const Post = props => {
    const renderContent = () => {
        if (props.isEmpty) {
            return <Empty key={props.key} />;
        }

        return (
            <Article
                key={props.post.id}
                post={props.post}
                isSingle={props.isSingle}
            />
        );
    };

    return (
        <Fragment>
            <Row className={'mt-4'}>
                <PostIcons />
                <Col xs={11}>{renderContent()}</Col>
            </Row>
        </Fragment>
    );
};
