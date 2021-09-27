import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createUser, clearSessionErrors } from '../../util/session_api_util';
import SessionForm from './session_form';

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        navText: 'Aleady have an account?',
        navLink: <Link to="/login" classNanem="switch">Sign In</Link>
    }
}

const mDTP = (dispatch) => {
    return {
        action: (user) => dispatch(createUser(user)),
        clearSessionErrors: () => dispatch(clearSessionErrors())
    }
}

export default connect(mSTP, mDTP)(SessionForm)