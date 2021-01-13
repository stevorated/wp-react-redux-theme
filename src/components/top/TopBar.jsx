import React from 'react';
import { Link } from 'react-router-dom';

import { Menu } from '../../containers';
import Search from './Search';

export const TopBar = props => {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <div className={'container'}>
                <h1 className="navbar-brand">
                    <Link to="/">{RRT_API.siteName}</Link>
                </h1>
                <nav className="collapse navbar-collapse">
                    <Menu name="main_menu" />
                    <Search
                        searchTerm={props.searchTerm}
                        isSearch={props.isSearch}
                    />
                </nav>
            </div>
        </header>
    );
};

export default TopBar;
