import { connect } from "react-redux";
import { loginUser, clearSessionErrors } from "../../actions/session_actions";
import LogInForm from './login_form';

const mSTP = state => ({
    userForm: {
        username: "",
        password: ""
    }
})

const mDTP = dispatch => ({
    login: (userForm) => dispatch(login(userForm)),
    clearErrors: () => dispatch(clearSessionErrors())
})

export default connect(mSTP, mDTP)(LogInForm);