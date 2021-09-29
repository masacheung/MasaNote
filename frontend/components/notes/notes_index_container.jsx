import { connect } from "react-redux";
import { logoutUser } from "../../actions/session_actions";
import { fetchNotes } from "../../actions/note_actions";

import NotesIndex from "./notes_index"

const mSTP = (state) => {
    return {
        notes: Object.values(state.entities.notes)
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logoutUser()),
    fetchNotes: () => dispatch(fetchNotes())
})

export default connect(mSTP, mDTP)(NotesIndex);