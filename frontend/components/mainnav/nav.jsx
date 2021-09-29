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
            title: "Untitled",
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
                        <Link to="/notes">Notes</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={this.props.logout}>Log out {this.props.currentUser.username}</Link>
                    </li>
                </ul>
                <div className="social">
                    <a href="https://www.linkedin.com/in/man-tat-masa-cheung-725b39b8/"></a>
                    <a href="https://github.com/masacheung"></a>
                </div>
            </div>
        )
    }
}

export default Nav;