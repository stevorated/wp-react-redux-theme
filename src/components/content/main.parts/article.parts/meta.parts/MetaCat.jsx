import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaFolder } from 'react-icons/fa';

export class MetaCat extends Component {
    renderCategories() {
        if (typeof this.props.categories !== 'undefined') {
            return this.props.categories.map((cat, i) => {
                if (
                    this.props.categories.length === 1 ||
                    cat.slug !== 'uncategorized'
                ) {
                    return (
                        <span key={cat.term_id}>
                            <FaFolder className={'mr-1 cat-icon'} />
                            <Link
                                to={this.getCategoryPath(cat.link)}
                                className="cat-links"
                            >
                                {cat.name}
                            </Link>
                            {1 < this.props.categories.length &&
                            i < this.props.categories.length - 1
                                ? '/ '
                                : ''}
                        </span>
                    );
                }
            });
        }
    }

    getCategoryPath(link) {
        var el = document.createElement('a');
        el.href = link;
        return el.pathname;
    }

    render() {
        return (
            <div className="cats">
                {this.renderCategories()}
                {/*{this.renderDates()}*/}
            </div>
        );
    }
}
