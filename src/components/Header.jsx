import React from 'react';
import { Link } from 'react-router-dom';

import { Menu } from '../containers';
import Search from './Search';

export const Header = props => {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">
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
        </header>
    );
};

export default Header;
