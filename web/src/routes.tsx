import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import landing from './Pages/Main';
import SecondStep from './Pages/CreateAccount/SecondStep';
import FirstStep from './Pages/CreateAccount/FirstStep';
import ThirdStep from './Pages/CreateAccount/ThirdStep';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={landing} />
            <Route path="/FirstStep" component={FirstStep} />
            <Route path="/SecondStep" component={SecondStep} />
            <Route path="/ThirdStep" component={ThirdStep} />
        </BrowserRouter>
    );
}

export default Routes;