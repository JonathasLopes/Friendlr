import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import landing from './Pages/Main';
import NewAccount from './Pages/NewAccount';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={landing} />
            <Route path="/NewAccount" component={NewAccount} />
        </BrowserRouter>
    );
}

export default Routes;