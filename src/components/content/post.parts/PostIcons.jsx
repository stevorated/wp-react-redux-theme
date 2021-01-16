import React from 'react';
import { Col } from 'reactstrap';
import { Fa500Px, FaBeer } from 'react-icons/fa/index';
import { PostIcon } from './PostIcon';
import { HiMenuAlt2 } from 'react-icons/hi';
import { IconContext } from 'react-icons';

export const PostIcons = () => {
    return (
        <Col xs={1}>
            <PostIcon>
                <HiMenuAlt2 color="white" size={40} />
            </PostIcon>
            <PostIcon alignment="inline">
                <Fa500Px />
                <FaBeer />
            </PostIcon>
            <PostIcon>
                <Fa500Px color={'white'} size={30} />
            </PostIcon>
        </Col>
    );
};
