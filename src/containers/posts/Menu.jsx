import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMenu } from '../../store/actions';
import { Nav, NavItem } from 'reactstrap';
const { __ } = wp.i18n;

class Menu extends Component {
    componentDidMount = () => {
        console.log(this.props);
        if (!this.props.name) {
            return;
        } else {
            this.props.actions.fetchMenu(this.props.name);
        }
    };

    shouldComponentUpdate = nextProps => {
        return this.props.name === nextProps.menu.name;
    };

    isNavbar = () => {
        switch (location) {
            case 'footer_menu':
                return false;
            default:
                return true;
        }
    };

    getClasses = (location = '') => {
        const baseClass = 'justify-content-end';
        switch (location) {
            case 'footer_menu':
                return 'justify-content-center';
            default:
                return baseClass + '';
        }
    };

    static getRelativeUrl = url => {
        if (url === window.location.origin) {
            return '/';
        }

        return url.substr(window.location.origin.length);
    };

    renderMenu = menu => {
        if (this.props.name === menu.name) {
            return menu.items.map(item => {
                return (
                    <NavItem key={item.ID}>
                        <Link
                            className="nav-link"
                            to={Menu.getRelativeUrl(item.url)}
                        >
                            {item.title}
                        </Link>
                    </NavItem>
                );
            });
        }
    };

    render = () => {
        return (
            <Nav
                navbar={this.isNavbar()}
                className={this.getClasses(this.props.menu.name)}
                style={{ minWidth: '85%' }}
            >
                {this.renderMenu(this.props.menu)}
            </Nav>
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
