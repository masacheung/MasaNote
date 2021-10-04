import React from "react";
import { Link } from "react-router-dom"

export default class NotebooksIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            modal: false,
            notebookmodal: false,
            rename: null,
            renameNotebook: ""
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCreateNotebook = this.handleCreateNotebook.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenNotebookModal = this.handleOpenNotebookModal.bind(this);
        this.handleCloseNotebookModal = this.handleCloseNotebookModal.bind(this);
        this.handleOpenRenameModal = this.handleOpenRenameModal.bind(this);
        this.handleRename = this.handleRename.bind(this);   
    }

    componentDidMount(){
        this.props.fetchNotebooks();
    }

    handleDelete(notebookId){
        this.props.deleteNotebook(notebookId);
    }

    handleCreateNotebook() {
        let newNotebook = {
            name: this.state.name,
            user_id: this.props.currentUser.id
        }
        this.props.createNotebook(newNotebook);
        this.handleCloseNotebookModal();
    }

    update(field) {
        return e => {this.state({[field]: e.currentTarget.value})}
    }

    handleOpenModal() {
        this.setState({modal: true})
    }

    handleCloseModal() {
        this.setState({modal: false})
    }

    handleOpenNotebookModal() {
        this.setState({notebookmodal: true})
    }

    handleCloseNotebookModal() {
        this.setState({notebookmodal: false})
    }

    handleOpenRenameModal(notebook) {
        this.handleOpenModal();

        this.setState({
            rename: notebook,
            renameNotebook: notebook.name
        })
    }

    handleRename() {
        let notebook = this.state.rename;
        notebook.name = this.state.renameNotebook;
        this.props.updateNotebook(notebook);
        this.handleCloseModal();
    }

    render() {
        if(!this.props.notebooks) {
            return (
                <div>
                    <h1>Notebooks</h1>
                    <h2>{this.props.notebooks.length} notebook</h2>
                </div>
            )
        }

        return (
            <div className="notebooks-index">
                <div className="notebooks-index-header">
                    <h1>Notebooks</h1>
                    <div className="notebooks-index-notebooks">
                        <h2>{this.props.notebooks.length} notebook</h2>
                    </div>
                </div>
                <ul className="notebooks-index-sub-header"> 
                    <li>
                        <div className="sub-header-title">TITLE</div>
                        <div className="sub-header-created">CREATED BY</div>
                        <div className="sub-header-updated">UPDATED</div>
                        <div className="sub-header-actions">ACTIONS</div>
                    </li>
                </ul>

                <div className="notebooks-index-allnotebooks">
                    {this.props.notebooks.map((notebook => <li>{notebook.name}</li>))}
                </div>
            </div>
        );
    }
}