import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createUser, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = (state) => {
    return {
        errors: Object.values(state.errors.session),
        formType: 'signup',
        navText: 'Aleady have an account?',
        navLink: <Link to="/login" className="switch">Sign In</Link>
    }
}

const mDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(createUser(user)),
        clearSessionErrors: () => dispatch(clearSessionErrors())
    }
}

export default connect(mSTP, mDTP)(SessionForm)