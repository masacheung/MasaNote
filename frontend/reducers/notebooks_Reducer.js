import { RECEIVE_NOTEBOOKS, RECEIVE_NOTEBOOK, REMOVE_NOTEBOOK } from "../actions/notebook_actions";

const notebooksReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_NOTEBOOKS:
            // return action.notebooks;
            return Object.assign({}, state, action.notebooks);
        case RECEIVE_NOTEBOOK:
            newState[action.notebook.id] = action.notebook;
            return newState;
        case REMOVE_NOTEBOOK:
            delete newState[action.notebookId];
            return newState;
        default:
            return state;
    }
}

export default notebooksReducer;