import React from 'react';
import { Link } from 'react-router-dom';

const NoteItem = props => {
    let url = `/notes/${props.note.id}`
    let title;
    if (props.note.title === "") {
        title = "Untitled";
    }else {
        title = props.note.title;
    }

    if (!props.note) {
        return null;
    }

    let date = props.note.updated_at;


    return (
        <Link to={url}>
        <li>
            <div className="note-item-title">
                {title}
            </div>
            <div className="note-item-body">
                {props.note.body}
            </div>
            <div className="note-item-datetime">
                {date}
            </div>
        </li>
        </Link>
    )
}

export default NoteItem;