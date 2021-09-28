import React from "react";
import {Switch} from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import CreateFormContainer from "./session/create_form_container";

import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => (
    <div>
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={CreateFormContainer}/>
        </Switch>
    </div>
)

export default App;