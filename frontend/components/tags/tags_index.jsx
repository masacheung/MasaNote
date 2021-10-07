import React from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import { formatDateNotebook } from "../../util/date_util";

export default class TagsIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            modal: false,
            tagmodal: false,
            rename: null,
            renameTag: ""
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCreateTag = this.handleCreateTag.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenTagModal = this.handleOpenTagModal.bind(this);
        this.handleCloseTagModal = this.handleCloseTagModal.bind(this);
        this.handleOpenRenameModal = this.handleOpenRenameModal.bind(this);
        this.handleRename = this.handleRename.bind(this);   
    }

    componentDidMount(){
        this.props.fetchTags();
    }

    handleDelete(tagId){
        this.props.deleteTag(tagId);
    }

    handleCreateTag(){
        let tag = {
            name: this.state.name,
            user_id: this.props.currentUser.id
        }
        this.props.createTag(tag);
        this.handleCloseTagModal();
    }

    update(field){
        return e => {this.setState({[field]: e.currentTarget.value})}
    }

    handleOpenModal() {
        this.setState({modal: true})
    }

    handleCloseModal() {
        this.setState({modal: false})
    }

    handleOpenTagModal() {
        this.setState({tagmodal: true})
    }

    handleCloseTagModal() {
        this.setState({tagmodal: false})
    }

    handleOpenRenameModal(tag) {
        this.handleOpenModal();

        this.setState({
            rename: tag,
            renameTag: tag.name
        })
    }

    handleRename() {
        let tag = this.state.rename;
        tag.name = this.state.renameTag;
        this.props.updateTag(tag);
        this.handleCloseModal();
    }

    render() {
        let singleTag;
        if (this.props.tags.length <= 1){
            singleTag = "tag";
        }else {
            singleTag = "tags";
        }

        console.log(this.props.tags);

        return (
            <div className="notebooks-index">
                <div className="notebooks-index-header">
                    <h1>Tags</h1>
                    <div className="notebooks-index-notebooks">
                        <h2>{this.props.tags.length} {singleTag}</h2>
                        <button onClick={this.handleOpenTagModal} className="notebooks-index-new-notebook-button">
                            <div><img src={window.tagimg} className="notebooks-index-new-notebook-img" /> New Tag</div>
                        </button>
                    </div>
                </div>
                <ul className="notebooks-index-sub-header">
                    <li>
                        <div className="sub-header-title">NAME</div>
                        <div className="sub-header-created">CREATED BY</div>
                        <div className="sub-header-updated">UPDATED</div>
                        <div className="sub-header-actions">ACTIONS</div>
                    </li>
                    {this.props.tags.map(tag => 
                        <li key={tag.id}>
                            <div className="notebooks-index-list-title">
                                <Link to={`/tags/${tag.id}`} className="link"><img src={window.tagimg} className="notebooks-index-new-notebook-img" /> {tag.name}</Link>
                            </div>
                            <div className="notebooks-index-list-created">{this.props.currentUser.username}</div>
                            <div className="notebooks-index-list-updated">{formatDateNotebook(tag.updated_at)}</div>
                            <div className="notebooks-index-list-actions">
                                <button className="rename-button" onClick={() => this.handleOpenRenameModal(tag)}>Rename</button>
                                <button className="delete-button" onClick={() => this.handleDelete(tag.id)}>Delete</button>
                            </div>
                        </li>
                        )
                    }
                </ul>
                <Modal isOpen={this.state.modal} className="overlay">
                    <div className="my-modal">
                        <h2 className="modal-title">Rename tag</h2>
                        <label className="modal-name">Name</label>
                        <input className="rename-notebook-input" type="text" placeholder="Tag name" value={this.state.renameTag} onChange={this.update('renameTag')}/>
                        <div className="modal-buttons">
                                <button className="cancel" onClick={this.handleCloseModal}>Cancel</button>
                                <button className="continue" onClick={this.handleRename}>Continue</button>
                        </div>
                    </div>
                </Modal>

                <Modal isOpen={this.state.tagmodal} className="overlay">
                    <div className="my-create-modal">
                        <h2 className="create-modal-title">Create new tag</h2>
                        <p>Tags are useful for grouping notes around a common topic.</p>
                        <label className="create-modal-name">Name</label>
                        <input className="create-modal-notebook-input" type="text" placeholder="Tag name" value={this.state.name} onChange={this.update('name')}/>
                        <div className="create-modal-buttons">
                            <button className="create-modal-cancel" onClick={this.handleCloseTagModal}>Cancel</button>
                            <button className="create-modal-create" onClick={this.handleCreateTag}>Create</button>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}