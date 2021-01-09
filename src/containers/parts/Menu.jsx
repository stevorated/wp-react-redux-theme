import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMenu } from '../../store/actions';
// import { sprintf, __, isRTL } from "@wordpress/i18n";

const { __, isRTL } = wp.i18n;

console.log('here');

class Menu extends Component {
    componentDidMount = () => {
        this.props.actions.fetchMenu(this.props.name);
    };

    shouldComponentUpdate = nextProps =>
        this.props.name === nextProps.menu.name;

    renderMenu = menu => {
        if (this.props.name === menu.name) {
            return menu.items.map(item => {
                return (
                    <li key={item.ID} className="nav-item">
                        <Link
                            className="nav-link"
                            to={Menu.getRelativeUrl(item.url)}
                        >
                            {__(item.title, 'stevorated-rrt-theme')}
                        </Link>
                    </li>
                );
            });
        }
    };

    static getRelativeUrl = url => {
        if (url === window.location.origin) {
            return '/';
        }

        return url.substr(window.location.origin.length);
    };

    getClasses = (location = '') => {
        switch (location) {
            case 'main_menu':
                if (isRTL()) {
                    return 'navbar-nav ml-auto';
                }
                return 'navbar-nav mr-auto';
            case 'footer_menu':
                return 'nav justify-content-center';
            default:
                return '';
        }
    };

    render = () => {
        // console.log(isRTL());
        return (
            <ul className={this.getClasses(this.props.menu.name)}>
                {this.renderMenu(this.props.menu)}
            </ul>
        );
    };
}

const mapStateToProps = ({ menu }) => ({ menu });

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ fetchMenu }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
