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
                <div className="notes-index-header">Notes</div>
                <div className="notes-index-content">
                    <NotesList notes={this.props.notes} fetchNotes={this.props.fetchNotes}/>
                </div>
            </div>
        )
    }
}
