import React from 'react';
import Spinner from 'reactstrap';

export const MetaDate = props => {
    console.log(props);
    return props.type === 'post' && props.isSingle ? (
        <span>
            {' '}
            |{' '}
            <time dateTime={props.date.substring(0, 10)}>
                {props.formattedDate}
            </time>
        </span>
    ) : (
        <div>
            <Spinner />
        </div>
    );
};
