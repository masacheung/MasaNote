import { RECEIVE_NOTE, RECEIVE_NOTES, REMOVE_NOTE } from "../actions/note_actions";
import { RECEIVE_NOTEBOOK } from "../actions/notebook_actions";

const notesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    
    switch(action.type){
        case RECEIVE_NOTES:
            return action.notes;
        case RECEIVE_NOTE:
            newState[action.note.id] = action.note;
            return newState;
        case REMOVE_NOTE:
            delete newState[action.noteId];
            return newState;
        case RECEIVE_NOTEBOOK:
            Object.values(action.notes).forEach(note => {
                newState[note.id] = note
            });
            return newState;
        default:
            return state;
    }
}

export default notesReducer;