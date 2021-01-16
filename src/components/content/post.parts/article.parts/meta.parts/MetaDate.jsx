import React from 'react';
import { FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const MetaDate = props => {
    return (
        <div className="cats">
            <span>
                <Link to={props.link} className="meta-links">
                    <FaClock className={'mr-1 meta-icon'} />
                    <time dateTime={props.date.substring(0, 10)}>
                        {props.formattedDate}
                    </time>
                </Link>
            </span>
        </div>
    );
};
