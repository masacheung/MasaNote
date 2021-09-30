import React from "react";
import { Link } from "react-router-dom";
import NoteItem from "./note_item";

class NotesList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchNotes();
    }

    render() {
        let notes = this.props.notes.sort()
        const date = notes.map((note, idx )=> [note.updated_at, idx]);
        date.sort().reverse();
        let sort_notes = [];

        if (date){
            for(let i = 0; i < date.length; i++){
                let temp = date[i][1];
                let temp_note = notes[temp];
                sort_notes.push(temp_note);
            }
        }

        if(sort_notes){
            notes = sort_notes;
        }

        return(
            <ul>
                {notes.map(note => <NoteItem note={note} key={note.id} />)}
                {/* {this.props.notes.map(note => <NoteItem note={note} key={note.id} />)} */}
            </ul>
        )
    }
}

export default NotesList;