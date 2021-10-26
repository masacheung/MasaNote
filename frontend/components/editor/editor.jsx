import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../util/date_util"
import ReactQuill from 'react-quill';
import Modal from 'react-modal';
import Tags from "./tags";

class Editor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: null,
            title: "",
            body: "",
            notebook_id: null,
            moveNotebook: "",
            updated_at: "",
            fullscreen: false,
            modal: false,
            tagName: ""
        }
        this.deleteNote = this.deleteNote.bind(this);
        this.handleQuillUpdate = this.handleQuillUpdate.bind(this);
        this.setToolbar = this.setToolbar.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleMoveNote = this.handleMoveNote.bind(this);
        this.toggleEditorExpand = this.toggleEditorExpand.bind(this);
        this.updateTagField = this.updateTagField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();

        const user_id = this.props.note.user_id;
        const name = this.state.tagName;
        const note_id = this.props.note.id;
        this.setState({tagName: ""});

        let tag = this.props.tags.find((tag) => {
            return tag.name === name;
        })

        if(tag) {
            const tag_id = tag.id;
            this.props.createNoteTag({note_id, tag_id})
            .then((res) => {
                this.props.fetchNote(this.props.note.id)
                this.props.fetchNoteTags();
            })
        }else {
            this.props.createTag({name, user_id})
                .then((res) => {
                    const tag_id = res.tag.id;
                    this.props.createNoteTag({note_id, tag_id})
                        .then((res) => {
                            this.props.fetchNote(this.props.note.id)
                            this.props.fetchNoteTags();
                        })
                }
            )
        }
    }

    updateTagField(e) {
        this.setState({tagName: e.currentTarget.value})
    }

    update(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value}, () => {this.props.updateNote(this.state)})
        }
    }

    handleQuillUpdate(text) {
        this.setState({body: text}, () => this.props.updateNote(this.state))
    }

    deleteNote() {
        this.props.deleteNote(this.state.id);
    }

    setToolbar(status) {
        this.setState({showToolbar: status})
    }

    componentDidMount(){
        this.props.fetchTags();
        this.props.fetchNoteTags();
        this.props.fetchNotes()
            .then((res) => {this.setState(this.props.note)});
    }

    componentDidUpdate(prevProps){
        if((this.props.noteId !== prevProps.noteId) || (this.props.notebookId !== prevProps.notebookId)) {
            this.props.fetchTags();
            this.setState(this.props.note);
        }
    }

    handleOpenModal(note) {
        this.setState({modal: true})

        this.setState({
            note: note,
            moveNotebookId: note.notebook_id
        })
    }

    handleCloseModal() {
        this.setState({modal: false})
    }

    handleMoveNote() {
        const allNotebooks = this.props.notebooks;
        let currentNotebookId;
        allNotebooks.forEach(notebook => {
            if(notebook.name.toString() === this.state.moveNotebook){
                currentNotebookId = notebook.id.toString();
            }
        })
        
        let newNote = {
            id: this.props.note.id,
            title: this.props.note.title,
            body: this.props.note.body,
            notebook_id: currentNotebookId
        }

        this.props.updateNote(newNote);
        this.handleCloseModal();
    }

    toggleEditorExpand() {
        if(this.state.fullscreen === false){
            this.setState({fullscreen: true})
        }else {
            this.setState({fullscreen: false})
        }
    }

    render() {
        if(!this.props.note) {
            return null;
        } 

        let url;
        if(this.props.match.params.notebookId){
            url = `/notebooks/${this.props.match.params.notebookId}`;
        }else {
            url = "/notes"
        }

        const allNotebooks = this.props.notebooks;
        let notebookHeader;
        let currentNotebookId;
        allNotebooks.forEach(notebook => {
            if(notebook.id.toString() === this.props.match.params.notebookId){
                notebookHeader = notebook.name;
                currentNotebookId = notebook.id.toString();
            }
        })

        if (!notebookHeader) {
            allNotebooks.forEach(notebook => {
                if(notebook.id === this.props.note.notebook_id){
                    notebookHeader = notebook.name;
                    currentNotebookId = this.props.note.notebook_id;
                }
            })
        }

        const tagsList = this.props.note.tags.map(tag => {
            if (!tag) {
                return null;
            }else if (tag.note_id === note.id){
                return (
                    <Link to={`/tags/${tag.id}`}>
                    <li className="tags-list-item" key={tag.id}>
                       {tag.name}
                    </li>
                    </Link>
                )
            }
        })

        return (
            <div className={`note-editor ${this.state.fullscreen ? "fullscreen" : ""}`}>
                <div className="note-editor-deletePlusdate">
                    <div className="note-editor-header-delete">
                    <div className="note-editor-notebook-header">
                        <button className="editor-fullscreen-button" onClick={() => this.toggleEditorExpand()}><img src={window.fullscreen}/></button>
                        <Link to={`/notebooks/${this.props.note.notebook_id}`}>
                            <img className="notes-editor-notebook-img" src={window.notebook}/> <div className="note-editor-notebook-name">{notebookHeader}</div>
                        </Link>
                        <button className="editor-move-button" onClick={() => this.handleOpenModal(note)}><img src={window.moveimg}/></button>
                    </div>
                    <div className="note-editor-delete-container">
                        <Link to={url} className="note-editor-delete" onClick={this.deleteNote}>
                            Delete Permanently
                        </Link>
                    </div>
                    </div>
                    <div className="note-editor-date">
                        Last edited on {formatDate(this.state.updated_at)}
                    </div>
                </div>
                <input className="note-editor-title" type="text" placeholder="Title" value={this.state.title} onChange={this.update("title")} onFocus={() => this.setToolbar(false)}/>
                <ReactQuill theme="snow" placeholder="Start writing" value={this.state.body} onChange={this.handleQuillUpdate} modules={quillModules} formats={quillFormats} onFocus={() => this.setToolbar(true)}/>
                {/* <Tags note={this.props.note} noteTags={this.props.noteTags} fetchNotes={this.props.fetchNotes} createTag={this.props.createTag} createNoteTag={this.props.createNoteTag} deleteNoteTag={this.props.deleteNoteTag} user_id={this.props.note.user_id}/> */}
                <div className="editor-tags">
                    <div>
                        <img src={window.tagimg}/>
                    </div>
                    <ul className="editor-tags-list">
                        {tagsList}
                    </ul>
                    <div className="dropdown-anchor">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" className="tag-input" value={this.state.tagName} onChange={this.updateTagField} placeholder="Add Tag"/>
                        </form>
                    </div>
                </div>
                <Modal isOpen={this.state.modal} className="overlay">
                    <div className="my-modal-editor">
                        <h2 className="modal-title">Move Note to...</h2>
                        <span className="modal-name">All Notebook(s)</span>
                        <ul>
                            {this.props.notebooks.map((notebook, i) => 
                                <li key={notebook.id}>{i+1}. {notebook.name}</li>)
                            }
                        </ul>
                        <form>
                            <input className="rename-notebook-input" type="text" placeholder="Notebook Name" value={this.state.moveNotebook} onChange={this.update('moveNotebook')}/>
                        </form>
                        <div className="create-modal-buttons">
                            <button className="create-modal-cancel" onClick={this.handleCloseModal}>Cancel</button>
                            <button className="create-modal-move" onClick={this.handleMoveNote}>Move</button>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default Editor;

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