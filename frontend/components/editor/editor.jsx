import React from "react";

class Editor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: null,
            title: "",
            body: ""
        }
        this.deleteNote = this.deleteNote.bind(this);
    }

    update(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value}, () => {this.props.updateNote(this.state)})
        }
    }

    deleteNote() {
        this.props.deleteNote(this.state.id)
    }

    componentDidUpdate(prevProps){
        if((this.props.noteId !== prevProps.noteId) || (prevProps === null)) {
            this.setState(this.props.note);
        }
    }

    render() {
        return (
            <div className="note-editor">
                <input className="note-editor-title" type="text" placeholder="Title" value={this.state.title} onChange={this.update("title")}/>
                <button className="note-editor-delete" onClick={this.deleteNote}>
                    <div>Delete Note</div>
                </button>
                <textarea className="note-editor-body" placeholder="Start writing" value={this.state.body} onChange={this.update("body")} />
            </div>
        )
    }
}

export default Editor;