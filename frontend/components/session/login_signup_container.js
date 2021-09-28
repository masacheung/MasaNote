import { connect } from "react-redux";
import LogInSignUp from "./login_signup";

const mSTP = state => ({
    loggedIn: state.session.currentUser
})

export default connect(mSTP)(LogInSignUp);