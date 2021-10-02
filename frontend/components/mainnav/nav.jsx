import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.handleNewNote = this.handleNewNote.bind(this)
    }

    handleNewNote() {
        let notebookId = 1;
        // console.log(this.props.currentUser.id);

        let newNote = {
            title: "",
            body: "",
            user_id: this.props.currentUser.id,
            notebook_id: notebookId
        }
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
                    <div className="new-note-icon">+</div><div className="new-note-name">New Note</div>
                </button>
                <ul className="main-nav-list">
                    <li>
                        <div className="main-nav-img-note">
                            <img src={window.note} className="main-nav-note-img"/>
                            <Link to="/notes" className="main-nav-notes-title">Notes</Link>
                        </div>
                    </li>
                    <li>
                        <div className="main-nav-img-note">
                            <img src={window.notebook} className="main-nav-note-img"/>
                            <Link to="" className="main-nav-notes-title">Notebooks</Link>
                        </div>
                    </li>
                    <li>
                        <div className="main-nav-img-note">
                        <img src={window.logoutimg} className="main-nav-note-img"/>
                        <Link to="/" onClick={this.props.logout}>Log out {this.props.currentUser.username}</Link>
                        </div>
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