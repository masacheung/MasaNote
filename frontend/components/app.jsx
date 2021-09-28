import React from "react";
import {Switch} from "react-router-dom";
import LoginFormContainer from "./user_auth/login_form_container";
import SignupFormContainer from "./user_auth/signup_form_container";
import NavBarContainer from "./navbar/navbar_container"
import Splash from "./splash_page/splash";


import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => (
    <div>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer}/>
            <AuthRoute exact path="/" component={NavBarContainer}/>
            <AuthRoute exact path="/" component={Splash}/>
    </div>
)

export default App;