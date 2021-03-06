import React from 'react';
import { Link } from 'react-router-dom';
import { formatDateTime } from '../../util/date_util';

const TagsNotesItem = props => {
    if (!props.note) {
        return null;
    }

    let url = `/tags/${props.tagId}/${props.note.id}`
    let title;
    if (props.note.title === "") {
        title = "Untitled";
    }else {
        title = props.note.title.slice(0,20)
    }

    let date = props.note.updated_at;

    const dateNow = new Date();
    const updateDate = new Date(date);
    let displayDate;
    if((dateNow.getDate() === updateDate.getDate()) && (dateNow.getMonth() === updateDate.getMonth())){
        if (dateNow.getMinutes() === updateDate.getMinutes()){
            displayDate = "a few second ago";
        }else if (dateNow.getMinutes() - updateDate.getMinutes() < 10){
            displayDate = "a few minutes ago";
        }else if (dateNow.getHours() === updateDate.getHours()){
            let temp = dateNow.getMinutes() - updateDate.getMinutes();
            displayDate = `${temp} minutes ago`;
        }else {
            displayDate = formatDateTime(date);
        }
    }else {
        displayDate = formatDateTime(date);
    }

    const body = props.note.body.slice(0,100).replace(/<[^>]*>?/gm, '');

    return (
        <Link to={url}>
            <li>
                <div className="note-item-title">
                    {title}
                </div>
                <div className="note-item-body">
                    {body}
                </div>
                <div className="note-item-datetime">
                    {displayDate}
                </div>
            </li>
        </Link>
    )
}

export default TagsNotesItem;