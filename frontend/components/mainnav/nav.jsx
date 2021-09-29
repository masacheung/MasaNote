import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.handleNewNote = this.handleNewNote.bind(this)
    }

    handleNewNote() {
        let notebookId = null;
        console.log(this.props.currentUser.id);

        let newNote = {
            title: "",
            body: "",
            user_id: this.props.currentUser.id,
            notebook_id: notebookId
        }
        console.log(newNote);
        this.props.createNote(newNote)
            .then((res) => this.props.history.push(`/notes/${res.note.id}`))
    }

    render() {
        return(
            <div className="main-nav">
                <div className="main-nav-user">
                    <div className="main-nav-username">
                        {this.props.currentUser.username}
                    </div>
                </div>
                <button className="new-note" onClick={this.handleNewNote}>
                    <div className="new-note-icon">+</div><div>New Note</div>
                </button>
                <ul className="main-nav-list">
                    <li>
                        <Link to="/" onClick={this.props.logout}>Log out {this.props.currentUser.username}</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Nav;