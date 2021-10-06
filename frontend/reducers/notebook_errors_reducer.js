import { RECEIVE_NOTEBOOK_ERRORS, CLEAR_NOTEBOOK_ERRORS, REMOVE_NOTEBOOK } from "../actions/notebook_actions";

const notebookErrorsReducers = (state = [], action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_NOTEBOOK_ERRORS:
            return action.errors;
        case CLEAR_NOTEBOOK_ERRORS:
            return [];
        case REMOVE_NOTEBOOK:
            return [];
        default:
            return state;
    }
}

export default notebookErrorsReducers;