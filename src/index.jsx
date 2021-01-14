import 'idempotent-babel-polyfill';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    ConnectedRouter,
    connectRouter,
    routerMiddleware,
} from 'connected-react-router';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';

import rootReducer from './store/reducers';
import { AppRouter } from './routes';

import './sass/styles.scss';

const { __, isRTL } = wp.i18n;

console.log(RRT_API);

__('isWorking', RRT_API.textDomain);

const siteBaseUrl = RRT_API.baseUrl
    .replace(['http://', 'https://'], '')
    .replace(window.location.origin.replace(['http://', 'https://'], ''), '');
const history = createBrowserHistory({ basename: siteBaseUrl });
const store = createStore(
    connectRouter(history)(rootReducer),
    compose(
        applyMiddleware(
            routerMiddleware(history),
            promise(),
            thunk,
            createLogger()
        )
    )
);

console.log(__('Home'));

ReactDom.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppRouter />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('react-main')
);
