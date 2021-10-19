import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../../actions/session_actions';
import { createNote, fetchNotes } from '../../actions/note_actions';
import Nav from './nav';
import { fetchNotebooks, fetchNotebook } from '../../actions/notebook_actions';
import { fetchTags } from '../../actions/tag_actions';

const mSTP = ({ session, entities: {users, notebooks, notes}}, ownProps) => {
    return {
        currentUser: users[session.id],
        // notebooks: Object.values(notebooks),
        // notes: Object.values(notes),
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logoutUser()),
    createNote: (note) => dispatch(createNote(note)),
    fetchNotebook: (notebookId) => dispatch(fetchNotebook(notebookId)),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    fetchNotes: () => dispatch(fetchNotes()),
    fetchTags: () => dispatch(fetchTags())
})

export default withRouter(connect(mSTP,mDTP)(Nav));
