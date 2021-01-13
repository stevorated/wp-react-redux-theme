import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMenu } from '../../store/actions';

const { __ } = wp.i18n;

class Menu extends Component {
    componentDidMount = () => {
        if (!this.props.name) {
            return;
        } else {
            this.props.actions.fetchMenu(this.props.name);
        }
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
                            {/*{__(item.title, RRT_API.textDomain')}*/}
                            {item.title}
                            {/*{__('Home')}*/}
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
                if (RRT_API.is_rtl) {
                    return 'navbar-nav mr-auto';
                }
                return 'navbar-nav justify-content-end';
            case 'footer_menu':
                return 'nav justify-content-center';
            default:
                return '';
        }
    };

    render = () => {
        // console.log(isRTL());
        return (
            <ul
                className={this.getClasses(this.props.menu.name)}
                style={{ minWidth: '85%' }}
            >
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
