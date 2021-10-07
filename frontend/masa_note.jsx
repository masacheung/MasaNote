import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

import configureStore from "./store/store";
import Root from "./components/root";
import {logoutUser} from "./actions/session_actions";

import * as NoteApiUtil from "./util/note_api_util"
import * as NoteAction from "./actions/note_actions"

import * as NotebookUtil from "./util/notebook_api_util"
import * as NotebookAction from "./actions/notebook_actions"

import * as TagApiUtil from "./actions/tag_actions";

import * as NotetagApiUtil from "./util/note_tag_api_util";
import * as NotetagAction from "./actions/note_tag_action";


document.addEventListener("DOMContentLoaded", () => {
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

  window.fetchNotebooks = NotebookAction.fetchNotebooks;
  window.fetchNotebook = NotebookAction.fetchNotebook;
  window.updateNotebook = NotebookAction.updateNotebook;
  window.createNotebook = NotebookAction.createNotebook;
  window.deleteNotebook = NotebookAction.deleteNotebook;

  window.fetchTags = TagApiUtil.fetchTags;
  window.fetchTag = TagApiUtil.fetchTag;
  window.createTag = TagApiUtil.createTag;
  window.deleteTag = TagApiUtil.deleteTag;

  window.fetchNoteTags = NotetagAction.fetchNoteTags;
  window.fetchNoteTag = NotetagAction.fetchNoteTag;
  window.createNoteTag = NotetagAction.createNoteTag;
  window.updateNoteTag = NotetagAction.updateNoteTag;
  window.deleteNoteTag = NotetagAction.deleteNoteTag;


  Modal.setAppElement(document.getElementById('root'));
  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store}/>, root)
});