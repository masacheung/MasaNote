import * as NoteTagApiUtil from "../util/note_tag_api_util";

export const RECEIVE_NOTE_TAGS = "RECEIVE_NOTE_TAGS";
export const RECEIVE_NOTE_TAG = "RECEIVE_NOTE_TAG";
export const REMOVE_NOTE_TAG = "REMOVE_NOTE_TAG";

const receiveNoteTags = (note_tags) => ({
    type: RECEIVE_NOTE_TAGS,
    note_tags
})

const receiveNoteTag = (note_tag) => ({
    type: RECEIVE_NOTE_TAG,
    note_tag
})

const removeNoteTag = (note_tagId) => ({
    type: REMOVE_NOTE_TAG,
    note_tagId
})

export const fetchNoteTags = () => dispatch => {
    return NoteTagApiUtil.fetchNoteTags()
        .then(note_tags => dispatch(receiveNoteTags(note_tags)))
}

export const fetchNoteTag = (note_tagId) => dispatch => {
    return NoteTagApiUtil.fetchNoteTag(note_tagId)
        .then(note_tag => dispatch(receiveNoteTag(note_tag)))
}

export const createNoteTag = (note_tag) => dispatch => {
    return NoteTagApiUtil.createNoteTag(note_tag)
        .then(note_tag => dispatch(receiveNoteTag(note_tag)))
}

export const updateNoteTag = (note_tag) => dispatch => {
    return NoteTagApiUtil.updateNoteTag(note_tag)
        .then(note_tag => dispatch(receiveNoteTag(note_tag)))
}

export const deleteNoteTag = (note_tagId) => dispatch => {
    return NoteTagApiUtil.deleteNoteTag(note_tagId)
        .then(() => dispatch(removeNoteTag(note_tagId)))
}