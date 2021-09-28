import React from "react";
import { withRouter } from "react-router";

const LogInSignUp = props => {
    if (!props.loggedIn) {
        return (
            <div>
                <button onClick={() => props.history.push("/signup")}>Sign Up</button>
                <button onClick={() => props.history.push("/login")}>Log In</button>
                <button onClick={() => props.history.push("/demo")}>Demo</button>
            </div>
        )
    }else return null
}

export default withRouter(LogInSignUp);