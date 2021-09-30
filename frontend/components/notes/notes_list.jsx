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

        return(
            <ul>
                {this.props.notes.map(note => <NoteItem note={note} key={note.id} />)}
            </ul>
        )
    }
}

export default NotesList;