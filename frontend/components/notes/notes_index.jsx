import React from 'react';
import NotesList from './notes_list';

export default class NotesIndex extends React.Component {
    constructor(props){
        // console.log(props);
        super(props);
    }

    componentDidMount(){
        this.props.fetchNotes();
    }

    render() {
        return (
            <div className="notes-index">
                <div className="notes-index-header">
                    <div className="notes-index-img-notes">
                    <img src={window.note} className="notes-index-img"/>Notes
                    </div>
                    <div className="notes-index-count">{this.props.notes.length} notes</div>
                </div>
                <div className="notes-index-content">
                    <NotesList notes={this.props.notes} history={this.props.history} currentUser={this.props.currentUser} createNote={this.props.createNote} fetchNotes={this.props.fetchNotes}/>
                </div>
            </div>
        )
    }
}
