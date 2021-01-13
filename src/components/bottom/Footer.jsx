import React, { Component } from 'react';

import { Menu } from '../../containers';

export class Footer extends Component {
    getYear = () => {
        const date = new Date();
        return date.getFullYear();
    };

    render = () => (
        <footer>
            <Menu name="footer_menu" />
            <div className="clearfix copy">
                &copy; {this.getYear()} {RRT_API.siteName} | Powered by:{' '}
                <a href="https://github.com/stevorated/stevorated-rrt">
                    A React+Redux WordPress theme!
                </a>
            </div>
        </footer>
    );
}

export default Footer;
