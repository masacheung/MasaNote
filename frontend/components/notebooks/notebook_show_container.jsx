import { connect } from 'react-redux';
import { fetchNotebook} from "../../actions/notebook_actions"
import { fetchNotes } from "../../actions/note_actions";
import NotebookShow from "./notebook_show";

const mSTP = (state, ownProps) => {

    const notes = [];
    state.entities.notebooks[ownProps.match.params.notebookId].note_ids.forEach(noteId => {
        notes.push(this.state.entities.notes[noteId])
    })

    return {
        notebook: state.entities.notebooks[ownProps.match.params.notebookId],
        notes: notes,
        stateNotes: state.entities.notes
    }
}

const mDTP = dispatch => {
    return {
        fetchNotebook: (notebookId) => dispatch(fetchNotebook(notebookId)),
        fetchNotes: () => dispatch(fetchNotes()),
    }
}

export default connect(mSTP, mDTP)(NotebookShow);