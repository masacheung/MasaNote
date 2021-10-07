import { connect } from "react-redux";
import { fetchNotebooks } from "../../actions/notebook_actions";
import { fetchNotes, fetchNote, updateNote, deleteNote } from "../../actions/note_actions";
import { createNoteTag, deleteNoteTag, fetchNoteTags } from "../../actions/note_tag_action";
import { fetchTags } from "../../actions/tag_actions";
import { createTag } from "../../util/tag_api_util";
import Editor from "./editor";
const mSTP = (state, ownProps) => {
    const note = state.entities.notes[ownProps.match.params.noteId];

    return {
        note: note,
        notes: state.entities.notes,
        noteId: ownProps.match.params.noteId,
        notebooks: Object.values(state.entities.notebooks),
        tags: state.entities.tags,
        noteTags: state.entities.note_tags
    }
}

const mDTP = (dispatch) => {
    return {
        fetchNotebooks: () => dispatch(fetchNotebooks),
        fetchNotes: () => dispatch(fetchNotes()),
        fetchNote: (noteId) => dispatch(fetchNote(noteId)),
        updateNote: (note) => dispatch(updateNote(note)),
        deleteNote: (noteId) => dispatch(deleteNote(noteId)),
        fetchTags: () => dispatch(fetchTags()),
        createTag: (tag) => dispatch(createTag(tag)),
        fetchNoteTags: () => dispatch(fetchNoteTags()),
        createNoteTag: (note_tag) => dispatch(createNoteTag(note_tag)),
        deleteNoteTag: (note_tagId) => dispatch(deleteNoteTag(note_tagId))
    }
}

export default connect(mSTP, mDTP)(Editor)