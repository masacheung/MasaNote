import React from 'react';
import NotesList from './notes_list';

export default class NotesIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchNotes();
        this.props.fetchNotebooks();
    }

    render() {

        let singleNote;
        if(this.props.notes.length <= 1){
            singleNote = "note";
        }else {
            singleNote = "notes";
        }

        let note;
        if (this.props.notes){
            note = <NotesList notebooks={this.props.notebooks} notes={this.props.notes} history={this.props.history} currentUser={this.props.currentUser} createNote={this.props.createNote} fetchNotes={this.props.fetchNotes}/>
        }else {
            note = '';
        }

        return (
            <div className="notes-index">
                <div className="notes-index-header">
                    <div className="notes-index-img-notes">
                    <img src={window.note} className="notes-index-img"/>Notes
                    </div>
                    <div className="notes-index-count">{this.props.notes.length} {singleNote}</div>
                </div>
                <div className="notes-index-content">
                    {/* <NotesList notes={this.props.notes} history={this.props.history} currentUser={this.props.currentUser} createNote={this.props.createNote} fetchNotes={this.props.fetchNotes}/> */}
                    {note}
                </div>
            </div>
        )
    }
}
