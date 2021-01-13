import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';
import { MetaCat } from './meta.parts';

export class Meta extends Component {
    renderCategories() {
        if (typeof this.props.categories !== 'undefined') {
            return this.props.categories.map((cat, i) => {
                if (
                    this.props.categories.length === 1 ||
                    cat.slug !== 'uncategorized'
                ) {
                    return (
                        <span key={cat.term_id}>
                            <FaBeer />
                            <Link
                                to={this.getCategoryPath(cat.link)}
                                className="cat-links"
                            >
                                {cat.name}
                            </Link>
                            {1 < this.props.categories.length &&
                            i < this.props.categories.length - 1
                                ? ', '
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

    renderDates() {
        if ('post' === this.props.type && this.props.isSingle) {
            return (
                <span>
                    {' '}
                    |{' '}
                    <time dateTime={this.props.date.substring(0, 10)}>
                        {this.props.formattedDate}
                    </time>
                </span>
            );
        }
    }

    render() {
        return (
            <div className="meta">
                <MetaCat
                    categories={this.props.categories}
                    date={this.props.date}
                    formattedDate={this.props.formatted_date}
                    type={this.props.type}
                    isSingle={this.props.isSingle}
                />
                {/*{this.renderCategories()}*/}
                {this.renderDates()}
            </div>
        );
    }
}

export default Meta;
