import { connect } from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import {loginUser, createUser, clearSessionErrors} from '../../actions/session_actions';

import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        navText: 'Already have an account?',
        navLink: <Link to="/login" className="switch">Sign in</Link>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(createUser(user)),
        login: (user) => dispatch(loginUser(user)),
        clearSessionErrors: () => dispatch(clearSessionErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);