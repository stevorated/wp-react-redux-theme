import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Blog, Category, Search, Single, Tag } from '../containers';

export const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Blog} />
            <Route path="/page/:pageNum" component={Blog} />
            <Route path="/search/:term" component={Search} />
            <Route path="/category/:slug/page/:pageNum" component={Category} />
            <Route path="/category/:slug/" component={Category} />
            <Route
                path="/category/:parent/:slug/page/:pageNum"
                component={Category}
            />
            <Route path="/category/:parent/:slug/" component={Category} />
            <Route path="/tag/:slug/page/:pageNum" component={Tag} />
            <Route path="/tag/:slug" component={Tag} />
            <Route path="*" component={Single} />
        </Switch>
    );
};
