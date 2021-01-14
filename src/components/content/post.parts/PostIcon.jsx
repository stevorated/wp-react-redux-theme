import React from 'react';

export const PostIcon = props => {
    const getClassName = () => {
        switch (props.alignment) {
            case 'inline':
                return 'post_next_to_box mb-2 d-flex justify-content-center align-items-center flex-column';
            default:
                return 'post_next_to_box mb-2 d-flex justify-content-center align-items-center';
        }
    };

    return (
        <div className={getClassName(props.alignment)}>{props.children}</div>
    );
};
