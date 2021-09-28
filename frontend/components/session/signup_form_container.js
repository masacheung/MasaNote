import { connect } from "react-redux";
import { createUser, clearSessionErrors } from "../../actions/session_actions";
import SignUpForm from "./signup_form"

const mSTP = state => ({
})

const mDTP = dispatch => ({
    createUser: (userForm) => dispatch(createUser(userForm)),
    clearErrors: () => dispatch(clearSessionErrors())
})

export default connect(null, mDTP)(SignUpForm);