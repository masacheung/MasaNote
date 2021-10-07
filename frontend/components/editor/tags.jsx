import React from "react";

export default class Tags extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tagName: ""
        }

        this.deleteNoteTag = this.deleteNoteTag.bind(this);
    }

    deleteNoteTag(tag_id) {
        const note_id = this.props.note.id;
        this.props.deleteNoteTag({note_id, tag_id})
    }

    handleSubmite(e) {
        e.preventDefault();

        const user_id = this.props.user_id;
        const name = this.state.tagName;
        const note_id = this.props.note.id;

        this.props.createTag({name, user_id})
            .then((res) => {
                const tag_id = res.tag.id;
                this.props.createNoteTag({note_id, tag_id});
            }
        )
        
    }


    render() {
        return null;
    }
}