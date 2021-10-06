import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../util/date_util"
import ReactQuill from 'react-quill';
import EditorToolbar from "./editor_toolbar";
import { format } from "./editor_toolbar";

class Editor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: null,
            title: "",
            body: "",
            updated_at: "",
            fullscreen: false
        }
        this.deleteNote = this.deleteNote.bind(this);
        this.handleQuillUpdate = this.handleQuillUpdate.bind(this);
        this.setToolbar = this.setToolbar.bind(this);
        this.toggleEditorExpand = this.toggleEditorExpand.bind(this);
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
        this.props.fetchNotes()
            .then((res) => {this.setState(this.props.note)});
    }

    componentDidUpdate(prevProps){
        if((this.props.noteId !== prevProps.noteId)) {
            this.setState(this.props.note);
        }
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
        allNotebooks.forEach(notebook => {
            if(notebook.id.toString() === this.props.match.params.notebookId){
                notebookHeader = notebook.name;
            }
        })

        if (!notebookHeader) {
            allNotebooks.forEach(notebook => {
                if(notebook.id === this.props.note.notebook_id){
                    notebookHeader = notebook.name;
                }
            })
        }

        return (
            <div className={`note-editor ${this.state.fullscreen ? "fullscreen" : ""}`}>
                <div className="note-editor-deletePlusdate">
                    <div className="note-editor-header-delete">
                    <div className="note-editor-notebook-header">
                        <button className="editor-fullscreen-button" onClick={() => this.toggleEditorExpand()}> <img src={window.fullscreen} /> </button>
                        <Link to={`/notebooks/${this.props.note.notebook_id}`}>
                            <img className="notes-editor-notebook-img" src={window.notebook}/> <div className="note-editor-notebook-name">{notebookHeader}</div>
                        </Link>
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
                <ReactQuill theme="snow" placeholder="Start writing" value={this.state.body} onChange={this.handleQuillUpdate} formats={format} onFocus={() => this.setToolbar(true)}/>
            </div>
        )
    }
}

export default Editor;