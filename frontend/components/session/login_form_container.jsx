import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { clearSessionErrors, loginUser} from "../../actions/session_actions";
import SessionForm from "./session_form";

const mSTP = ({ state }) => {
    return {
        errors: Object.values(state.errors.session),
        formType: 'login',
        navText: "Do not have an account?",
        navLink: <Link to="/signup">Create Account</Link>
    }
}

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(loginUser(user)),
        clearSessionErrors: () => dispatch(clearSessionErrors())
    }
}

export default connect(mSTP, mDTP)(SessionForm);