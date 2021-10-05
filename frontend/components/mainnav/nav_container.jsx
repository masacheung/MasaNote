import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../../actions/session_actions';
import { createNote, fetchNotes } from '../../actions/note_actions';
import Nav from './nav';
import { fetchNotebooks } from '../../actions/notebook_actions';

const mSTP = ({ session, entities: {users, notebooks, notes}}, ownProps) => {
    return {
        currentUser: users[session.id],
        notebooks: Object.values(notebooks),
        notes: Object.values(notes)
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logoutUser()),
    createNote: (note) => dispatch(createNote(note)),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    fetchNotes: () => dispatch(fetchNotes())
})

export default withRouter(connect(mSTP,mDTP)(Nav));
