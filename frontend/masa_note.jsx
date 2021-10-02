import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store";
import Root from "./components/root";
import {logoutUser} from "./actions/session_actions";

import * as NoteApiUtil from "./util/note_api_util"
import * as NoteAction from "./actions/note_actions"

import * as NotebookUtil from "./util/notebook_api_util"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root')

  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: {[window.currentUser.id]: window.currentUser}
      },
      session: {id: window.currentUser.id}
    }
    store = configureStore(preloadedState);
    delete window.currentUser;
  }else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.logout = logoutUser;

  window.createNote = NoteAction.createNote;
  window.updateNote = NoteAction.updateNote;
  window.deleteNote = NoteApiUtil.deleteNote;

  window.fetchNotebooks = NotebookUtil.fetchNotebooks;
  window.fetchNotebook = NotebookUtil.fetchNotebook;
  window.updateNotebook = NotebookUtil.updateNotebook;
  window.createNotebook = NotebookUtil.createNotebook;
  window.deleteNotebook = NotebookUtil.deleteNotebook;

  ReactDOM.render(<Root store={store}/>, root)
});