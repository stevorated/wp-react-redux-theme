import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Title extends Component {
    extractPath = link => {
        const url = document.createElement('a');
        url.href = link;

        return link.replace(`${url.protocol}//${url.host}`, '');
    };

    getClasses = () => (this.props.isSingle ? '' : 'card-title mb-0');

    render() {
        return (
            <header className={this.getClasses()}>
                <Link to={this.extractPath(this.props.link)}>
                    <h2
                        className={'mt-3'}
                        dangerouslySetInnerHTML={{
                            __html: this.props.children,
                        }}
                    />
                </Link>
            </header>
        );
    }
}

export default Title;
