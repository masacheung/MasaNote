import React from 'react';
import { Link } from 'react-router-dom';

const NoteItem = props => {
    return (
        <div>
            {props.note.id}
            {props.note.title}
            {props.note.body}
        </div>
    )
}

export default NoteItem;