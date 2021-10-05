import { connect } from 'react-redux';
import { fetchNotebooks, createNotebook, updateNotebook, deleteNotebook } from "../../actions/notebook_actions"
import { createUser } from '../../actions/session_actions';
import NotebooksIndex from './notebooks_index';

const mSTP = ({session, entities : {notebooks, users}, ownProps}) => {
    return {
        notebooks: Object.values(notebooks),
        currentUser: users[session.id]
    }
}

const mDTP = dispatch => {
    return {
        fetchNotebooks: () => dispatch(fetchNotebooks),
        createNotebook: (notebook) => dispatch(createNotebook(notebook)),
        updateNotebook: (notebook) => dispatch(updateNotebook(notebook)),
        deleteNotebook: (notebookId) => dispatch(deleteNotebook(notebookId))
    }
}

export default connect(mSTP, mDTP)(NotebooksIndex);