import React from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import { formatDateNotebook } from "../../util/date_util";

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
        return e => {this.setState({[field]: e.currentTarget.value})}
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

        let singleNotebook;
        if (this.props.notebooks.length <= 1){
            singleNotebook = "notebook";
        }else {
            singleNotebook = "notebooks";
        }

        console.log(this.props.currentUser);

        return (
            <div className="notebooks-index">
                <div className="notebooks-index-header">
                    <h1>Notebooks</h1>
                    <div className="notebooks-index-notebooks">
                        <h2>{this.props.notebooks.length} {singleNotebook}</h2>

                        <button onClick={this.handleOpenNotebookModal} className="notebooks-index-new-notebook-button">
                            <div><img src={window.notebook} className="notebooks-index-new-notebook-img" /> New Notebook</div>
                        </button>
                    </div>
                </div>
                <ul className="notebooks-index-sub-header"> 
                    <li>
                        <div className="sub-header-title">TITLE</div>
                        <div className="sub-header-created">CREATED BY</div>
                        <div className="sub-header-updated">UPDATED</div>
                        <div className="sub-header-actions">ACTIONS</div>
                    </li>
                    {
                        this.props.notebooks.map((notebook) => 
                        <li key={notebook.id}>
                            <div className="notebooks-index-list-title"><img src={window.notebook} className="notebooks-index-new-notebook-img" /> {notebook.name}</div>
                            <div className="notebooks-index-list-created">{this.props.currentUser.username}</div>
                            <div className="notebooks-index-list-updated">{formatDateNotebook(notebook.updated_at)}</div>
                            <div className="notebooks-index-list-actions">
                                <button className="rename-button" onClick={() => this.handleOpenRenameModal(notebook)}>Rename</button>
                                <button className="delete-button" onClick={() => this.handleDelete(notebook.id)}>Delete</button>
                            </div>
                        </li>)
                    }
                </ul>
                <Modal isOpen={this.state.modal} className="my-modal">
                    <div>
                        <h2 className="modal-title">Rename notebook</h2>
                        <label className="modal-name">Name</label>
                        <input className="rename-notebook-input" type="text" placeholder="Notebook name" value={this.state.renameNotebook} onChange={this.update('renameNotebook')}/>
                        <div className="modal-buttons">
                                <button className="cancel" onClick={this.handleCloseModal}>Cancel</button>
                                <button className="continue" onClick={this.handleRename}>Continue</button>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}
