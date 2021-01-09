import React, { Component } from 'react';

import { Menu } from '../containers';

class Footer extends Component {
    getYear = () => {
        console.log('!!!!!!!!!!!!!!!!!!!!');
        const date = new Date();
        return date.getFullYear();
    };

    render = () => (
        <footer>
            <Menu name="footer_menu" />
            <div className="clearfix copy">
                &copy; {this.getYear()} {RT_API.siteName} | Powered by:{' '}
                <a href="https://github.com/stevorated/stevorated-rrt-theme">
                    A React+Redux WordPress theme!
                </a>
            </div>
        </footer>
    );
}

export default Footer;
