import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../../actions/session_actions';
import Nav from './nav';

const mSTP = ({ session, entities: {users}}, ownProps) => {
    return {
        currentUser: users[session.id]
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logoutUser()),
})

export default withRouter(connect(mSTP,mDTP)(Nav));
