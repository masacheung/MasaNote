import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, Link } from 'react-router-dom';
import { withRouter } from "react-router";

const Auth = ({ exact, path, loggedIn, component: Component}) => (
    <Route path={path} exact={exact} render={(props) => loggedIn ? <Redirect to ="/notes" /> : <Component {...props} /> } />
)

const Protected = ({ exact, path, loggedIn, component: Component}) => (
    <Route path={path} exact={exact} render={(props) => loggedIn ? <Component {...props} /> : <Redirect to ="/" />} />
)

const mSTP = state => {
    return {
        loggedIn: Boolean(state.session.id)
    }
}

export const AuthRoute = withRouter(connect(mSTP, null)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP, null)(Protected));