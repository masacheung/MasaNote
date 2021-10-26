import { connect } from "react-redux";
import { logoutUser } from "../../actions/session_actions";
import NavBar from "./navbar";

const mSTP = ({session, entities: {users}}) => {
    return {
        currentUser: users[session.id]
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logoutUser())
})

export default connect(mSTP, mDTP)(NavBar);