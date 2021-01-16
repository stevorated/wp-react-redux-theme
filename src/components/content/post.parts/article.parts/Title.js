import React from 'react';
import { Link } from 'react-router-dom';

import { CardTitle } from 'reactstrap';

export const Title = props => {
    const extractPath = link => {
        const [protocol, host] = document.location.href.split('://');
        return link.replace(`${protocol}://${host}`, '');
    };

    const getClasses = () => (props.isSingle ? '' : '');

    return (
        <CardTitle className={getClasses()}>
            <Link to={extractPath(props.link)} className={'rrt_dark_link'}>
                <h2
                    className="mt-3"
                    dangerouslySetInnerHTML={{
                        __html: props.children,
                    }}
                />
            </Link>
        </CardTitle>
    );
};
