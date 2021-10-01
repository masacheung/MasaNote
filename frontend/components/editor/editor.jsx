import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../util/date_util"

class Editor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: null,
            title: "",
            body: "",
            updated_at: ""
        }
        this.deleteNote = this.deleteNote.bind(this);
    }

    update(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value}, () => {this.props.updateNote(this.state)})
        }
    }

    deleteNote() {
        this.props.deleteNote(this.state.id);
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
        return (
            <div className="note-editor">
                <div className="note-editor-deletePlusdate">
                    <div className="note-editor-delete-container">
                    <Link to="/notes" className="note-editor-delete" onClick={this.deleteNote}>
                        Delete Permanently
                    </Link>
                    </div>
                    <div className="note-editor-date">
                        Last edited on {formatDate(this.state.updated_at)}
                    </div>
                </div>
                <input className="note-editor-title" type="text" placeholder="Title" value={this.state.title} onChange={this.update("title")}/>
                <textarea className="note-editor-body" placeholder="Start writing" value={this.state.body} onChange={this.update("body")} />
            </div>
        )
    }
}

export default Editor;