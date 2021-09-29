import React from "react";
import { Link } from "react-router-dom";

class NotesList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let notes = Object.values(this.props.notes).reverse();

        return(
            <ul className="notes-index-list">
                {notes.map(note => (
                    <div>
                        <ul>
                            <li>note.title</li>
                            <li>note.body</li>
                        </ul>
                    </div>
                ))}
            </ul>
        )
    }
}

export default NotesList;