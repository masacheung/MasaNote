import * as NotebookApiUtil from '../util/notebook_api_util';

export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS';
export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';
export const RECEIVE_NOTEBOOK_ERRORS = "RECEIVE_NOTEBOOK_ERRORS";
export const CLEAR_NOTEBOOK_ERRORS = "CLEAR_NOTEBOOK_ERRORS";

const receiveNotebooks = (notebooks) => ({
    type: RECEIVE_NOTEBOOKS,
    notebooks
})

const receiveNotebook = (notebook, notes = {}) => ({
    type: RECEIVE_NOTEBOOK,
    notebook,
    notes
})

const removeNotebook = (notebookId) => ({
    type: REMOVE_NOTEBOOK,
    notebookId
})

const receiveNotebookErrors = (errors) => ({
    type: RECEIVE_NOTEBOOK_ERRORS,
    errors
})

export const clearNotebookErrors = () => ({
    type: CLEAR_NOTEBOOK_ERRORS,
    errors
})

export const fetchNotebooks = () => (dispatch) => {
    return NotebookApiUtil.fetchNotebooks()
        .then(notebooks => dispatch(receiveNotebooks(notebooks)))
}

export const fetchNotebook = (notebookId) => (dispatch) => {
    return NotebookApiUtil.fetchNotebook(notebookId)
        .then(({notebook, notes}) => dispatch(receiveNotebook(notebook, notes)))
}


export const createNotebook = (notebook) => (dispatch) => {
    return NotebookApiUtil.createNotebook(notebook)
        .then(({notebook, notes}) => dispatch(receiveNotebook(notebook, notes)))
}

export const updateNotebook = (notebook) => (dispatch) => {
    return NotebookApiUtil.updateNotebook(notebook)
        .then(({notebook, notes}) => dispatch(receiveNotebook(notebook. notes)))
}

export const deleteNotebook = (notebookId) => (dispatch) => {
    return NotebookApiUtil.deleteNotebook(notebookId)
        .then(() => dispatch(removeNotebook(notebookId)))
}
