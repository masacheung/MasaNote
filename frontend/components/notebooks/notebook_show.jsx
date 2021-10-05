import React from 'react';
import NotebookNotesList from "./notebook_notes_list"

export default class NotebookShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchNotebook(this.props.match.params.notebookId);
        this.props.fetchNotes();
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.notebookId !== prevProps.match.params.notebookId){
            this.props.fetchNotebook(this.props.match.params.notebookId);
        }
    }

    render() {

        const notes = Object.values(this.props.notes);
        let singleNote;
        if(notes.length <= 1){
            singleNote = "note";
        }else {
            singleNote = "notes";
        }

        let notebook;
        if(!this.props.notebook){
            notebook = "Notebook";
        }else {
            notebook = this.props.notebook.name;
        }


        return (
            <div className="notes-index">
                <div className="notes-index-header">
                    <div className="notes-index-img-notes">
                        <img src={window.notebook} className="notes-index-img"/> {notebook}
                    </div>
                    <div className="notes-index-count">{notes.length} {singleNote}</div>
                </div>
                <div className="notes-index-content">
                    <NotebookNotesList notes={notes} history={this.props.history} notebookId={this.props.match.params.notebookId} currentUser={this.props.currentUser} createNote={this.props.createNote} fetchNotes={this.props.fetchNotes}/>
                </div>
            </div>
        )
    }
}