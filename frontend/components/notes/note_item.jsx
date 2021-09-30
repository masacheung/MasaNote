import React from 'react';
import { Link } from 'react-router-dom';

const NoteItem = props => {
    let url = `/notes/${props.note.id}`
    return (
        <Link to={url}>
        <div>
            {props.note.id}
            {props.note.title}
            {props.note.body}
        </div>
        </Link>
    )
}

export default NoteItem;