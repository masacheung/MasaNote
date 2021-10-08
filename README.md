# MasaNote
![alt text](https://github.com/masacheung/MasaNote/blob/main/app/assets/images/home_page.png)
## Demo

<a href="https://masanote.herokuapp.com/">Try MasaNote </a> via the live demo login.

***

Table of Contents
1. Overview
2. Technologies
3. Features
4. In-progress & Planned

***

# Overview
<a href="https://masanote.herokuapp.com/">MasaNote</a> is a single-page note-taking app that features a rich-text editor, image uploading, autosaving, organization with notebooks. <a href="https://masanote.herokuapp.com/">MasaNote</a> is an <a href="https://evernote.com/">Evernote</a> clone, a popular note taking web app.

# Technologies
Rails, PostgreSQL, JQuery, React, Redux, CSS

<a href="https://masanote.herokuapp.com/">MasaNote</a> is built using a Rails backend, PostgreSQL for the database management, jQuery/AJAX for database requests, React & Redux for the frontend and state management and CSS for the webpage styling. It's structured as a normalized state and uses thunks for asynchronous CRUD actions.

ReactQuill

MasaNote's rich-text editor is built with ReactQuill, a Quill component for React, to create a clean WYSIWYG editing experience. Modifications to the ReactQuill editor CSS styling to the Snow theme and note autosaving.

# Features

## Notebooks
![alt text](https://github.com/masacheung/MasaNote/blob/main/app/assets/images/notebook.gif)

Users can create notebooks to better organize their notes. From within the `Notebooks` index, users can rename and delete notebooks via modals. User can also click the notebook to view all notes within the notebook and navigate directly to a selected note.

User can also move their note to the exist nothbook.

## Rich-Text Editor
![alt text](https://github.com/masacheung/MasaNote/blob/main/app/assets/images/editor.gif)
Users can create a new note using the main "New Note" button and will be immediately loaded in the editor.

From within the MasaNote editor, users have the ability to edit notes using different headings, font styles and sizes, as well as add images, links, formulas, and code blocks.

Changes to notes are autosaved. Also, the editor provide Full-Screen feature.