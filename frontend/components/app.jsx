import React from "react";
import {Switch} from "react-router-dom";
import LoginFormContainer from "./user_auth/login_form_container";
import SignupFormContainer from "./user_auth/signup_form_container";
import SplashPages from "./splash_page";
import NotesIndexContainer from "../components/notes/notes_index_container"
import { Route } from "react-router";

import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={SplashPages}/>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer}/>
            <ProtectedRoute path="/notes" component={NotesIndexContainer}/>
        </Switch>
    </div>
)

export default App;