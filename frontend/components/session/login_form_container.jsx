import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { clearSessionErrors, loginUser} from "../../actions/session_actions";

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        navLink: <Link to="/signup">Create Account</Link>
    }
}

const mDTP = dispatch => {
    return {
        action: (user) => dispatch(loginUser(user)),
        clearSessionErrors: () => dispatch(clearSessionErrors())
    }
}

export default connect(mSTP, mDTP)(SessionForm);