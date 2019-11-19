import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Programacao from './pages/Programacao';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/programacao" component={Programacao} />
                <Redirect exact from="/" to="/programacao" />
            </Switch>
        </BrowserRouter>
    );
}