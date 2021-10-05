import { connect } from 'react-redux';
import { fetchNotebook} from "../../actions/notebook_actions"
import { fetchNotes, createNote } from "../../actions/note_actions";
import NotebookShow from "./notebook_show";
import { withRouter } from 'react-router-dom';


const mSTP = (state, ownProps) => {

    return {
        notebook: state.entities.notebooks[ownProps.match.params.notebookId],
        notes: state.entities.notes,
        stateNotes: state.entities.notes,
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        fetchNotebook: (notebookId) => dispatch(fetchNotebook(notebookId)),
        fetchNotes: () => dispatch(fetchNotes()),
        createNote: (note) => dispatch(createNote(note))
    }
}

export default withRouter(connect(mSTP, mDTP)(NotebookShow));