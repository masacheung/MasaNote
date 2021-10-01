import { connect } from "react-redux";
import { fetchNotes, fetchNote, updateNote, deleteNote } from "../../actions/note_actions";
import Editor from "./editor";
const mSTP = (state, ownProps) => {
    const note = state.entities.notes[ownProps.match.params.noteId];

    return {
        note: note,
        notes: state.entities.notes,
        noteId: ownProps.match.params.noteId
    }
}

const mDTP = (dispatch) => {
    return {
        fetchNotes: () => dispatch(fetchNotes()),
        fetchNote: (noteId) => dispatch(fetchNote(noteId)),
        updateNote: (note) => dispatch(updateNote(note)),
        deleteNote: (noteId) => dispatch(deleteNote(noteId))
    }
}

export default connect(mSTP, mDTP)(Editor)