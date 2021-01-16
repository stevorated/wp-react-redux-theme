import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';
import { MetaCat, MetaDate } from './meta.parts';

export const Meta = props => {
    return (
        <div className="meta d-inline-flex w-100">
            <div className="mr-2">
                <MetaDate
                    date={props.date}
                    formattedDate={props.formattedDate}
                    props={props}
                    link={props.link}
                />
            </div>
            <div className="mr-2">
                <MetaCat
                    link={props.link}
                    categories={props.categories}
                    date={props.date}
                    formattedDate={props.formattedDate}
                    type={props.type}
                    isSingle={props.isSingle}
                />
            </div>
        </div>
    );
};

export default Meta;
