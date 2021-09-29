import React from 'react';
import NotesList from './notes_list';

export default class NotesIndex extends React.Component {
    constructor(props){
        console.log(props);
        super(props);
    }

    render() {
        return (
            <div>
                Notes
                <NotesList notes={this.props.notes} fetchNotes={this.props.fetchNotes}/>
            </div>
        )
    }
}
