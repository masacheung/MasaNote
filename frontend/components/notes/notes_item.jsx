import React from 'react';
import { Link } from 'react-router-dom';

const convertDate = dateTime => {
    let dateObj = new Date(dateTime);

    const dateOptions = { month: 'numeric', day: 'numeric', year: 'numeric'};
    let date = dateObj.toLocaleDateString('en-US', dateOptions);

    return date;
}

const NotesItem = props => {
    <div>
        Note Item
    </div>
}

export default NotesItem;