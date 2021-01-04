import "idempotent-babel-polyfill";
import {
  routerMiddleware,
  connectRouter,
  ConnectedRouter,
} from "connected-react-router";

import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { createLogger } from "redux-logger";

import rootReducer from "./store/reducers";
import Search from "./components/Search";
import Category from "./containers/Category";
import Tag from "./containers/Tag";
import Blog from "./containers/Blog";
import Single from "./containers/Single";

import "./sass/styles.scss";

const siteBaseUrl = RT_API.baseUrl
  .replace(["http://", "https://"], "")
  .replace(window.location.origin.replace(["http://", "https://"], ""), "");
const history = createBrowserHistory({ basename: siteBaseUrl });
const store = createStore(
  connectRouter(history)(rootReducer),
  compose(
    applyMiddleware(routerMiddleware(history), promise(), thunk, createLogger())
  )
);

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
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
    </ConnectedRouter>
  </Provider>,
  document.getElementById("react-main")
);
