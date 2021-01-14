import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';
import { MetaCat, MetaDate } from './meta.parts';

export const Meta = props => {
    const renderDates = () => {
        if (props.type === 'post' && props.isSingle) {
            return (
                <span>
                    {' '}
                    |{' '}
                    <time dateTime={props.date.substring(0, 10)}>
                        {props.formattedDate}
                    </time>
                </span>
            );
        }
    };

    return (
        <div className="meta">
            <MetaCat
                categories={props.categories}
                date={props.date}
                formattedDate={props.formatted_date}
                type={props.type}
                isSingle={props.isSingle}
            />
            {props.isSingle && <MetaDate props={props} />}
        </div>
    );
};

export default Meta;
