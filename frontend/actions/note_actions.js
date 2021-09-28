import * as NoteApiUtil from '../util/note_api_util';

export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

const receiveNotes = (notes) => ({
    type: RECEIVE_NOTES,
    notes
})

const receiveNote = (note) => ({
    type: RECEIVE_NOTE,
    note
})

const removeNote = (noteId) => ({
    type: REMOVE_NOTE,
    noteId
})

export const fetchNotes = () => (dispatch) => {
    return NoteApiUtil.fetchNotes()
        .then(notes => dispatch(receiveNotes(notes)))
}

export const fetchNote = (noteId) => (dispatch) => {
    return NoteApiUtil.fetchNote(noteId)
        .then(note => dispatch(receiveNote(note)))
}

export const createNote = (note) => (dispatch) => {
    return NoteApiUtil.createNote(note)
        .then(note => dispatch(receiveNote(note)))
}

export const updateNote = (note) => (dispatch) => {
    return NoteApiUtil.updateNote(note)
        .then(note => dispatch(receiveNote(note)))
}

export const deleteNote = (noteId) => (dispatch) => {
    return NoteApiUtil.deleteNote(noteId)
        .then(() => dispatch(removeNote(noteId)))
}