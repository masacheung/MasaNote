import { connect } from "react-redux";
import { logoutUser } from "../../actions/session_actions";
import { fetchNote } from "../../actions/note_actions";

import NotesIndex from "./notes_index"

const mSTP = ({session, entities: {notes}}) => {
    return {
        notes: Object.values(notes)
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logoutUser()),
    fetchNotes: () => dispatch(fetchNote())
})

export default connect(mSTP, mDTP)(NotesIndex);