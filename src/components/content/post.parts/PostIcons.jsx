import React from 'react';
import { Col } from 'reactstrap';
import { Fa500Px, FaBeer } from 'react-icons/fa/index';
import { PostIcon } from './PostIcon';

export const PostIcons = () => {
    return (
        <Col xs={1}>
            <PostIcon>
                <Fa500Px size={40} />
            </PostIcon>
            <PostIcon alignment="inline">
                <Fa500Px />
                <FaBeer />
            </PostIcon>
            <PostIcon>
                <Fa500Px size={30} />
            </PostIcon>
        </Col>
    );
};
