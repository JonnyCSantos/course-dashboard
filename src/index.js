import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Add from './Add';
import Data from './Data';

import * as serviceWorker from './serviceWorker';

// redux
import { Provider } from 'react-redux';
import { Store } from './store';

// react router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {urls} from "./utils/urlUtils";

ReactDOM.render(
    <Router>
        <Provider store={Store}>
            <Switch>
                <Route path={urls.home.path} exact={true} component={App}/>
                <Route path={urls.home.path} component={Add}/>
                <Route path={urls.home.path} component={Data}/>
            </Switch>
        </Provider>
    </Router>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
