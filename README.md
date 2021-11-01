# MasaNote
![alt text](https://github.com/masacheung/MasaNote/blob/main/app/assets/images/home_page.png)
## Demo

<a href="https://masanote.herokuapp.com/">Try MasaNote </a> via the live demo login.

---

## Table of Contents
1. [Overview](https://github.com/masacheung/MasaNote#overview)
2. [Technologies](https://github.com/masacheung/MasaNote#technologies)
3. [Features](https://github.com/masacheung/MasaNote#features)
4. [In-progress & Planned](https://github.com/masacheung/MasaNote#in-progress-tasks-planned-features)

---

## Overview
<a href="https://masanote.herokuapp.com/">MasaNote</a> is a single-page note-taking app that features a rich-text editor, image uploading, autosaving, organization with notebooks. <a href="https://masanote.herokuapp.com/">MasaNote</a> is an <a href="https://evernote.com/">Evernote</a> clone, a popular note taking web app.

## Technologies
Rails, PostgreSQL, JQuery, React, Redux, CSS

<a href="https://masanote.herokuapp.com/">MasaNote</a> is built using a Rails backend, PostgreSQL for the database management, jQuery/AJAX for database requests, React & Redux for the frontend and state management and CSS for the webpage styling. It's structured as a normalized state and uses thunks for asynchronous CRUD actions.

ReactQuill

MasaNote's rich-text editor is built with ReactQuill, a Quill component for React, to create a clean WYSIWYG editing experience. Modifications to the ReactQuill editor CSS styling to the Snow theme and note autosaving.

## Features

---

### Notebooks
![alt text](https://github.com/masacheung/MasaNote/blob/main/app/assets/images/notebook.gif)

Users can create notebooks to better organize their notes. From within the `Notebooks` index, users can rename and delete notebooks via modals. User can also click the notebook to view all notes within the notebook and navigate directly to a selected note.

User can also move their note to the exist nothbook.

---

### Rich-Text Editor
![alt text](https://github.com/masacheung/MasaNote/blob/main/app/assets/images/editor.gif)
Users can create a new note using the main "New Note" button and will be immediately loaded in the editor.

From within the MasaNote editor, users have the ability to edit notes using different headings, font styles and sizes, as well as add images, links, formulas, and code blocks.

Changes to notes are autosaved. Also, the editor provide Full-Screen feature.

### React Quill Editor

```Javascript

    <ReactQuill theme="snow" placeholder="Start writing" 
                value={this.state.body} onChange={this.handleQuillUpdate} 
                modules={quillModules} formats={quillFormats} onFocus={() => this.setToolbar(true)}/>


const quillModules = {
    toolbar: [
        [{header: "1"}, {header: "2"}, {header: [3,4,5,6]}, {font: []}],
        [{size: []}],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{list: "ordered"}, {list: "bullet"}],
        ["link", "image", "video"],
        ["clean"],
        ["code-block"]
    ]
};

const quillFormats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "image",
    "video",
    "code-block"
];

```

---

### Notes

Notes are a table in the database with columns for title, body, notebook_id, and author_id.

Users are able to create, view, update, and delete notes.

Users see their notes after logging in and clicking Notes on the left sidebar. This will then display a notes list where the user can pick a note to view.

A challenging aspect of implementing the notes feature was creating a way to edit them. This was done by implementing a rich text editor library called React-Quill, and synchronizing the value of that component with the state of its container component. Then the database was updated based on the state change.

```Javascript

class NotesList extends React.Component {
    constructor(props) {
        super(props);
    }

    render{
        const notes = notes.map((note, idx )=> [note.updated_at, idx]);
        notes.sort().reverse();

        return(
            <ul>
                {notes.map(note => <NoteItem note={note} key={note.id} />)}
            </ul>
        )
    }
}

```

## In-progress tasks, planned features

#### Reminders