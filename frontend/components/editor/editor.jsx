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
        }
        this.deleteNote = this.deleteNote.bind(this);
        this.handleQuillUpdate = this.handleQuillUpdate.bind(this);
        this.setToolbar = this.setToolbar.bind(this);
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
        
        return (
            <div className="note-editor">
                <div className="note-editor-deletePlusdate">
                    <div className="note-editor-delete-container">
                    <Link to={url} className="note-editor-delete" onClick={this.deleteNote}>
                        Delete Permanently
                    </Link>
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