import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import SignIn from './screens/SignIn';
import LandPage from './screens/LandPage';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/login' component={SignIn} />
                <Route path='/' component={LandPage} /> />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
