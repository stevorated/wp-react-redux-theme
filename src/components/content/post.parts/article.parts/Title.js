import React from 'react';
import { Link } from 'react-router-dom';

import { CardTitle } from 'reactstrap';

export const Title = props => {
    const extractPath = link => {
        const url = document.createElement('a');
        url.href = link;

        return link.replace(`${url.protocol}//${url.host}`, '');
    };

    const getClasses = () => (props.isSingle ? '' : 'card-title mb-0');

    return (
        <CardTitle className={getClasses()}>
            <Link to={extractPath(props.link)} className={'rrt_dark_link'}>
                <h2
                    className={'mt-3'}
                    dangerouslySetInnerHTML={{
                        __html: props.children,
                    }}
                />
            </Link>
        </CardTitle>
    );
};
