import { connect } from "react-redux";
import TagsShow from "./tags_show";
import { fetchNotes, createNote } from "../../actions/note_actions";
import { fetchTag } from "../../actions/tag_actions";
import { createNoteTag, deleteNoteTag, fetchNoteTags } from "../../actions/note_tag_action";
import { withRouter } from 'react-router-dom';


const mSTP = (state, ownProps) => {
    return {
        tag: state.entities.tags[ownProps.match.params.tagId],
        notes: state.entities.notes,
        tags: state.entities.tags,
        currentUser: state.entities.users[state.session.id],
        noteTags: state.entities.note_tags
    }
}

const mDTP = dispatch => {
    return {
        fetchTag: (tagId) => dispatch(fetchTag(tagId)),
        fetchNotes: () => dispatch(fetchNotes()),
        createNote: (note) => dispatch(createNote(note)),
        fetchNoteTags: () => dispatch(fetchNoteTags()),
        createNoteTag: (note_tag) => dispatch(createNoteTag(note_tag)),
        deleteNoteTag: (note_tagId) => dispatch(deleteNoteTag(note_tagId))
    }
}

export default withRouter(connect(mSTP, mDTP)(TagsShow));