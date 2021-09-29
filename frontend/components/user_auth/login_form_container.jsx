import { connect } from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import {clearSessionErrors, loginUser} from '../../actions/session_actions';

import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    console.log(errors);
    return {
        errors: errors.session,
        formType: 'login',
        navText: 'Don\'t have an account?',
        navLink: <Link to="/signup" className="switch">Create account</Link> 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(loginUser(user)),
        clearSessionErrors: () => dispatch(clearSessionErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);