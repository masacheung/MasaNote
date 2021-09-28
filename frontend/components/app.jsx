import React from "react";
import {Switch} from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";

import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => (
    <div>
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer}/>
        </Switch>
    </div>
)

export default App;