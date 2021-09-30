import React from 'react';
import { Link } from 'react-router-dom';

const NoteItem = props => {
    let url = `/notes/${props.note.id}`
    return (
        <Link to={url}>
        <li>
            <div className="note-item-title">
                Title: {props.note.title}
            </div>
            <div className="note-item-body">
                Body: {props.note.body}
            </div>
        </li>
        </Link>
    )
}

export default NoteItem;