import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import landing from './Pages/Main';
import CreatePerfil from './Pages/CreateAccount/CreatePerfil';
import CreateAccount from './Pages/CreateAccount/CreateAcc';
import Confirmation from './Pages/CreateAccount/Confirmation';
function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={landing} />
            <Route path="/CreateAccount" component={CreateAccount} />
            <Route path='/confirm' component={Confirmation} />
            <Route path="/CreatePerfil" component={CreatePerfil} />
        </BrowserRouter>
    );
}

export default Routes;