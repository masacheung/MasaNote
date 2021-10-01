import { connect } from "react-redux";
import { logoutUser } from "../../actions/session_actions";
import { fetchNotes, createNote } from "../../actions/note_actions";
import { withRouter } from 'react-router-dom';


import NotesIndex from "./notes_index"

const mSTP = (state) => {
    return {
        notes: Object.values(state.entities.notes),
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logoutUser()),
    fetchNotes: () => dispatch(fetchNotes()),
    createNote: (note) => dispatch(createNote(note))
})

export default withRouter(connect(mSTP, mDTP)(NotesIndex));